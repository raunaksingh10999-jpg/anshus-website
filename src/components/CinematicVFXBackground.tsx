import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  speedX: number;
  speedY: number;
  pulseSpeed: number;
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

    // Subtle restrained cinematic ambient motes
    const particleCount = width < 768 ? 25 : 45;
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const baseAlpha = Math.random() * 0.18 + 0.05;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.6,
        alpha: baseAlpha,
        baseAlpha,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -(Math.random() * 0.2 + 0.05),
        pulseSpeed: Math.random() * 0.015 + 0.005,
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
      time += 0.01;

      // Soft cinematic dust motes
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
        const alpha = p.baseAlpha + Math.sin(time + i) * 0.05;

        ctx.fillStyle = `rgba(85, 183, 255, ${Math.max(0.02, alpha)})`;
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
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 select-none opacity-60"
      aria-hidden="true"
    />
  );
};
