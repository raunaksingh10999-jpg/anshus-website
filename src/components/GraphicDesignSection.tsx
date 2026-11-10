import React, { useState, useMemo } from 'react';
import { Palette, Maximize2, ArrowRight, Sparkles, Image, Layout, Tag, Smartphone, Layers, Eye } from 'lucide-react';
import { graphicProjects } from '../data/portfolio';
import { Project, GraphicCategory } from '../types';

interface GraphicDesignSectionProps {
  onSelectProject: (project: Project) => void;
}

export const GraphicDesignSection: React.FC<GraphicDesignSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<GraphicCategory>('All Designs');

  const categories: { id: GraphicCategory; label: string; icon: React.ElementType }[] = [
    { id: 'All Designs', label: 'All Designs', icon: Palette },
    { id: 'Social Media Creatives', label: 'Social Creatives', icon: Smartphone },
    { id: 'Advertising Posters', label: 'Ad Posters', icon: Image },
    { id: 'Marketing Banners', label: 'Banners & Web', icon: Layout },
    { id: 'Brand Designs', label: 'Brand & Packaging', icon: Tag },
    { id: 'YouTube Thumbnails', label: 'Thumbnails', icon: Layers },
    { id: 'Promotional Creatives', label: 'Promotional', icon: Sparkles },
    { id: 'Typography Designs', label: 'Digital Art', icon: Eye },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Designs') return graphicProjects;
    return graphicProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="graphic-design" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cinema-border/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-bright/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header: Strict 3-Level Visual Hierarchy */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        {/* LEVEL 1: Section Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Palette className="w-3.5 h-3.5 text-electric-bright" />
          <span>VISUAL ART & CREATIVES</span>
        </div>

        {/* LEVEL 2: Section Headline */}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>GRAPHIC </span>
          <span className="text-gradient-cyan text-electric-glow">
            DESIGN
          </span>
        </h2>

        {/* LEVEL 3: Supporting Subtitle */}
        <p className="mt-3 text-base sm:text-lg font-mono text-electric-bright font-medium">
          Visual identities and creative designs.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-text-secondary font-sans leading-relaxed max-w-xl mx-auto">
          High-conversion social media creatives, advertising posters, brand packaging mockups, and digital compositions preserved in their true proportions.
        </p>
      </div>

      {/* Graphic Design Category Filter Tabs */}
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

      {/* Graphic Design Gallery Grid: Native Aspect Ratio Preservation */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 rounded-2xl bg-cinema-card border border-cinema-border">
          <Palette className="w-10 h-10 text-text-muted mx-auto mb-3" />
          <p className="font-mono text-sm text-text-secondary">No graphic design projects found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All Designs')}
            className="mt-4 px-4 py-1.5 text-xs font-mono text-electric-bright underline"
          >
            View all designs
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredProjects.map((project) => {
            const isVertical = project.aspectRatio === '9:16';
            const isSquare = project.aspectRatio === '1:1';
            const isBanner = project.aspectRatio === 'banner';

            const containerClass = isVertical
              ? 'aspect-[9/16] max-h-[520px]'
              : isSquare
              ? 'aspect-square'
              : isBanner
              ? 'aspect-[16/7]'
              : 'aspect-video';

            return (
              <article
                key={project.id}
                data-cursor-text="VIEW"
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-cinema-card border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with Native Proportion Preservation */}
                <div className={`relative w-full ${containerClass} overflow-hidden bg-black/85 flex items-center justify-center p-1 sm:p-2`}>
                  {/* Ambient Backdrop Glow */}
                  <div
                    className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${project.thumbnail})` }}
                  />

                  {/* Artwork Image with object-contain so zero artwork is cropped */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 z-30 flex flex-wrap items-center gap-1.5 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 text-electric-bright border border-electric/40 backdrop-blur-md font-semibold">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-white/10 text-text-primary border border-white/15 backdrop-blur-md">
                      {isVertical ? '9:16 Poster' : isSquare ? '1:1 Square' : isBanner ? 'Web Banner' : '16:9'}
                    </span>
                  </div>

                  {/* Center-Aligned View Indicator */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-electric text-white flex items-center justify-center shadow-electric-button transform scale-90 group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-electric-bright font-medium truncate">
                      {project.subtitle || project.role || 'GRAPHIC DESIGN'}
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary group-hover:text-electric-bright transition-colors mt-1 leading-snug line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-text-secondary line-clamp-2 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Divider: Software Tags & View Action */}
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
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-electric-bright group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">
                      <span>VIEW ART</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
