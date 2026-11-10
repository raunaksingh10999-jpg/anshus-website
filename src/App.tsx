import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoEditingSection } from './components/VideoEditingSection';
import { GraphicDesignSection } from './components/GraphicDesignSection';
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

      {/* Signature Electric-Blue Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Flow: Strictly Original Google Sites Portfolio Sections */}
      <main className="relative z-10">
        {/* 1. Hero & Bio (Anshu Kushwaha) */}
        <Hero />

        {/* 2. Video Portfolio (Video Editing, Reels & Shorts, Reels Motion Graphic) */}
        <VideoEditingSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Graphic Design Portfolio */}
        <GraphicDesignSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* 5. Minimal Footer */}
      <Footer />

      {/* Full-Screen Edge-to-Edge Media Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
