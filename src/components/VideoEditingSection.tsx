import React, { useState, useMemo } from 'react';
import { Play, Film, ArrowRight, Clapperboard, Sparkles, Tv, Home, Layers, Video, Smartphone } from 'lucide-react';
import { videoProjects } from '../data/portfolio';
import { Project, VideoCategory } from '../types';

interface VideoEditingSectionProps {
  onSelectProject: (project: Project) => void;
}

export const VideoEditingSection: React.FC<VideoEditingSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('All Videos');

  const categories: { id: VideoCategory; label: string; icon: React.ElementType }[] = [
    { id: 'All Videos', label: 'All Videos', icon: Film },
    { id: 'Commercial Ads', label: 'Commercial Ads', icon: Tv },
    { id: 'Real Estate Videos', label: 'Real Estate', icon: Home },
    { id: 'Brand Promotional Videos', label: 'Brand Promotional', icon: Clapperboard },
    { id: 'AI Generated Videos', label: 'AI Generated', icon: Sparkles },
    { id: 'Motion Graphics', label: 'Motion Graphics', icon: Layers },
    { id: 'Social Media Reels', label: 'Social Reels', icon: Smartphone },
    { id: 'Documentary Videos', label: 'Documentary', icon: Video },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Videos') return videoProjects;
    return videoProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="video-editing" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-electric-bright/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header: Strict 3-Level Visual Hierarchy */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        {/* LEVEL 1: Section Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Film className="w-3.5 h-3.5 text-electric-bright" />
          <span>PORTFOLIO / SHOWCASE</span>
        </div>

        {/* LEVEL 2: Section Headline */}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>VIDEO </span>
          <span className="text-gradient-cyan text-electric-glow">
            EDITING
          </span>
        </h2>

        {/* LEVEL 3: Supporting Subtitle */}
        <p className="mt-3 text-base sm:text-lg font-mono text-electric-bright font-medium">
          Stories told through motion.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-text-secondary font-sans leading-relaxed max-w-xl mx-auto">
          From high-energy commercial cuts and architectural property reels to generative AI visuals and viral short-form retention sequences.
        </p>
      </div>

      {/* Video Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const CatIcon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
                isActive
                  ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
                  : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
              }`}
            >
              <CatIcon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Video Projects Grid: Consistent 16:9 thumbnails, consistent card heights */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 rounded-2xl bg-cinema-card border border-cinema-border">
          <Film className="w-10 h-10 text-text-muted mx-auto mb-3" />
          <p className="font-mono text-sm text-text-secondary">No video projects found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All Videos')}
            className="mt-4 px-4 py-1.5 text-xs font-mono text-electric-bright underline"
          >
            View all videos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              data-cursor-text="PLAY"
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl bg-cinema-card border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer flex flex-col justify-between"
            >
              {/* 16:9 Widescreen Video Thumbnail Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-black/85 flex items-center justify-center">
                {/* Ambient Blurred Backdrop Glow */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-25 scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${project.thumbnail})` }}
                />

                {/* Main Video Thumbnail */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="relative z-10 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                />

                {/* Subtle Contrast Gradient */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-cinema-card/90 via-transparent to-black/35 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

                {/* Top Badges: Category & Duration */}
                <div className="absolute top-3 left-3 z-30 flex flex-wrap items-center gap-1.5 pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 text-electric-bright border border-electric/40 backdrop-blur-md font-semibold">
                    {project.category}
                  </span>
                  {project.clientName && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-electric/20 text-electric-bright border border-electric/30 backdrop-blur-md">
                      {project.clientName}
                    </span>
                  )}
                </div>

                {project.duration && (
                  <div className="absolute top-3 right-3 z-30 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-black/85 text-text-primary border border-white/10 backdrop-blur-md pointer-events-none">
                    {project.duration}
                  </div>
                )}

                {/* Centered Circular Play Button with Subtle Cyan Glow */}
                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-electric/25 blur-md scale-125 group-hover:scale-150 transition-all duration-300" />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cinema-bg/75 group-hover:bg-electric text-white flex items-center justify-center border border-white/20 group-hover:border-electric-bright shadow-[0_0_20px_rgba(22,139,255,0.45)] group-hover:shadow-[0_0_30px_rgba(85,183,255,0.85)] transform scale-95 group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card Content & Metadata */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-electric-bright font-medium truncate">
                    {project.subtitle || project.role || 'VIDEO PRODUCTION'}
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary group-hover:text-electric-bright transition-colors mt-1 leading-snug line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-text-secondary line-clamp-2 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Divider: Software Tags & Watch Project Button */}
                <div className="mt-5 pt-4 border-t border-cinema-border/70 flex items-center justify-between text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.software?.slice(0, 3).map((sw) => (
                      <span
                        key={sw}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-text-muted bg-cinema-secondary border border-cinema-border"
                      >
                        {sw.replace('Adobe ', '')}
                      </span>
                    ))}
                    {project.software && project.software.length > 3 && (
                      <span className="text-[9px] font-mono text-text-muted">
                        +{project.software.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-electric-bright group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">
                    <span>WATCH</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
