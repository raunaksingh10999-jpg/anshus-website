import React, { useEffect, useState } from 'react';
import { Play, Download, Send, Linkedin, Instagram, Phone, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { SoftwareFloatingCards } from './SoftwareFloatingCards';

export const Hero: React.FC = () => {
  // Live running 24 FPS timecode cadence
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
      className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden"
    >
      {/* Apple-style soft ambient lights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-electric/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[320px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Viewfinder corner crop marks */}
      <div className="absolute top-28 left-6 sm:left-12 w-5 h-5 border-t border-l border-white/15 pointer-events-none" />
      <div className="absolute top-28 right-6 sm:right-12 w-5 h-5 border-t border-r border-white/15 pointer-events-none" />
      <div className="absolute bottom-4 left-6 sm:left-12 w-5 h-5 border-b border-l border-white/15 pointer-events-none" />
      <div className="absolute bottom-4 right-6 sm:right-12 w-5 h-5 border-b border-r border-white/15 pointer-events-none" />

      {/* Hero Outer Wrapper: Allows 7 floating software cards to flank left and right with ZERO overlap */}
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Floating Software Cards (Desktop flanks + Mobile responsive grid) */}
        <SoftwareFloatingCards />

        {/* Central Hero Column */}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Prominent Profile Portrait with Liquid Glass Rim & Glow */}
          <div className="relative mb-7 group">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-electric via-emerald-400 to-electric-bright opacity-40 blur-xl group-hover:opacity-75 transition-all duration-700" />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-3xl overflow-hidden border-2 border-white/25 group-hover:border-electric bg-[#08090C] shadow-2xl transition-all duration-500">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            {/* Live Availability Badge */}
            <div className="absolute -bottom-2 -right-1 sm:bottom-1 sm:right-1 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/90 border border-emerald-400/50 text-[10px] font-mono text-emerald-400 shadow-xl backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold tracking-wider">AVAILABLE</span>
            </div>
          </div>

          {/* Availability Status Capsule */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-mono tracking-widest text-text-secondary mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-electric-bright font-medium">AVAILABLE FOR COMMISSIONS</span>
          </div>

          {/* Main Heading: ANSHU KUSHWAHA */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-tight leading-[1.12] text-text-primary uppercase select-none">
            <span>ANSHU </span>
            <span className="text-gradient-cyan text-electric-glow">
              KUSHWAHA
            </span>
          </h1>

          {/* Professional Identity: Video Editor | Graphic Designer | AI Video Creator */}
          <div className="mt-3.5 sm:mt-4 inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono tracking-wider uppercase text-electric-bright font-semibold">
            <span>VIDEO EDITOR</span>
            <span className="text-white/30">•</span>
            <span>GRAPHIC DESIGNER</span>
            <span className="text-white/30">•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 inline text-emerald-400" />
              AI VIDEO CREATOR
            </span>
          </div>

          {/* Introduction */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl font-sans leading-relaxed">
            {personalInfo.supportingDescription}
          </p>

          {/* Cinematic Film Timeline Detail */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 px-4 py-2 rounded-xl liquid-glass-pill text-[11px] font-mono tracking-wider text-text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-white font-semibold">REC</span>
              <span className="text-electric-bright font-medium">{formatTimecode()}</span>
            </div>
            <span className="text-white/20">•</span>
            <span>24.00 FPS</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="hidden sm:inline">PRORES 4444 XQ</span>
            <span className="text-white/20 hidden md:inline">•</span>
            <span className="hidden md:inline">[ 2.39 : 1 ANAMORPHIC ]</span>
          </div>

          {/* Action Buttons: Liquid Glass Styling with Specular Highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="#video-editing"
              data-cursor-text="EXPLORE"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white liquid-glass-btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            >
              <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
              <span>VIEW MY WORK</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Anshu-Singh-Kushwaha-CV.pdf"
              data-cursor-text="DOWNLOAD"
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary liquid-glass-btn-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            >
              <Download className="w-4 h-4 text-electric-bright group-hover:translate-y-0.5 transition-transform" />
              <span>DOWNLOAD CV</span>
            </a>

            <a
              href="#contact"
              data-cursor-text="CONTACT"
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary liquid-glass-btn-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            >
              <Send className="w-3.5 h-3.5 text-electric-bright group-hover:translate-x-0.5 transition-transform" />
              <span>CONTACT ME</span>
            </a>
          </div>

          {/* Social Media Links with Liquid Glass Capsule Styling */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric/50 hover:scale-110 active:scale-95 transition-all duration-300"
              title="LinkedIn"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric/50 hover:scale-110 active:scale-95 transition-all duration-300"
              title="Instagram"
              aria-label="Instagram profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric/50 hover:scale-110 active:scale-95 transition-all duration-300"
              title="WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric/50 hover:scale-110 active:scale-95 transition-all duration-300"
              title="Email"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};