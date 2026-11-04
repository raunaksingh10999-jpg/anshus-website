import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'showreel', 'work', 'services', 'about', 'workflow', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
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
    { name: 'HOME', href: '#hero', sectionId: 'hero' },
    { name: 'SHOWREEL', href: '#showreel', sectionId: 'showreel' },
    { name: 'WORK', href: '#work', sectionId: 'work' },
    { name: 'SERVICES', href: '#services', sectionId: 'services' },
    { name: 'ABOUT', href: '#about', sectionId: 'about' },
    { name: 'CONTACT', href: '#contact', sectionId: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cinema-bg/92 backdrop-blur-xl border-b border-cinema-border py-3.5 shadow-2xl shadow-black/70'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Creator Brand Logo & Monogram */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
          aria-label="Anshu Kushwaha - Return to top"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-cinema-card border border-cinema-border group-hover:border-electric transition-colors duration-300">
            <span className="font-mono text-xs font-bold text-electric">AK</span>
            <div className="absolute inset-0 rounded-lg bg-electric/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-sm tracking-wider text-text-primary group-hover:text-electric-bright transition-colors uppercase">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">
              VIDEO EDITOR / MOTION DESIGNER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-cinema-card/75 border border-cinema-border backdrop-blur-md"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1 text-xs font-mono tracking-wider uppercase transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-electric ${
                  isActive
                    ? 'text-white bg-electric/15 text-electric-bright font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5 font-normal'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-electric-bright shadow-[0_0_8px_#55B7FF]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Availability Status & Let's Talk CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {personalInfo.availableForCommissions && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/25 text-[11px] font-mono text-electric-bright">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-bright opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
              </span>
              <span>AVAILABLE</span>
            </div>
          )}

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-white bg-cinema-card border border-cinema-border hover:border-electric hover:shadow-electric-button transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-electric-bright group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger & Quick Contact Button */}
        <div className="flex md:hidden items-center gap-2.5">
          <a
            href="#contact"
            className="px-3.5 py-1.5 text-xs font-mono font-semibold text-white bg-electric rounded-full uppercase tracking-wider"
          >
            TALK
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-cinema-card border border-cinema-border text-text-secondary hover:text-white focus:outline-none focus:ring-1 focus:ring-electric"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cinema-bg/95 border-b border-cinema-border backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-sm font-mono tracking-wider uppercase text-text-secondary hover:text-electric-bright border-b border-cinema-border/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted" />
              </a>
            ))}
          </div>

          {personalInfo.availableForCommissions && (
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-electric-bright">
              <span className="h-2 w-2 rounded-full bg-electric animate-pulse" />
              <span>{personalInfo.availabilityText}</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
