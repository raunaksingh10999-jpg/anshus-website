import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Film, Radio } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'work', 'tools', 'comparison', 'socials', 'experiments', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Tools', href: '#tools' },
    { name: 'Breakdown', href: '#comparison' },
    { name: 'Reels & Shorts', href: '#socials' },
    { name: 'Lab', href: '#experiments' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Creator Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-neutral-100 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-accent-cyan/40 group-hover:border-accent-cyan transition-colors">
            <Film className="w-4 h-4 text-accent-cyan group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-lg bg-accent-cyan/10 blur-sm group-hover:bg-accent-cyan/20 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-widest text-white group-hover:text-accent-cyan transition-colors">
              {personalInfo.brandTagline}
            </span>
            <span className="text-[10px] tracking-wider text-neutral-400 font-mono -mt-0.5">
              VFX & MOTION
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors rounded-full ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Availability Status + Contact CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {personalInfo.availableForProjects && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE</span>
            </div>
          )}

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-accent-cyan to-accent-violet hover:from-white hover:to-accent-cyan transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="px-3 py-1.5 text-xs font-semibold text-black bg-accent-cyan rounded-full uppercase tracking-wider"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-dark-900 border border-white/10 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-accent-cyan border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
          </div>

          {personalInfo.availableForProjects && (
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.availabilityText}</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
