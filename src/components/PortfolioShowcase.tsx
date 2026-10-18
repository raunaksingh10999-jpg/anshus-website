import React, { useState } from 'react';
import { Play, Sparkles, ArrowRight, Palette, Film, Maximize2, Info } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';
import { Project, ProjectCategory } from '../types';

interface PortfolioShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [showAssetGuide, setShowAssetGuide] = useState(false);

  const categories: ProjectCategory[] = [
    'All',
    'Graphic Design',
    'AI Video Creation',
    'Cinematic Video Editing',
    'Motion Graphics',
    'Visual Effects',
    'Social Media Reels',
    'Brand and Promotional Videos',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  const isGraphicCategory = selectedCategory === 'Graphic Design';

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-electric-bright/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-bright" />
          <span>SELECTED WORK / 2023–PRESENT</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-text-primary uppercase tracking-tight">
          MADE TO BE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-electric-bright text-electric-glow">
            WATCHED & ADMIRED.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
          An editorial showcase of cinematic video edits, motion graphic sequences, and real graphic design campaigns crafted with precision.
        </p>
      </div>

      {/* Category Filter Navigation with Dedicated "Graphic Design" Pill */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 focus:outline-none ${
                isActive
                  ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
                  : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
              }`}
            >
              {cat === 'Graphic Design' ? '🎨 Graphic Design' : cat}
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
                Showing real social media creatives, promotional campaign ads, packaging designs, and digital art without cropping.
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
            <span>Adding More Graphic Designs Later:</span>
          </h5>
          <p>
            1. Drop your high-res design JPG/PNG/WEBP files directly into: <code className="text-electric-bright bg-cinema-card px-2 py-0.5 rounded">public/graphics/</code>
          </p>
          <p>
            2. Open <code className="text-electric-bright bg-cinema-card px-2 py-0.5 rounded">src/data/portfolio.ts</code> and add an entry with your title, role, software, and aspect ratio (<code className="text-white">'1:1'</code>, <code className="text-white">'16:9'</code>, or <code className="text-white">'9:16'</code>).
          </p>
          <p>
            3. The editorial grid automatically renders your artwork in its native proportions without cropping!
          </p>
        </div>
      )}

      {/* Editorial Selected Projects Grid with Aspect Ratio Preservation */}
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
          {filteredProjects.map((project) => {
            const isGraphic = project.isGraphic || project.category === 'Graphic Design';
            const isVertical = project.aspectRatio === '9:16';
            const isSquare = project.aspectRatio === '1:1';
            const isBanner = project.aspectRatio === 'banner';

            // Media aspect ratio class
            const mediaRatioClass = isVertical
              ? 'aspect-[9/16] max-h-[520px]'
              : isSquare
              ? 'aspect-square'
              : isBanner
              ? 'aspect-[16/7]'
              : 'aspect-video';

            return (
              <div
                key={project.id}
                data-cursor-text={isGraphic ? 'VIEW' : 'PLAY'}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-cinema-card border border-cinema-border hover:border-electric/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-electric-card cursor-pointer flex flex-col justify-between"
              >
                {/* Media Container with artwork proportion preservation */}
                <div className={`relative w-full ${mediaRatioClass} overflow-hidden bg-black/80 flex items-center justify-center p-1 sm:p-2`}>
                  {/* Blurred ambient background glow from image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${project.thumbnail})` }}
                  />

                  {/* Real Image Asset: object-contain preserves all artwork details without cropping */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-cinema-bg/85 text-electric-bright border border-electric/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.clientName && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/10 text-white border border-white/10 backdrop-blur-md">
                        {project.clientName}
                      </span>
                    )}
                  </div>

                  {/* Aspect Ratio Badge */}
                  <div className="absolute top-3 right-3 z-20 font-mono text-[10px] text-text-muted px-2 py-0.5 rounded bg-cinema-bg/80 border border-cinema-border backdrop-blur-md">
                    {project.aspectRatio ? project.aspectRatio.toUpperCase() : '16:9'}
                  </div>

                  {/* Hover Icon Overlay */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-electric/90 text-white flex items-center justify-center shadow-electric-button transform scale-75 group-hover:scale-100 transition-transform">
                      {isGraphic ? (
                        <Maximize2 className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-6 h-6 fill-white ml-0.5 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Role Tag when verified */}
                    {project.role && (
                      <p className="text-[11px] font-mono tracking-wider text-electric-bright uppercase mb-2">
                        {project.role}
                      </p>
                    )}

                    {/* Project Title */}
                    <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-white transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Brief description */}
                    <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2 font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Bottom: Software badges & Action */}
                  <div className="mt-6 pt-4 border-t border-cinema-border/70 flex items-center justify-between text-xs font-mono">
                    <div className="flex flex-wrap gap-1.5">
                      {project.software?.slice(0, 2).map((sw) => (
                        <span key={sw} className="text-[10px] px-2 py-0.5 rounded bg-cinema-secondary text-text-muted border border-cinema-border">
                          {sw.replace('Adobe ', '')}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-electric-bright group-hover:translate-x-1 transition-transform">
                      <span>{isGraphic ? 'VIEW ART' : 'WATCH'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
