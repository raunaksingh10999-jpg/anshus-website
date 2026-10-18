import React, { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  time: number;
}

interface ElectricStreak {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  midX: number;
  midY: number;
  alpha: number;
  decay: number;
  width: number;
}

export const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  // High performance positions without React re-renders
  const targetPos = useRef({ x: -200, y: -200 });
  const prevTargetPos = useRef({ x: -200, y: -200 });
  const smoothPos = useRef({ x: -200, y: -200 });
  const trailPos = useRef({ x: -200, y: -200 });
  const history = useRef<TrailPoint[]>([]);
  const streaks = useRef<ElectricStreak[]>([]);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    // Check if user has reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Check if user is on touch device
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      prevTargetPos.current = { ...targetPos.current };
      targetPos.current = { x: e.clientX, y: e.clientY };

      // Initialize on first movement
      if (smoothPos.current.x < 0) {
        smoothPos.current = { x: e.clientX, y: e.clientY };
        trailPos.current = { x: e.clientX, y: e.clientY };
      }

      // Feed trail history
      const now = performance.now();
      history.current.push({ x: e.clientX, y: e.clientY, time: now });

      // Calculate movement speed for restrained dynamic streak trigger
      const dx = targetPos.current.x - prevTargetPos.current.x;
      const dy = targetPos.current.y - prevTargetPos.current.y;
      const speed = Math.hypot(dx, dy);

      // Spawn restrained electric streak only during fast movement
      if (speed > 18 && streaks.current.length < 5) {
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.7;
        const length = Math.min(speed * 0.9 + 12, 40);
        const streakX2 = e.clientX - Math.cos(angle) * length;
        const streakY2 = e.clientY - Math.sin(angle) * length;
        const midJitter = (Math.random() - 0.5) * 8;

        streaks.current.push({
          x: e.clientX,
          y: e.clientY,
          targetX: streakX2,
          targetY: streakY2,
          midX: (e.clientX + streakX2) / 2 + midJitter,
          midY: (e.clientY + streakY2) / 2 + midJitter,
          alpha: 0.85,
          decay: Math.random() * 0.05 + 0.06,
          width: Math.random() * 1.2 + 0.8,
        });
      }

      // Check hover states
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest('[data-cursor-text]');
        if (cursorEl) {
          setCursorLabel(cursorEl.getAttribute('data-cursor-text'));
          setIsHovered(true);
          isHoveredRef.current = true;
        } else if (
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.cinema-glass-hover')
        ) {
          setCursorLabel(null);
          setIsHovered(true);
          isHoveredRef.current = true;
        } else {
          setCursorLabel(null);
          setIsHovered(false);
          isHoveredRef.current = false;
        }
      }

      // Update CSS variables for edge glow on nearby elements
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation (lerp) for natural organic cursor fluid motion
      const lerpSpeed = 0.22;
      smoothPos.current.x += (targetPos.current.x - smoothPos.current.x) * lerpSpeed;
      smoothPos.current.y += (targetPos.current.y - smoothPos.current.y) * lerpSpeed;

      // Secondary lagging trailing node for kinetic elasticity
      const trailLerp = 0.12;
      trailPos.current.x += (smoothPos.current.x - trailPos.current.x) * trailLerp;
      trailPos.current.y += (smoothPos.current.y - trailPos.current.y) * trailLerp;

      const sx = smoothPos.current.x;
      const sy = smoothPos.current.y;
      const hovered = isHoveredRef.current;

      const now = performance.now();
      // Keep last 160ms for smooth cinematic motion trail
      history.current = history.current.filter((p) => now - p.time < 160);
      const points = history.current;

      // 1. Soft electric-blue radial ambient light
      if (sx > 0 && sy > 0) {
        const glowRadius = hovered ? 150 : 110;
        const radial = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowRadius);
        radial.addColorStop(0, hovered ? 'rgba(85, 183, 255, 0.14)' : 'rgba(22, 139, 255, 0.08)');
        radial.addColorStop(0.4, hovered ? 'rgba(22, 139, 255, 0.06)' : 'rgba(22, 139, 255, 0.03)');
        radial.addColorStop(1, 'rgba(8, 9, 12, 0)');

        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(sx, sy, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Fading energy ribbon connecting recent pointer coordinates
      if (points.length > 2) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Electric outer glow trail
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const ageRatio = (now - p1.time) / 160;
          const alpha = (1 - ageRatio) * 0.45;
          const strokeWidth = (1 - ageRatio) * (hovered ? 2.5 : 1.8);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(22, 139, 255, ${alpha})`;
          ctx.lineWidth = strokeWidth + 2;
          ctx.shadowColor = '#168BFF';
          ctx.shadowBlur = 8;
          ctx.stroke();

          // Bright inner electric core
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(85, 183, 255, ${alpha * 1.2})`;
          ctx.lineWidth = Math.max(strokeWidth * 0.6, 0.7);
          ctx.shadowBlur = 0;
          ctx.stroke();
        }
        ctx.restore();
      }

      // 3. Render occasional fine electric streaks
      if (streaks.current.length > 0) {
        ctx.save();
        ctx.shadowColor = '#55B7FF';
        ctx.shadowBlur = 6;

        for (let i = streaks.current.length - 1; i >= 0; i--) {
          const s = streaks.current[i];
          s.alpha -= s.decay;

          if (s.alpha <= 0) {
            streaks.current.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.quadraticCurveTo(s.midX, s.midY, s.targetX, s.targetY);
          ctx.strokeStyle = `rgba(85, 183, 255, ${s.alpha})`;
          ctx.lineWidth = s.width;
          ctx.stroke();
        }
        ctx.restore();
      }

      // 4. Sleek cinematic cursor reticle
      if (sx > 0 && sy > 0) {
        ctx.save();

        // Outer smooth reactive ring
        const ringRadius = hovered ? 24 : 12;
        ctx.beginPath();
        ctx.arc(sx, sy, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = hovered ? 'rgba(85, 183, 255, 0.7)' : 'rgba(22, 139, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.shadowColor = '#168BFF';
        ctx.shadowBlur = hovered ? 10 : 4;
        ctx.stroke();

        // Sharp central focal dot
        ctx.beginPath();
        ctx.arc(targetPos.current.x, targetPos.current.y, hovered ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#55B7FF';
        ctx.shadowBlur = 6;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Non-blocking canvas for electric-blue energy trail */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-30 select-none"
        aria-hidden="true"
      />

      {/* Floating cursor contextual label */}
      {cursorLabel && (
        <div
          className="pointer-events-none fixed z-40 px-2.5 py-1 rounded bg-cinema-card/90 border border-electric/40 text-[10px] font-mono tracking-widest text-electric-bright uppercase backdrop-blur-md shadow-lg shadow-black/80 transition-opacity duration-150"
          style={{
            left: `${targetPos.current.x + 14}px`,
            top: `${targetPos.current.y - 24}px`,
            transform: 'translate3d(0, 0, 0)',
          }}
        >
          {cursorLabel}
        </div>
      )}
    </>
  );
};
