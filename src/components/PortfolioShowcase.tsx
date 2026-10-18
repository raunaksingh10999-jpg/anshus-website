import React, { useState } from 'react';
import { Play, Sparkles, Sliders, ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';
import { Project, ProjectCategory } from '../types';

interface PortfolioShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'VFX Edits',
    'Cinematic Edits',
    'Instagram Reels',
    'YouTube Shorts',
    'Motion Graphics',
    'Color Grading',
    'Transitions',
    'Promotional Videos'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SELECTED WORKS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          VISUALS THAT SPEAK <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
            LOUDER THAN WORDS.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Explore a curated selection of commercial visual effects, cinematic storytelling cuts, viral short-form retention edits, and motion graphic sequences.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-accent-cyan text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                  : 'bg-dark-900/80 text-neutral-400 hover:text-white hover:bg-dark-800 border border-white/5'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            data-cursor-text="PLAY"
            onClick={() => onSelectProject(project)}
            className="group relative rounded-2xl bg-dark-900/70 border border-white/10 hover:border-accent-cyan/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(0,240,255,0.2)] cursor-pointer flex flex-col"
          >
            {/* Thumbnail media with zoom & play overlay */}
            <div className="relative aspect-video w-full overflow-hidden bg-dark-950">
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Category & Duration Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 text-accent-cyan border border-accent-cyan/30 backdrop-blur-md">
                  {project.category}
                </span>
                {project.beforeAfter && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-accent-violet/30 text-white border border-accent-violet/40 backdrop-blur-md flex items-center gap-1">
                    <Sliders className="w-2.5 h-2.5 text-accent-violet" />
                    <span>RAW/VFX</span>
                  </span>
                )}
              </div>

              {project.duration && (
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/80 text-neutral-300 backdrop-blur-md">
                  {project.duration}
                </span>
              )}

              {/* Centered Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-accent-cyan/90 group-hover:bg-white text-black flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.6)] transform scale-90 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 fill-black ml-0.5" />
                </div>
              </div>
            </div>

            {/* Project Content Info */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan/90">
                  {project.subtitle}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-accent-cyan transition-colors mt-1">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Software Tags & Action Arrow */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.software.slice(0, 3).map((sw) => (
                    <span
                      key={sw}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/5"
                    >
                      {sw}
                    </span>
                  ))}
                  {project.software.length > 3 && (
                    <span className="text-[10px] font-mono text-neutral-500 self-center">
                      +{project.software.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-neutral-400 group-hover:text-accent-cyan transition-colors">
                  <span>WATCH</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-neutral-500 font-mono text-sm">
          No projects found in this category.
        </div>
      )}
    </section>
  );
};
