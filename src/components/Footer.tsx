import React from 'react';
import { ArrowUp, Instagram, Youtube, Mail, Film, Heart, Phone, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-dark-950 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand & Closing Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-accent-cyan/40 flex items-center justify-center">
                <Film className="w-4 h-4 text-accent-cyan" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-widest">
                {personalInfo.brandTagline}
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-400">
              CRAFTED FRAME BY FRAME.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href="#work" className="hover:text-accent-cyan transition-colors">
              Work
            </a>
            <a href="#comparison" className="hover:text-accent-cyan transition-colors">
              Breakdown
            </a>
            <a href="#socials" className="hover:text-accent-cyan transition-colors">
              Reels
            </a>
            <a href="#tools" className="hover:text-accent-cyan transition-colors">
              Tools
            </a>
            <a href="#about" className="hover:text-accent-cyan transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent-cyan transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            {personalInfo.whatsAppUrl && (
              <a
                href={personalInfo.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            )}

            <a
              href={personalInfo.portfolioWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-400 hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors"
              aria-label="Anshu's Website"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-dark-900 border border-white/10 text-neutral-400 hover:text-accent-cyan hover:border-accent-cyan/50 transition-colors"
              aria-label="Email contact"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="group p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright and signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {currentYear} {personalInfo.name}. All visual works and rights reserved.</p>
          <p className="flex items-center gap-1.5 text-neutral-400">
            <span>Designed for cinematic storytelling</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
