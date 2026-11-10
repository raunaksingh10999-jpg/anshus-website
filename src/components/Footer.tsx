import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, Instagram, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050508] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1.5">
            <span className="font-display font-extrabold text-xl text-text-primary tracking-wider uppercase">
              {personalInfo.name}
            </span>
            <p className="text-xs font-mono text-electric-bright tracking-wider uppercase">
              VIDEO EDITOR | GRAPHIC DESIGNER | AI VIDEO CREATOR
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-mono uppercase tracking-wider text-text-secondary" aria-label="Footer navigation">
            <a href="#hero" className="hover:text-electric-bright transition-colors">
              HOME
            </a>
            <a href="#video-editing" className="hover:text-electric-bright transition-colors">
              VIDEO EDITING
            </a>
            <a href="#reels-shorts" className="hover:text-electric-bright transition-colors">
              REELS & SHORTS
            </a>
            <a href="#reels-motion-graphic" className="hover:text-electric-bright transition-colors">
              MOTION GRAPHICS
            </a>
            <a href="#graphic-design" className="hover:text-electric-bright transition-colors">
              GRAPHIC DESIGN
            </a>
            <a href="#about" className="hover:text-electric-bright transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="hover:text-electric-bright transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.resumeUrl}
              download="Anshu-Singh-Kushwaha-CV.pdf"
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric transition-all"
              title="Download CV"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric transition-all"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric transition-all"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric transition-all"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-electric-bright hover:border-electric transition-all"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full liquid-glass-pill text-text-secondary hover:text-white hover:border-electric transition-all ml-1 active:scale-95"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="text-text-secondary">
            Apple-Inspired Liquid Glass UI • Designed for Video & Visual Storytelling
          </p>
        </div>
      </div>
    </footer>
  );
};