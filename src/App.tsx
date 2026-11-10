import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowreelSection } from './components/ShowreelSection';
import { VideoEditingSection } from './components/VideoEditingSection';
import { GraphicDesignSection } from './components/GraphicDesignSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { CinematicVFXBackground } from './components/CinematicVFXBackground';
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

      {/* 1. Premium Navigation */}
      <Navbar />

      {/* Main Content Flow: Completely Separated Video Editing and Graphic Design */}
      <main className="relative z-10">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. My Showreel */}
        <ShowreelSection />

        {/* 4. Dedicated Video Editing Portfolio (Separate Section) */}
        <VideoEditingSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Dedicated Graphic Design Portfolio (Separate Section) */}
        <GraphicDesignSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. About Me */}
        <AboutSection />

        {/* 7. Software & Skills */}
        <SkillsSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
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
