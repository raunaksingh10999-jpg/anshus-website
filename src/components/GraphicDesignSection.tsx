import React, { useState, useMemo } from 'react';
import { Palette, Maximize2, Sparkles, Image, Layout, Tag, Smartphone, Layers, Eye, Square } from 'lucide-react';
import { graphicProjects } from '../data/portfolio';
import { Project, GraphicCategory } from '../types';

interface GraphicDesignSectionProps {
  onSelectProject: (project: Project) => void;
}

type GraphicFormatFilter = 'all' | '1:1' | '9:16' | 'banner';

export const GraphicDesignSection: React.FC<GraphicDesignSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<GraphicCategory>('All Designs');
  const [selectedFormat, setSelectedFormat] = useState<GraphicFormatFilter>('all');

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

  // Base filtered by category
  const categoryFiltered = useMemo(() => {
    if (selectedCategory === 'All Designs') return graphicProjects;
    return graphicProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Split into square (1:1), vertical (9:16), and banner (16:9 / banner)
  const squareProjects = useMemo(() => {
    return categoryFiltered.filter((p) => p.aspectRatio === '1:1');
  }, [categoryFiltered]);

  const verticalProjects = useMemo(() => {
    return categoryFiltered.filter((p) => p.aspectRatio === '9:16');
  }, [categoryFiltered]);

  const bannerProjects = useMemo(() => {
    return categoryFiltered.filter((p) => p.aspectRatio === '16:9' || p.aspectRatio === 'banner');
  }, [categoryFiltered]);

  const showSquare = selectedFormat === 'all' || selectedFormat === '1:1';
  const showVertical = selectedFormat === 'all' || selectedFormat === '9:16';
  const showBanner = selectedFormat === 'all' || selectedFormat === 'banner';

  return (
    <section id="graphic-design" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cinema-border/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-bright/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Palette className="w-3.5 h-3.5 text-electric-bright" />
          <span>VISUAL ART & CREATIVES</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>GRAPHIC </span>
          <span className="text-gradient-cyan text-electric-glow">
            DESIGN
          </span>
        </h2>

        <p className="mt-3 text-base sm:text-lg font-mono text-electric-bright font-medium">
          Visual identities and creative designs.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-text-secondary font-sans leading-relaxed max-w-xl mx-auto">
          High-conversion social media creatives, advertising posters, brand mockups, and digital compositions displayed in their true aspect ratios.
        </p>
      </div>

      {/* Format / Orientation Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
        <button
          onClick={() => setSelectedFormat('all')}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
            selectedFormat === 'all'
              ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
              : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>All Formats</span>
        </button>

        <button
          onClick={() => setSelectedFormat('1:1')}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
            selectedFormat === '1:1'
              ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
              : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
          }`}
        >
          <Square className="w-3.5 h-3.5" />
          <span>Square (1:1)</span>
        </button>

        <button
          onClick={() => setSelectedFormat('9:16')}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
            selectedFormat === '9:16'
              ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
              : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
          }`}
        >
          <Image className="w-3.5 h-3.5" />
          <span>Posters (9:16)</span>
        </button>

        <button
          onClick={() => setSelectedFormat('banner')}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
            selectedFormat === 'banner'
              ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
              : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
          }`}
        >
          <Layout className="w-3.5 h-3.5" />
          <span>Banners & Web</span>
        </button>
      </div>

      {/* Category Filter Chips */}
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
      {squareProjects.length === 0 && verticalProjects.length === 0 && bannerProjects.length === 0 && (
        <div className="text-center py-20 rounded-2xl bg-cinema-card border border-cinema-border">
          <Palette className="w-10 h-10 text-text-muted mx-auto mb-3" />
          <p className="font-mono text-sm text-text-secondary">No design projects found matching these criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All Designs');
              setSelectedFormat('all');
            }}
            className="mt-4 px-4 py-1.5 text-xs font-mono text-electric-bright underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      <div className="space-y-16">
        {/* GROUP 1: SQUARE CREATIVES & BRAND DESIGNS (1:1) */}
        {showSquare && squareProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cinema-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric-bright">
                  <Square className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    SQUARE CREATIVES & BRAND DESIGNS
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    1:1 Ratio • Social Media Ads, Product Creatives & Packaging Mockups
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-mono text-electric-bright bg-electric/10 border border-electric/20 font-medium">
                {squareProjects.length} {squareProjects.length === 1 ? 'Design' : 'Designs'}
              </span>
            </div>

            {/* Square Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {squareProjects.map((project) => (
                <article
                  key={project.id}
                  title={project.title}
                  data-cursor-text="VIEW"
                  onClick={() => onSelectProject(project)}
                  className="group relative aspect-square rounded-2xl bg-black border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer flex items-center justify-center p-3 sm:p-4"
                >
                  {/* High-Resolution Artwork (object-contain preserves 100% of the graphic) */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />

                  {/* Centered Maximize Indicator on Hover */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-electric text-white flex items-center justify-center shadow-electric-button transform scale-90 group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* GROUP 2: VERTICAL KEY ART & POSTERS (9:16) */}
        {showVertical && verticalProjects.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cinema-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric-bright">
                  <Image className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    VERTICAL KEY ART & POSTERS
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    9:16 Portrait • Visual Storytelling Posters, Surreal Digital Art & Character Key Art
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-mono text-electric-bright bg-electric/10 border border-electric/20 font-medium">
                {verticalProjects.length} {verticalProjects.length === 1 ? 'Poster' : 'Posters'}
              </span>
            </div>

            {/* Vertical Posters Grid: 4 columns on desktop, 3 on tablet, 2 on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {verticalProjects.map((project) => (
                <article
                  key={project.id}
                  title={project.title}
                  data-cursor-text="VIEW"
                  onClick={() => onSelectProject(project)}
                  className="group relative aspect-[9/16] rounded-2xl bg-black border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer flex items-center justify-center p-2"
                >
                  {/* High-Resolution Portrait Artwork */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />

                  {/* Centered Maximize Indicator on Hover */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <div className="w-11 h-11 rounded-full bg-electric text-white flex items-center justify-center shadow-electric-button transform scale-90 group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* GROUP 3: WIDESCREEN MARKETING BANNERS & HEADERS */}
        {showBanner && bannerProjects.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cinema-border/60">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric-bright">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    MARKETING BANNERS & WEB HEADERS
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    16:9 & Widescreen • Channel Banners, Tech Header Creatives & Promotional Web Banners
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[11px] font-mono text-electric-bright bg-electric/10 border border-electric/20 font-medium">
                {bannerProjects.length} {bannerProjects.length === 1 ? 'Banner' : 'Banners'}
              </span>
            </div>

            {/* Banner Grid: 2 columns on desktop and tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {bannerProjects.map((project) => (
                <article
                  key={project.id}
                  title={project.title}
                  data-cursor-text="VIEW"
                  onClick={() => onSelectProject(project)}
                  className="group relative aspect-video rounded-2xl bg-black border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer flex items-center justify-center p-3 sm:p-4"
                >
                  {/* High-Resolution Landscape Artwork */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />

                  {/* Centered Maximize Indicator on Hover */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-electric text-white flex items-center justify-center shadow-electric-button transform scale-90 group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5 text-white" />
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
