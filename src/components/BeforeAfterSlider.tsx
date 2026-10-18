import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles, Layers, Eye } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Sample comparison presets that can be easily updated or switched
  const comparisons = [
    {
      id: 'cyberpunk',
      title: 'Neon Cyberpunk Transformation',
      category: 'Environment Compositing & Relighting',
      beforeLabel: 'RAW Daytime Footage',
      afterLabel: 'Final Night VFX & Color Grade',
      beforeImg: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80',
      details: 'Day-for-night grade, sky replacement, neon lighting reflections, atmospheric rain particles, and anamorphic bloom.'
    },
    {
      id: 'cinematic-grade',
      title: 'Kodak Film Emulation Pass',
      category: 'DaVinci Resolve ACES Pipeline',
      beforeLabel: 'Flat Sony S-Log3',
      afterLabel: 'Kodak 2383 Film Print & Halation',
      beforeImg: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80',
      details: 'Subtractive saturation curves, organic 35mm film grain, red edge halation, and contrast balance.'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const current = comparisons[activeIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="comparison" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-mono tracking-widest uppercase mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>VFX & COLOR BREAKDOWN</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          FROM RAW FOOTAGE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-white to-accent-cyan">
            TO FINAL VISION.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Drag the interactive slider below to reveal the transformation from flat, uncorrected raw camera logs to fully graded, composited cinematic masters.
        </p>

        {/* Preset Selector */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {comparisons.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveIdx(i);
                setSliderPosition(50);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeIdx === i
                  ? 'bg-accent-violet text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                  : 'bg-dark-900 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              Preset {i + 1}: {c.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Drag Splitter Container */}
      <div className="max-w-5xl mx-auto">
        <div
          ref={containerRef}
          data-cursor-text="DRAG"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black select-none cursor-ew-resize group"
        >
          {/* After VFX / Final Graded Image (Full Width Underneath) */}
          <img
            src={current.afterImg}
            alt={current.afterLabel}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF]" />
            <span className="text-xs font-mono font-semibold text-white tracking-wide">
              {current.afterLabel}
            </span>
          </div>

          {/* Before RAW Footage Image (Clipped by slider position) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={current.beforeImg}
              alt={current.beforeLabel}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                height: '100%',
              }}
            />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-400" />
              <span className="text-xs font-mono font-semibold text-neutral-300 tracking-wide">
                {current.beforeLabel}
              </span>
            </div>
          </div>

          {/* Draggable Divider Line & Knob */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-accent-cyan via-white to-accent-violet pointer-events-none shadow-[0_0_15px_#00F0FF]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-900 border-2 border-accent-cyan flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.6)]">
              <Sliders className="w-4 h-4 text-accent-cyan" />
            </div>
          </div>
        </div>

        {/* Breakdown Description Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-dark-900/60 border border-white/5 backdrop-blur-md">
          <div>
            <span className="text-[11px] font-mono uppercase text-accent-violet tracking-wider">
              {current.category}
            </span>
            <h4 className="font-display font-bold text-white text-base">
              {current.title}
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              {current.details}
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-500 whitespace-nowrap self-end sm:self-center">
            * Replaceable breakdown assets in <code className="text-accent-cyan">portfolio.ts</code>
          </div>
        </div>
      </div>
    </section>
  );
};
