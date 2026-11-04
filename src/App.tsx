import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowreelSection } from './components/ShowreelSection';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WorkflowSection } from './components/WorkflowSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { CinematicVFXBackground } from './components/CinematicVFXBackground';
import { FloatingRobot } from './components/FloatingRobot';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-cinema-bg text-text-primary font-sans antialiased selection:bg-electric selection:text-white overflow-x-hidden">
      {/* Subtle cinematic ambient background */}
      <CinematicVFXBackground />

      {/* Subtle film grain texture overlay */}
      <div className="film-grain fixed inset-0 pointer-events-none z-20" />

      {/* Signature Electric-Blue Cursor Lightning */}
      <CustomCursor />

      {/* Floating Cybernetic Companion AI Sentinel (Collision-Free Bottom-Corner Positioning) */}
      <FloatingRobot />

      {/* 1. Premium Navigation */}
      <Navbar />

      {/* Main Content Flow in Exact Specified Order */}
      <main className="relative z-10">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Showreel (Directly after Hero) */}
        <ShowreelSection />

        {/* 4. Premium Selected-Project Grid */}
        <PortfolioShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Services */}
        <ServicesSection />

        {/* 6. About Me */}
        <AboutSection />

        {/* 7. Creative Workflow */}
        <WorkflowSection />

        {/* 8. Tools and Skills */}
        <SkillsSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
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
