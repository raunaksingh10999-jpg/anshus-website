import React, { useState, useMemo } from 'react';
import { Play, Film, Tv, Smartphone, Layers } from 'lucide-react';
import { videoProjects } from '../data/portfolio';
import { Project } from '../types';

interface VideoEditingSectionProps {
  onSelectProject: (project: Project) => void;
}

type SectionFilter = 'all' | 'Video Editing' | 'Reels and Shorts' | 'Reels Motion Graphic';

export const VideoEditingSection: React.FC<VideoEditingSectionProps> = ({ onSelectProject }) => {
  const [selectedSection, setSelectedSection] = useState<SectionFilter>('all');

  // Exact 3 categories from Google Sites
  const videoEditingProjects = useMemo(() => {
    return videoProjects.filter((p) => p.section === 'Video Editing');
  }, []);

  const reelsShortsProjects = useMemo(() => {
    return videoProjects.filter((p) => p.section === 'Reels and Shorts');
  }, []);

  const motionGraphicsProjects = useMemo(() => {
    return videoProjects.filter((p) => p.section === 'Reels Motion Graphic');
  }, []);

  const showVideoEditing = selectedSection === 'all' || selectedSection === 'Video Editing';
  const showReelsShorts = selectedSection === 'all' || selectedSection === 'Reels and Shorts';
  const showMotionGraphics = selectedSection === 'all' || selectedSection === 'Reels Motion Graphic';

  return (
    <div className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-electric-bright/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Film className="w-3.5 h-3.5 text-electric-bright" />
          <span>ORIGINAL PORTFOLIO</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>VIDEO </span>
          <span className="text-gradient-cyan text-electric-glow">
            SHOWCASE
          </span>
        </h2>

        {/* Section Switcher Tabs matching Google Sites */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          <button
            onClick={() => setSelectedSection('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
              selectedSection === 'all'
                ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
                : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>All Videos ({videoProjects.length})</span>
          </button>

          <button
            onClick={() => setSelectedSection('Video Editing')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
              selectedSection === 'Video Editing'
                ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
                : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Video Editing ({videoEditingProjects.length})</span>
          </button>

          <button
            onClick={() => setSelectedSection('Reels and Shorts')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
              selectedSection === 'Reels and Shorts'
                ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
                : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Reels and Shorts ({reelsShortsProjects.length})</span>
          </button>

          <button
            onClick={() => setSelectedSection('Reels Motion Graphic')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
              selectedSection === 'Reels Motion Graphic'
                ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
                : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Reels Motion Graphic ({motionGraphicsProjects.length})</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: VIDEO EDITING (16:9 Landscape) */}
      {showVideoEditing && videoEditingProjects.length > 0 && (
        <section id="video-editing" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cinema-border/60">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric-bright">
                <Tv className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                  Video Editing
                </h3>
                <p className="text-xs font-mono text-text-muted">
                  16:9 Landscape • YouTube Videos, Commercials & Narrative Edits
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-mono text-electric-bright bg-electric/10 border border-electric/20 font-medium">
              {videoEditingProjects.length} Videos
            </span>
          </div>

          {/* 16:9 Landscape Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videoEditingProjects.map((project) => (
              <article
                key={project.id}
                title={project.title}
                data-cursor-text="PLAY"
                onClick={() => onSelectProject(project)}
                className="group relative aspect-video rounded-2xl bg-black border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer"
              >
                {/* 16:9 Thumbnail with Zero Background Distortions */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                />

                {/* Subtle Contrast Gradient */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                {/* Centered Play Button */}
                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-electric/25 blur-md scale-125 group-hover:scale-150 transition-all duration-300" />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cinema-bg/75 group-hover:bg-electric text-white flex items-center justify-center border border-white/20 group-hover:border-electric-bright shadow-[0_0_20px_rgba(22,139,255,0.45)] group-hover:shadow-[0_0_30px_rgba(85,183,255,0.85)] transform scale-95 group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: REELS AND SHORTS (9:16 Portrait) */}
      {showReelsShorts && reelsShortsProjects.length > 0 && (
        <section id="reels-shorts" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cinema-border/60">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric-bright">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                  Reels and Shorts
                </h3>
                <p className="text-xs font-mono text-text-muted">
                  9:16 Portrait • Instagram Reels, YouTube Shorts & Viral Edits
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-mono text-electric-bright bg-electric/10 border border-electric/20 font-medium">
              {reelsShortsProjects.length} Reels
            </span>
          </div>

          {/* 9:16 Portrait Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {reelsShortsProjects.map((project) => (
              <article
                key={project.id}
                title={project.title}
                data-cursor-text="PLAY"
                onClick={() => onSelectProject(project)}
                className="group relative aspect-[9/16] rounded-2xl bg-black border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer"
              >
                {/* 9:16 Thumbnail */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                />

                {/* Subtle Contrast Gradient */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                {/* Centered Play Button */}
                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-electric/25 blur-md scale-125 group-hover:scale-150 transition-all duration-300" />
                    <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-cinema-bg/75 group-hover:bg-electric text-white flex items-center justify-center border border-white/20 group-hover:border-electric-bright shadow-[0_0_20px_rgba(22,139,255,0.45)] group-hover:shadow-[0_0_30px_rgba(85,183,255,0.85)] transform scale-95 group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: REELS MOTION GRAPHIC (9:16 Portrait) */}
      {showMotionGraphics && motionGraphicsProjects.length > 0 && (
        <section id="reels-motion-graphic" className="space-y-6 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cinema-border/60">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric-bright">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                  Reels Motion Graphic
                </h3>
                <p className="text-xs font-mono text-text-muted">
                  9:16 Portrait • Motion Graphics, Kinetic Visuals & Animation
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-mono text-electric-bright bg-electric/10 border border-electric/20 font-medium">
              {motionGraphicsProjects.length} Motion Reels
            </span>
          </div>

          {/* 9:16 Motion Graphics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {motionGraphicsProjects.map((project) => (
              <article
                key={project.id}
                title={project.title}
                data-cursor-text="PLAY"
                onClick={() => onSelectProject(project)}
                className="group relative aspect-[9/16] rounded-2xl bg-black border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer"
              >
                {/* 9:16 Motion Thumbnail */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                />

                {/* Subtle Contrast Gradient */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                {/* Centered Play Button */}
                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-electric/25 blur-md scale-125 group-hover:scale-150 transition-all duration-300" />
                    <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-cinema-bg/75 group-hover:bg-electric text-white flex items-center justify-center border border-white/20 group-hover:border-electric-bright shadow-[0_0_20px_rgba(22,139,255,0.45)] group-hover:shadow-[0_0_30px_rgba(85,183,255,0.85)] transform scale-95 group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
