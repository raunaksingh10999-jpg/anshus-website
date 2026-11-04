import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Hero: React.FC = () => {
  // Live running timecode inspired by professional non-linear video editing timelines (24 FPS)
  const [frames, setFrames] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrames((prev) => (prev >= 23 ? 0 : prev + 1));
    }, 1000 / 24);
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
      {/* Subtle cinematic electric ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-electric/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[250px] bg-electric-bright/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Viewfinder corner crop marks */}
      <div className="absolute top-28 left-6 sm:left-12 w-5 h-5 border-t border-l border-white/10 pointer-events-none" />
      <div className="absolute top-28 right-6 sm:right-12 w-5 h-5 border-t border-r border-white/10 pointer-events-none" />
      <div className="absolute bottom-16 left-6 sm:left-12 w-5 h-5 border-b border-l border-white/10 pointer-events-none" />
      <div className="absolute bottom-16 right-6 sm:right-12 w-5 h-5 border-b border-r border-white/10 pointer-events-none" />

      {/* Main Content Container with strict maximum width for balanced typography */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* LEVEL 1: Section Eyebrow & Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cinema-card/90 border border-cinema-border text-xs font-mono tracking-widest text-text-secondary mb-6 sm:mb-8 backdrop-blur-md shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-bright animate-ping" />
          <span className="text-text-primary font-semibold">
            {personalInfo.name}
          </span>
          <span className="text-text-muted">•</span>
          <span className="text-electric-bright font-medium">
            AVAILABLE FOR SELECT PROJECTS
          </span>
        </div>

        {/* LEVEL 2: Headline with Selective Creative Highlights & Balanced Composition */}
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-tight leading-[1.12] sm:leading-[1.14] text-text-primary uppercase max-w-4xl select-none">
          <span>I DON'T JUST </span>
          <span className="text-[#C8D1DF] font-semibold">EDIT VIDEOS.</span>
          <br className="hidden sm:inline" />
          <span className="sm:inline block mt-1 sm:mt-0"> I </span>
          <span className="text-gradient-cyan font-black">CREATE </span>
          <span className="text-gradient-electric text-electric-glow font-black">
            EXPERIENCES.
          </span>
        </h1>

        {/* Professional Creative Specialization Subtitle */}
        <div className="mt-4 sm:mt-5 text-xs sm:text-sm font-mono tracking-wider uppercase text-electric-bright/90 font-medium">
          <span>AI Video Editor</span>
          <span className="text-text-muted mx-2 sm:mx-3">|</span>
          <span>Motion Graphics Designer</span>
          <span className="text-text-muted mx-2 sm:mx-3">|</span>
          <span>Visual Storyteller</span>
        </div>

        {/* LEVEL 3: Supporting Description with Controlled Width */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-text-secondary max-w-xl font-sans font-normal leading-relaxed">
          {personalInfo.supportingDescription}
        </p>

        {/* Small Film Editing Metadata Timeline Detail */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-5 px-4 py-2 rounded-lg bg-cinema-card/60 border border-cinema-border/70 text-[11px] font-mono tracking-wider text-text-muted">
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

        {/* Action Buttons with Standardized Heights & Typography */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
          <a
            href="#work"
            data-cursor-text="EXPLORE"
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-electric hover:bg-electric-bright transition-all duration-300 shadow-electric-button transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
            <span>EXPLORE MY WORK</span>
          </a>

          <a
            href="#contact"
            data-cursor-text="CONTACT"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary bg-cinema-card border border-cinema-border hover:border-electric transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <span>LET'S CREATE SOMETHING</span>
            <ArrowRight className="w-4 h-4 text-electric-bright group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Understated Scroll Down Indicator */}
      <a
        href="#showreel"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted hover:text-electric-bright transition-colors group focus:outline-none"
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
