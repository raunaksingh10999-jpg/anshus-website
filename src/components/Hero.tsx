import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Hero: React.FC = () => {
  // Live running timecode inspired by professional non-linear video editing timelines
  const [frames, setFrames] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrames((prev) => (prev >= 23 ? 0 : prev + 1));
    }, 1000 / 24); // 24 FPS cadence
    return () => clearInterval(interval);
  }, []);

  const formatTimecode = () => {
    const f = frames.toString().padStart(2, '0');
    return `00:01:24:${f}`;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden bg-cinema-bg"
    >
      {/* Subtle cinematic electric-blue ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-electric/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-electric-bright/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle editor crop marks / viewfinder brackets in corners */}
      <div className="absolute top-28 left-8 sm:left-14 w-6 h-6 border-t border-l border-white/10 pointer-events-none" />
      <div className="absolute top-28 right-8 sm:right-14 w-6 h-6 border-t border-r border-white/10 pointer-events-none" />
      <div className="absolute bottom-16 left-8 sm:left-14 w-6 h-6 border-b border-l border-white/10 pointer-events-none" />
      <div className="absolute bottom-16 right-8 sm:right-14 w-6 h-6 border-b border-r border-white/10 pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Label & Production Indicator */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cinema-card/80 border border-cinema-border text-xs font-mono tracking-widest text-text-secondary mb-8 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-bright animate-ping" />
          <span className="text-text-primary font-medium tracking-widest">
            {personalInfo.eyebrow}
          </span>
        </div>

        {/* Oversized Cinematic Typographic Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.06] text-text-primary uppercase max-w-5xl select-none">
          I TURN IDEAS INTO <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-electric-bright text-electric-glow">
            CINEMATIC EXPERIENCES.
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl font-sans font-normal leading-relaxed">
          {personalInfo.supportingDescription}
        </p>

        {/* Small Cinematic Visual Detail Inspired by Film Editing */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 py-2 rounded-lg bg-cinema-card/50 border border-cinema-border/60 text-[11px] font-mono tracking-wider text-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white font-semibold">REC</span>
            <span className="text-electric-bright font-medium">{formatTimecode()}</span>
          </div>
          <span className="text-cinema-border">•</span>
          <span>24.00 FPS</span>
          <span className="text-cinema-border hidden sm:inline">•</span>
          <span className="hidden sm:inline">PRORES 4444 XQ</span>
          <span className="text-cinema-border hidden md:inline">•</span>
          <span className="hidden md:inline">[ 2.39 : 1 ANAMORPHIC ]</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <a
            href="#work"
            data-cursor-text="EXPLORE"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-electric hover:bg-electric-bright transition-all duration-300 shadow-electric-button transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
            <span>EXPLORE MY WORK</span>
          </a>

          <a
            href="#contact"
            data-cursor-text="CONTACT"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-text-primary bg-cinema-card border border-cinema-border hover:border-electric transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <span>LET'S CREATE SOMETHING</span>
            <ArrowRight className="w-4 h-4 text-electric-bright group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Understated Scroll Down Indicator */}
      <a
        href="#showreel"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-electric-bright transition-colors group focus:outline-none"
        aria-label="Scroll to showreel section"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted group-hover:text-electric-bright transition-colors">
          SHOWREEL
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-electric" />
      </a>
    </section>
  );
};
