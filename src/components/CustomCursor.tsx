import React, { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  time: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // High-performance positions
  const mousePos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const history = useRef<Point[]>([]);
  const sparks = useRef<Spark[]>([]);

  useEffect(() => {
    // Disable on touch devices
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
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const onMouseMove = (e: MouseEvent) => {
      prevMousePos.current = { ...mousePos.current };
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Update badge position directly with zero frame lag
      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${e.clientX + 16}px, ${e.clientY - 28}px, 0)`;
      }

      const now = performance.now();
      history.current.push({ x: e.clientX, y: e.clientY, time: now });

      // Calculate speed
      const dx = mousePos.current.x - prevMousePos.current.x;
      const dy = mousePos.current.y - prevMousePos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn electrical sparks when moving or dragging
      const sparkCount = isMouseDown ? 6 : Math.min(Math.floor(speed * 0.4) + 1, 5);
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const sparkSpeed = Math.random() * (isMouseDown ? 7 : 4) + 1.2;
        sparks.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * sparkSpeed + dx * 0.1,
          vy: Math.sin(angle) * sparkSpeed + dy * 0.1,
          life: 0,
          maxLife: Math.random() * 22 + 12,
          size: Math.random() * 2.2 + 1,
          color: Math.random() > 0.4 ? '#00F0FF' : Math.random() > 0.5 ? '#FFFFFF' : '#A855F7',
        });
      }

      // Contextual target hover detection
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorElement = target.closest('[data-cursor-text]');
        if (cursorElement) {
          setCursorText(cursorElement.getAttribute('data-cursor-text'));
          setIsHovered(true);
        } else if (
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]')
        ) {
          setCursorText(null);
          setIsHovered(true);
        } else {
          setCursorText(null);
          setIsHovered(false);
        }
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Fractal lightning bolt generator with recursive midpoint displacement
    const drawLightningBolt = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      displace: number,
      depth: number,
      color: string,
      lineWidth: number
    ) => {
      if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.shadowBlur = 14;
        ctx.shadowColor = color;
        ctx.stroke();
        return;
      }

      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * displace;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * displace;

      drawLightningBolt(x1, y1, midX, midY, displace / 1.8, depth - 1, color, lineWidth);
      drawLightningBolt(midX, midY, x2, y2, displace / 1.8, depth - 1, color, lineWidth);

      // Branching lightning arcs
      if (Math.random() < 0.28 && depth >= 2) {
        const branchX = midX + (Math.random() - 0.5) * displace * 1.6;
        const branchY = midY + (Math.random() - 0.5) * displace * 1.6;
        drawLightningBolt(midX, midY, branchX, branchY, displace / 2, depth - 1, '#A855F7', lineWidth * 0.6);
      }
    };

    // 60FPS animation loop
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = performance.now();
      // Keep last 130ms of trail
      history.current = history.current.filter((p) => now - p.time < 130);

      const pts = history.current;

      // Draw lightning trail connecting mouse movement
      if (pts.length > 1) {
        for (let i = 0; i < pts.length - 1; i++) {
          const p1 = pts[i];
          const p2 = pts[i + 1];
          const ageRatio = (now - p1.time) / 130;
          const alpha = 1 - ageRatio;

          // Electric neon cyan outer bolt
          drawLightningBolt(
            p1.x,
            p1.y,
            p2.x,
            p2.y,
            isMouseDown ? 32 : 18,
            3,
            `rgba(0, 240, 255, ${alpha * 0.9})`,
            isMouseDown ? 3.0 : 1.9
          );

          // Intense core white flash bolt
          drawLightningBolt(
            p1.x,
            p1.y,
            p2.x,
            p2.y,
            isMouseDown ? 16 : 9,
            2,
            `rgba(255, 255, 255, ${alpha * 0.98})`,
            isMouseDown ? 1.5 : 0.95
          );
        }
      }

      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // Crackling micro-lightning arcs around the cursor tip
      const arcRadius = isMouseDown ? 38 : isHovered ? 28 : 16;
      const arcCount = isMouseDown ? 7 : isHovered ? 5 : 3;

      for (let k = 0; k < arcCount; k++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * arcRadius + 6;
        const targetX = mx + Math.cos(angle) * dist;
        const targetY = my + Math.sin(angle) * dist;

        drawLightningBolt(
          mx,
          my,
          targetX,
          targetY,
          isMouseDown ? 16 : 10,
          2,
          k % 2 === 0 ? '#00F0FF' : '#FFFFFF',
          isMouseDown ? 2.0 : 1.1
        );
      }

      // Draw glowing plasma center core
      ctx.beginPath();
      ctx.arc(mx, my, isMouseDown ? 5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#00F0FF';
      ctx.fill();

      // Outer pulsing plasma electric field
      ctx.beginPath();
      ctx.arc(mx, my, isMouseDown ? 24 : isHovered ? 18 : 11, 0, Math.PI * 2);
      ctx.strokeStyle = isMouseDown ? 'rgba(0, 240, 255, 0.85)' : 'rgba(168, 85, 247, 0.6)';
      ctx.lineWidth = isMouseDown ? 1.8 : 1.2;
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#00F0FF';
      ctx.stroke();

      // Update and draw flying electric spark particles
      for (let i = sparks.current.length - 1; i >= 0; i--) {
        const s = sparks.current[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.93;
        s.vy *= 0.93;
        s.life++;

        if (s.life >= s.maxLife) {
          sparks.current.splice(i, 1);
          continue;
        }

        const sparkAlpha = 1 - s.life / s.maxLife;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * sparkAlpha, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = s.color;
        ctx.globalAlpha = sparkAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMouseDown, isHovered, isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Full-viewport canvas for high-performance VFX lightning discharge */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      />

      {/* Floating electric context badge ("PLAY", "DRAG", "VIEW", "EXPLORE") */}
      {cursorText && (
        <div
          ref={badgeRef}
          className="pointer-events-none fixed top-0 left-0 z-50 rounded-full px-3 py-1 bg-dark-950/90 border border-accent-cyan text-accent-cyan text-[10px] font-mono font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(0,240,255,0.8)] backdrop-blur-md animate-pulse will-change-transform"
        >
          ⚡ {cursorText}
        </div>
      )}
    </>
  );
};
