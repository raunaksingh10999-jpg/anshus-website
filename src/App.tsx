import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { SocialShowcase } from './components/SocialShowcase';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { CinematicVFXBackground } from './components/CinematicVFXBackground';
import { FloatingRobot } from './components/FloatingRobot';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-dark-950 text-neutral-100 font-sans selection:bg-accent-cyan selection:text-black">
      {/* Global Cinematic Floating VFX Animation Background */}
      <CinematicVFXBackground />

      {/* Floating Cybernetic Companion Sentinel Drone */}
      <FloatingRobot />

      {/* Film grain subtle overlay */}
      <div className="film-grain fixed inset-0 pointer-events-none z-30" />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* Full-screen Hero Section */}
        <Hero />

        {/* Endless Marquee Ticker */}
        <MarqueeTicker />

        {/* Selected Works Portfolio Showcase */}
        <PortfolioShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* Before and After VFX / Color Breakdown Slider */}
        <BeforeAfterSlider />

        {/* Instagram Reels & YouTube Shorts Showcase */}
        <SocialShowcase />

        {/* Tools Behind The Vision (Software & Skills) */}
        <SkillsSection />

        {/* Behind The Frames (About & Journey Timeline) */}
        <AboutSection />

        {/* Contact & Client Inquiry Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Full-Screen Video & Project Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
