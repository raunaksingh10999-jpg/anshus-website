import React, { useState, useMemo } from 'react';
import { Play, Film, Clapperboard, Sparkles, Tv, Home, Layers, Video, Smartphone } from 'lucide-react';
import { videoProjects } from '../data/portfolio';
import { Project, VideoCategory } from '../types';

interface VideoEditingSectionProps {
  onSelectProject: (project: Project) => void;
}

type OrientationFilter = 'all' | '16:9' | '9:16';

export const VideoEditingSection: React.FC<VideoEditingSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('All Videos');
  const [selectedOrientation, setSelectedOrientation] = useState<OrientationFilter>('all');

  const categories: { id: VideoCategory; label: string; icon: React.ElementType }[] = [
    { id: 'All Videos', label: 'All Categories', icon: Film },
    { id: 'Commercial Ads', label: 'Commercial Ads', icon: Tv },
    { id: 'Real Estate Videos', label: 'Real Estate', icon: Home },
    { id: 'Brand Promotional Videos', label: 'Brand Promotional', icon: Clapperboard },
    { id: 'AI Generated Videos', label: 'AI Generated', icon: Sparkles },
    { id: 'Motion Graphics', label: 'Motion Graphics', icon: Layers },
    { id: 'Social Media Reels', label: 'Social Reels', icon: Smartphone },
    { id: 'Documentary Videos', label: 'Documentary', icon: Video },
  ];

  // Base filtered by category
  const categoryFiltered = useMemo(() => {
    if (selectedCategory === 'All Videos') return videoProjects;
    return videoProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Split into horizontal (16:9) and vertical (9:16)
  const horizontalProjects = useMemo(() => {
    return categoryFiltered.filter((p) => p.aspectRatio !== '9:16');
  }, [categoryFiltered]);

  const verticalProjects = useMemo(() => {
    return categoryFiltered.filter((p) => p.aspectRatio === '9:16');
  }, [categoryFiltered]);

  const showHorizontal = selectedOrientation === 'all' || selectedOrientation === '16:9';
  const showVertical = selectedOrientation === 'all' || selectedOrientation === '9:16';

  return (
    <section id="video-editing" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-electric-bright/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Film className="w-3.5 h-3.5 text-electric-bright" />
          <span>PORTFOLIO / SHOWCASE</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>VIDEO </span>
          <span className="text-gradient-cyan text-electric-glow">
            EDITING
          </span>
        </h2>

        <p className="mt-3 text-base sm:text-lg font-mono text-electric-bright font-medium">
          Stories told through motion.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-text-secondary font-sans leading-relaxed max-w-xl mx-auto">
          From high-energy commercial cuts and architectural property walkthroughs to generative AI reels and viral short-form sequences in their true native proportions.
        </p>
      </div>

      {/* Primary Orientation Group Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
        <button
          onClick={() => setSelectedOrientation('all')}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
            selectedOrientation === 'all'
              ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
              : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>All Orientations</span>
        </button>

        <button
          onClick={() => setSelectedOrientation('16:9')}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
            selectedOrientation === '16:9'
              ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
              : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
          }`}
        >
          <Tv className="w-3.5 h-3.5" />
          <span>Horizontal (16:9)</span>
        </button>

        <button
          onClick={() => setSelectedOrientation('9:16')}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
            selectedOrientation === '9:16'
              ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
              : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Vertical Reels (9:16)</span>
        </button>
      </div>

      {/* Secondary Video Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const CatIcon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
                isActive
                  ? 'bg-white/15 text-electric-bright border border-electric/40 font-semibold'
                  : 'bg-cinema-card/60 text-text-muted hover:text-white hover:bg-cinema-card border border-cinema-border/60'
              }`}
            >
              <CatIcon className="w-3 h-3" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Empty State */}
      {horizontalProjects.length === 0 && verticalProjects.length === 0 && (
        <div className="text-center py-20 rounded-2xl bg-cinema-card border border-cinema-border">
          <Film className="w-10 h-10 text-text-muted mx-auto mb-3" />
          <p className="font-mono text-sm text-text-secondary">No video projects found matching these criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All Videos');
              setSelectedOrientation('all');
            }}
            className="mt-4 px-4 py-1.5 text-xs font-mono text-electric-bright underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      <div className="space-y-16">
        {/* GROUP 1: HORIZONTAL VIDEO GALLERY (16:9 Widescreen) */}
        {showHorizontal && horizontalProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cinema-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric-bright">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    HORIZONTAL VIDEO GALLERY
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    16:9 Landscape • Commercial Ads, Real Estate Walkthroughs & Brand Films
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-mono text-electric-bright bg-electric/10 border border-electric/20 font-medium">
                {horizontalProjects.length} {horizontalProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            </div>

            {/* Landscape Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {horizontalProjects.map((project) => (
                <article
                  key={project.id}
                  title={project.title}
                  data-cursor-text="PLAY"
                  onClick={() => onSelectProject(project)}
                  className="group relative aspect-video rounded-2xl bg-black border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer"
                >
                  {/* Clean 16:9 Thumbnail (Zero Blurred Background) */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />

                  {/* Subtle Contrast Gradient */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                  {/* Centered Circular Play Button with Subtle Cyan Glow */}
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
          </div>
        )}

        {/* GROUP 2: VERTICAL VIDEO GALLERY (9:16 Mobile Reels & Shorts) */}
        {showVertical && verticalProjects.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cinema-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric-bright">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    VERTICAL VIDEO GALLERY
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    9:16 Portrait • YouTube Shorts, Instagram Reels & AI Motion Sequences
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-mono text-electric-bright bg-electric/10 border border-electric/20 font-medium">
                {verticalProjects.length} {verticalProjects.length === 1 ? 'Reel' : 'Reels'}
              </span>
            </div>

            {/* Portrait Grid: Balanced portrait columns (4 on desktop, 3 on tablet, 2 on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {verticalProjects.map((project) => (
                <article
                  key={project.id}
                  title={project.title}
                  data-cursor-text="PLAY"
                  onClick={() => onSelectProject(project)}
                  className="group relative aspect-[9/16] rounded-2xl bg-black border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer"
                >
                  {/* Clean 9:16 Portrait Video Thumbnail (Zero Blurred Background) */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />

                  {/* Subtle Contrast Gradient */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                  {/* Centered Circular Play Button with Subtle Cyan Glow */}
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
          </div>
        )}
      </div>
    </section>
  );
};
