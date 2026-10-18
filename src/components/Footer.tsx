import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cinema-border bg-cinema-bg pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-cinema-border/60">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
            <span className="font-display font-extrabold text-xl text-text-primary tracking-widest uppercase">
              {personalInfo.name}
            </span>
            <p className="text-xs font-mono text-electric-bright tracking-wider uppercase">
              VIDEO EDITOR / AI CREATOR / MOTION DESIGNER
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-widest text-text-secondary" aria-label="Footer navigation">
            <a href="#hero" className="hover:text-electric-bright transition-colors">
              HOME
            </a>
            <a href="#work" className="hover:text-electric-bright transition-colors">
              WORK
            </a>
            <a href="#services" className="hover:text-electric-bright transition-colors">
              SERVICES
            </a>
            <a href="#about" className="hover:text-electric-bright transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="hover:text-electric-bright transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-3">
            {personalInfo.whatsAppUrl && (
              <a
                href={personalInfo.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-cinema-card border border-cinema-border text-text-secondary hover:text-white hover:border-electric/50 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            )}

            <a
              href={personalInfo.portfolioWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-cinema-card border border-cinema-border text-text-secondary hover:text-electric-bright hover:border-electric/50 transition-colors"
              aria-label="Anshu's Google Sites Portfolio"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-cinema-card border border-cinema-border text-text-secondary hover:text-electric-bright hover:border-electric/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-cinema-secondary border border-cinema-border text-text-secondary hover:text-white hover:border-electric transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="text-text-secondary">
            Cinematic Portfolio • Designed for Visual Storytelling
          </p>
        </div>
      </div>
    </footer>
  );
};
