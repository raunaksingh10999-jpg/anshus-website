import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  speedX: number;
  speedY: number;
  layer: number; // 0 = background, 1 = midground, 2 = foreground
  pulseSpeed: number;
  angle: number;
}

export const CinematicVFXBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    let lastScrollY = scrollY;
    let scrollVelocity = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Palette: Cyan (#00F0FF), Violet (#8B5CF6), Amber (#FFB800), Pure White
    const colors = ['#00F0FF', '#8B5CF6', '#A855F7', '#FFFFFF', '#00F0FF'];

    // Create 3D-depth layered floating particles
    const particleCount = width < 768 ? 35 : 70;
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const layer = Math.random() < 0.25 ? 2 : Math.random() < 0.65 ? 1 : 0;
      const size = layer === 2 ? Math.random() * 2.8 + 2.0 : layer === 1 ? Math.random() * 1.8 + 1.0 : Math.random() * 1.0 + 0.5;
      const baseAlpha = layer === 2 ? Math.random() * 0.4 + 0.3 : layer === 1 ? Math.random() * 0.3 + 0.15 : Math.random() * 0.15 + 0.05;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * (0.15 + layer * 0.15),
        speedY: -(Math.random() * 0.25 + 0.1) * (1 + layer * 0.5),
        layer,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        angle: Math.random() * Math.PI * 2,
      };
    });

    // Horizontal cinematic anamorphic light streaks
    interface LightStreak {
      y: number;
      speed: number;
      width: number;
      alpha: number;
      color: string;
      x: number;
    }

    const streaks: LightStreak[] = [
      { y: height * 0.25, speed: 0.8, width: 260, alpha: 0.08, color: '#00F0FF', x: -300 },
      { y: height * 0.72, speed: 0.5, width: 340, alpha: 0.06, color: '#8B5CF6', x: -400 },
    ];

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.1;
      scrollVelocity = scrollY - lastScrollY;
      lastScrollY = scrollY;

      ctx.clearRect(0, 0, width, height);

      // In reduced motion mode, render a static cinematic ambient wash
      if (prefersReducedMotion) {
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.baseX, p.baseY, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.baseAlpha * 0.5;
          ctx.fill();
        });
        return;
      }

      // Draw subtle light streaks
      streaks.forEach((streak) => {
        streak.x += streak.speed;
        if (streak.x > width + streak.width) {
          streak.x = -streak.width - Math.random() * 200;
          streak.y = Math.random() * height;
        }

        const grad = ctx.createLinearGradient(streak.x, streak.y, streak.x + streak.width, streak.y);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(0.5, streak.color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.globalAlpha = streak.alpha;
        ctx.rect(streak.x, streak.y - 1, streak.width, 2);
        ctx.fill();
      });

      // Draw & update floating particles with parallax
      particles.forEach((p, idx) => {
        // Natural drift
        p.angle += p.pulseSpeed;
        p.x += p.speedX + Math.sin(p.angle) * 0.2;
        p.y += p.speedY;

        // Scroll parallax response based on depth layer
        const parallaxFactor = (p.layer + 1) * 0.12;
        const currentY = (p.y - scrollY * parallaxFactor) % height;
        const renderY = currentY < 0 ? currentY + height : currentY;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle alpha breathing pulse
        const pulseAlpha = Math.max(0.02, p.baseAlpha + Math.sin(p.angle) * 0.1);

        ctx.beginPath();
        ctx.arc(p.x, renderY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = pulseAlpha;

        // Glow for foreground particles
        if (p.layer === 2) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();

        // Connect close midground & foreground particles with delicate filament lines
        if (p.layer >= 1 && idx % 2 === 0) {
          for (let j = idx + 1; j < particles.length; j += 3) {
            const p2 = particles[j];
            if (p2.layer === p.layer) {
              const p2Y = (p2.y - scrollY * parallaxFactor) % height;
              const rY2 = p2Y < 0 ? p2Y + height : p2Y;

              const dx = p.x - p2.x;
              const dy = renderY - rY2;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 100) {
                ctx.beginPath();
                ctx.moveTo(p.x, renderY);
                ctx.lineTo(p2.x, rY2);
                ctx.strokeStyle = p.color;
                ctx.globalAlpha = (1 - dist / 100) * 0.08;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Dynamic Canvas Particles & Light Streaks */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Volumetric Floating Ambient Glow Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[650px] h-[550px] bg-accent-cyan/[0.045] rounded-full blur-[180px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] bg-accent-violet/[0.05] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[75%] left-[15%] w-[500px] h-[500px] bg-accent-purple/[0.04] rounded-full blur-[160px] pointer-events-none" />

      {/* VFX Viewport Corner Crosshairs & Framing Marks */}
      <div className="absolute top-20 left-6 text-white/10 font-mono text-[9px] tracking-widest hidden lg:block">
        + 00:00:24:12 // TRACK_VFX_A01
      </div>
      <div className="absolute top-20 right-6 text-white/10 font-mono text-[9px] tracking-widest hidden lg:block">
        REC ● 4K DCI 24FPS
      </div>
      <div className="absolute bottom-8 left-6 text-white/10 font-mono text-[9px] tracking-widest hidden lg:block">
        RENDER_PASS: ACEScc // D65
      </div>
      <div className="absolute bottom-8 right-6 text-white/10 font-mono text-[9px] tracking-widest hidden lg:block">
        + + +
      </div>

      {/* Subtle Cinematic Grid Guide Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #00F0FF 1px, transparent 1px), linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />
    </div>
  );
};
