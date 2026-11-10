import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  speedX: number;
  speedY: number;
  colorType: 'blue' | 'lime';
}

export const CinematicVFXBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Subtle restrained cinematic ambient motes (electric blue and soft lime green)
    const particleCount = width < 768 ? 24 : 40;
    const particles: Particle[] = Array.from({ length: particleCount }, (_, idx) => {
      const baseAlpha = Math.random() * 0.16 + 0.04;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.6,
        alpha: baseAlpha,
        baseAlpha,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: -(Math.random() * 0.18 + 0.04),
        colorType: idx % 4 === 0 ? 'lime' : 'blue',
      };
    });

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      time += 0.008;

      // Draw soft cinematic light dust
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around viewport edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle alpha breathing
        const alpha = Math.max(0.02, p.baseAlpha + Math.sin(time * 1.5 + i) * 0.04);

        if (p.colorType === 'lime') {
          ctx.fillStyle = `rgba(52, 211, 153, ${alpha * 0.85})`;
        } else {
          ctx.fillStyle = `rgba(85, 183, 255, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <>
      {/* Deep cinematic charcoal gradient backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[#050508]"
        aria-hidden="true"
      >
        {/* Soft Electric Blue ambient light orb (left-top) */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-electric/10 blur-[180px] animate-pulse-glow" />

        {/* Soft Lime-Green ambient light orb (right-center) */}
        <div className="absolute top-1/3 -right-28 w-[550px] h-[550px] rounded-full bg-emerald-500/[0.07] blur-[180px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

        {/* Soft Electric Blue ambient glow (bottom-left) */}
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-electric-bright/[0.06] blur-[170px]" />

        {/* Fine subtle film grain texture */}
        <div className="absolute inset-0 film-grain opacity-40 mix-blend-screen pointer-events-none" />
      </div>

      {/* Floating Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 select-none opacity-70"
        aria-hidden="true"
      />
    </>
  );
};