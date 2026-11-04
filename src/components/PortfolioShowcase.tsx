import React, { useState, useEffect, useMemo } from 'react';
import { Play, Sparkles, ArrowRight, Palette, Film, Maximize2, Info, Layers, Clapperboard, Smartphone } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';
import { Project } from '../types';

interface PortfolioShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAssetGuide, setShowAssetGuide] = useState(false);
  const [colCount, setColCount] = useState<number>(3);

  // Responsive column detection for seamless masonry packing without column splitting bugs
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColCount(1);
      } else if (width < 1024) {
        setColCount(2);
      } else {
        setColCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filterTabs = [
    { id: 'All', label: 'All Works', icon: Layers },
    { id: 'Cinematic', label: 'Cinematic (16:9)', icon: Clapperboard },
    { id: 'Vertical', label: 'Vertical & Reels (9:16)', icon: Smartphone },
    { id: 'Graphic Design', label: '🎨 Graphic Design', icon: Palette },
    { id: 'Motion Graphics', label: 'Motion Graphics', icon: Sparkles },
    { id: 'AI Video Creation', label: 'AI Video Creation', icon: Film },
    { id: 'Brand and Promotional Videos', label: 'Commercial & Brand', icon: Clapperboard },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return portfolioProjects;
    if (selectedCategory === 'Cinematic') {
      return portfolioProjects.filter((p) => p.aspectRatio === '16:9' && !p.isGraphic);
    }
    if (selectedCategory === 'Vertical') {
      return portfolioProjects.filter((p) => p.aspectRatio === '9:16' && !p.isGraphic);
    }
    if (selectedCategory === 'Graphic Design') {
      return portfolioProjects.filter((p) => p.category === 'Graphic Design' || p.isGraphic);
    }
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Distribute projects across columns for genuine, non-breaking Masonry flow
  const columns = useMemo(() => {
    const cols: Project[][] = Array.from({ length: colCount }, () => []);
    filteredProjects.forEach((project, index) => {
      cols[index % colCount].push(project);
    });
    return cols;
  }, [filteredProjects, colCount]);

  const isGraphicCategory = selectedCategory === 'Graphic Design';

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-electric-bright/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-bright" />
          <span>SELECTED WORK / 2023–PRESENT</span>
        </div>
        {/* LEVEL 2: Section Headline */}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>MADE TO BE </span>
          <span className="text-gradient-cyan text-electric-glow">
            WATCHED & REMEMBERED.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
          Explore a curated portfolio of cinematic edits, retention-engineered vertical reels, motion graphics, and graphic design campaigns.
        </p>
      </div>

      {/* Category Filter Navigation */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
                isActive
                  ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
                  : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Graphic Design Asset Helper Toggle */}
      {isGraphicCategory && (
        <div className="mb-10 p-5 rounded-2xl bg-cinema-card border border-cinema-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric-bright flex-shrink-0">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-white">
                Real Graphic Design Works
              </h4>
              <p className="text-xs text-text-secondary font-sans">
                Real commercial campaigns, product ads, packaging mockups, and digital compositions preserved without cropping.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAssetGuide(!showAssetGuide)}
            className="text-xs font-mono text-electric-bright hover:underline inline-flex items-center gap-1.5 flex-shrink-0"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{showAssetGuide ? 'Hide Asset Guide' : 'How to Add More Designs?'}</span>
          </button>
        </div>
      )}

      {showAssetGuide && isGraphicCategory && (
        <div className="mb-10 p-6 rounded-2xl bg-cinema-secondary border border-cinema-border text-xs font-mono text-text-secondary space-y-2 animate-fadeIn">
          <h5 className="font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-electric-bright" />
            <span>Adding More Graphic Designs:</span>
          </h5>
          <p>
            1. Save your design JPG/PNG/WEBP files into: <code className="text-electric-bright bg-cinema-card px-2 py-0.5 rounded">public/graphics/</code>
          </p>
          <p>
            2. In <code className="text-electric-bright bg-cinema-card px-2 py-0.5 rounded">src/data/portfolio.ts</code>, add an entry with your title, role, software, and aspect ratio (<code className="text-white">'1:1'</code>, <code className="text-white">'16:9'</code>, or <code className="text-white">'9:16'</code>).
          </p>
          <p>
            3. The grid automatically renders your artwork in its native proportions without cropping!
          </p>
        </div>
      )}

      {/* Portfolio Showcase Grid with Balanced Multi-Column Architecture */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 rounded-2xl bg-cinema-card border border-cinema-border">
          <Film className="w-10 h-10 text-text-muted mx-auto mb-3" />
          <p className="font-mono text-sm text-text-secondary">No projects published in this category yet.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-4 px-4 py-1.5 text-xs font-mono text-electric-bright underline"
          >
            View all projects
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {columns.map((colProjects, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6 sm:gap-8 w-full">
              {colProjects.map((project) => {
                const isGraphic = project.isGraphic || project.category === 'Graphic Design';
                const isVertical = project.aspectRatio === '9:16';
                const isSquare = project.aspectRatio === '1:1';
                const isBanner = project.aspectRatio === 'banner';

                // Dedicated Preview Container Aspect Ratio
                const containerRatioClass = isVertical
                  ? 'aspect-[9/16] max-h-[500px] sm:max-h-[540px]'
                  : isSquare
                  ? 'aspect-square'
                  : isBanner
                  ? 'aspect-[16/7]'
                  : 'aspect-video';

                return (
                  <article
                    key={project.id}
                    data-cursor-text={isGraphic ? 'VIEW' : 'PLAY'}
                    onClick={() => onSelectProject(project)}
                    className="group relative rounded-2xl bg-cinema-card border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-electric-card cursor-pointer flex flex-col justify-between"
                  >
                    {/* Dedicated Preview Container with Proportion Preservation */}
                    <div className={`relative w-full ${containerRatioClass} overflow-hidden bg-black/85 flex items-center justify-center`}>
                      {/* Ambient Blurred Backdrop Glow */}
                      <div
                        className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-25 scale-110 pointer-events-none"
                        style={{ backgroundImage: `url(${project.thumbnail})` }}
                      />

                      {/* Main Media Preview Image */}
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        className={`relative z-10 w-full h-full ${
                          isGraphic && (isSquare || isVertical) ? 'object-contain' : 'object-cover'
                        } object-center transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105`}
                      />

                      {/* Subtle Dark Gradient Overlay for Contrast */}
                      <div className="absolute inset-0 z-20 bg-gradient-to-t from-cinema-card/90 via-transparent to-black/35 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

                      {/* Top Badges: Category & Format */}
                      <div className="absolute top-3 left-3 z-30 flex flex-wrap items-center gap-1.5 pointer-events-none">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 text-electric-bright border border-electric/40 backdrop-blur-md font-semibold">
                          {project.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-white/10 text-text-primary border border-white/15 backdrop-blur-md">
                          {isVertical ? '9:16 Reel' : isSquare ? '1:1 Square' : isBanner ? '16:7 Banner' : '16:9 Widescreen'}
                        </span>
                        {project.clientName && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-electric/20 text-electric-bright border border-electric/30 backdrop-blur-md">
                            {project.clientName}
                          </span>
                        )}
                      </div>

                      {/* Video Duration Badge */}
                      {project.duration && (
                        <div className="absolute top-3 right-3 z-30 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-black/85 text-text-primary border border-white/10 backdrop-blur-md pointer-events-none">
                          {project.duration}
                        </div>
                      )}

                      {/* Centre-Aligned Premium Play Button with Cyan Glow */}
                      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                        <div className="relative flex items-center justify-center">
                          {/* Radial Glow Pulse */}
                          <div className="absolute inset-0 rounded-full bg-electric/25 blur-md scale-125 group-hover:scale-150 transition-all duration-300" />

                          {/* Circular Play Button Body */}
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cinema-bg/75 group-hover:bg-electric text-white flex items-center justify-center border border-white/20 group-hover:border-electric-bright shadow-[0_0_20px_rgba(22,139,255,0.45)] group-hover:shadow-[0_0_30px_rgba(85,183,255,0.85)] transform scale-95 group-hover:scale-110 transition-all duration-300 backdrop-blur-md">
                            {isGraphic ? (
                              <Maximize2 className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                            ) : (
                              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white ml-0.5 transition-transform group-hover:scale-110" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Card Content & Metadata */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                      <div>
                        {/* Subtitle / Eyebrow */}
                        <div className="text-[11px] font-mono uppercase tracking-wider text-electric-bright font-medium truncate">
                          {project.subtitle || project.role || 'CREATIVE SHOWCASE'}
                        </div>

                        {/* Project Title */}
                        <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary group-hover:text-electric-bright transition-colors mt-1.5 leading-snug line-clamp-1">
                          {project.title}
                        </h3>

                        {/* Short Project Description */}
                        <p className="mt-2 text-xs sm:text-sm text-text-secondary line-clamp-2 leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </div>

                      {/* Card Bottom Divider: Software Tags & Action Button */}
                      <div className="mt-5 pt-4 border-t border-cinema-border/70 flex items-center justify-between text-xs font-mono">
                        {/* Software / Tools Tags */}
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

                        {/* Consistently Positioned WATCH / VIEW ART Button */}
                        <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-electric-bright group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">
                          <span>{isGraphic ? 'VIEW ART' : 'WATCH'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
