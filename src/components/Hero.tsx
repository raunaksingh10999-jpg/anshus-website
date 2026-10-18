import React from 'react';
import { ArrowDown, Play, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Dramatic cinematic radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-accent-violet/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid overlay for VFX viewport look */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Creator Name & Availability Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-white/10 text-xs font-mono tracking-widest text-neutral-300 mb-8 backdrop-blur-md shadow-lg shadow-black/40">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-white font-semibold">{personalInfo.name}</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">{personalInfo.availabilityText}</span>
        </div>

        {/* Oversized Cinematic Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white uppercase max-w-4xl">
          I DON'T JUST <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-400">EDIT VIDEOS.</span>
          <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet text-glow-cyan">
            I CREATE EXPERIENCES.
          </span>
        </h1>

        {/* Supporting Subheadline */}
        <p className="mt-6 text-sm sm:text-base md:text-lg font-mono text-accent-cyan/90 tracking-wide font-medium max-w-2xl">
          {personalInfo.subheadline}
        </p>

        {/* Short Editorial Description */}
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-sans leading-relaxed">
          {personalInfo.shortBio}
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <a
            href="#work"
            data-cursor-text="EXPLORE"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-display text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-accent-cyan via-white to-accent-violet hover:shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <Play className="w-4 h-4 fill-black text-black group-hover:scale-110 transition-transform" />
            <span>EXPLORE MY WORK</span>
          </a>

          <a
            href="#contact"
            data-cursor-text="CONTACT"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-display text-sm font-bold uppercase tracking-wider text-white bg-dark-900/80 border border-white/15 hover:border-accent-cyan/60 hover:bg-dark-800 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-1"
          >
            <span>LET'S WORK TOGETHER</span>
            <ChevronRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Quick Statistics Banner */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 pt-10 border-t border-white/10 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {personalInfo.yearsOfExperience}
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mt-1">
              Years Experience
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-accent-cyan">
              {personalInfo.projectsCompleted}
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mt-1">
              Projects Finished
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-accent-violet">
              {personalInfo.totalViews}
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mt-1">
              Views Generated
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {personalInfo.satisfactionRate}
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mt-1">
              Client Retention
            </span>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#work"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 hover:text-accent-cyan transition-colors group focus:outline-none"
        aria-label="Scroll to portfolio section"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-accent-cyan">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-neutral-600 group-hover:border-accent-cyan flex justify-center p-1 transition-colors">
          <div className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
        </div>
      </a>
    </section>
  );
};
