import React, { useState, useMemo } from 'react';
import { Palette, Maximize2, Image, Square, Layout } from 'lucide-react';
import { graphicProjects } from '../data/portfolio';
import { Project } from '../types';

interface GraphicDesignSectionProps {
  onSelectProject: (project: Project) => void;
}

type GraphicFormatFilter = 'all' | '1:1' | '9:16' | '16:9';

export const GraphicDesignSection: React.FC<GraphicDesignSectionProps> = ({ onSelectProject }) => {
  const [selectedFormat, setSelectedFormat] = useState<GraphicFormatFilter>('all');

  // Exact Google Sites Graphic items grouped by orientation
  const squareProjects = useMemo(() => {
    return graphicProjects.filter((p) => p.aspectRatio === '1:1');
  }, []);

  const verticalProjects = useMemo(() => {
    return graphicProjects.filter((p) => p.aspectRatio === '9:16');
  }, []);

  const wideProjects = useMemo(() => {
    return graphicProjects.filter((p) => p.aspectRatio === '16:9');
  }, []);

  const showSquare = selectedFormat === 'all' || selectedFormat === '1:1';
  const showVertical = selectedFormat === 'all' || selectedFormat === '9:16';
  const showWide = selectedFormat === 'all' || selectedFormat === '16:9';

  return (
    <section id="graphic-design" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header matching Google Sites: "Graphic" */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Palette className="w-3.5 h-3.5 text-electric-bright" />
          <span>ORIGINAL ARTWORKS</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>GRAPHIC </span>
          <span className="text-gradient-cyan text-electric-glow">
            DESIGN
          </span>
        </h2>

        {/* Liquid Glass Orientation Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          <button
            onClick={() => setSelectedFormat('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
              selectedFormat === 'all'
                ? 'liquid-glass-pill-active scale-105'
                : 'liquid-glass-pill text-text-secondary hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>All Graphics ({graphicProjects.length})</span>
          </button>

          <button
            onClick={() => setSelectedFormat('1:1')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
              selectedFormat === '1:1'
                ? 'liquid-glass-pill-active scale-105'
                : 'liquid-glass-pill text-text-secondary hover:text-white'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            <span>Square Creatives ({squareProjects.length})</span>
          </button>

          <button
            onClick={() => setSelectedFormat('9:16')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
              selectedFormat === '9:16'
                ? 'liquid-glass-pill-active scale-105'
                : 'liquid-glass-pill text-text-secondary hover:text-white'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Posters & Key Art ({verticalProjects.length})</span>
          </button>

          {wideProjects.length > 0 && (
            <button
              onClick={() => setSelectedFormat('16:9')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
                selectedFormat === '16:9'
                  ? 'liquid-glass-pill-active scale-105'
                  : 'liquid-glass-pill text-text-secondary hover:text-white'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Widescreen ({wideProjects.length})</span>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-16">
        {/* GROUP 1: SQUARE CREATIVES (1:1) */}
        {showSquare && squareProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg liquid-glass text-electric-bright">
                  <Square className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    SQUARE CREATIVES
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    1:1 Ratio • Social Creatives & Brand Designs
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-mono text-electric-bright liquid-glass-pill font-medium">
                {squareProjects.length} Designs
              </span>
            </div>

            {/* Square Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {squareProjects.map((project) => (
                <article
                  key={project.id}
                  title={project.title}
                  data-cursor-text="VIEW"
                  onClick={() => onSelectProject(project)}
                  className="group relative aspect-square rounded-2xl bg-black border border-white/15 hover:border-electric/60 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-glass-glow-blue cursor-pointer flex items-center justify-center p-3 sm:p-4"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-md">
                    <div className="w-13 h-13 rounded-full liquid-glass group-hover:bg-electric text-white flex items-center justify-center border border-white/30 shadow-glass-md transform scale-90 group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* GROUP 2: VERTICAL POSTERS & KEY ART (9:16) */}
        {showVertical && verticalProjects.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg liquid-glass text-electric-bright">
                  <Image className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    POSTERS & KEY ART
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    Portrait Proportions • Creative Visual Posters & Art Compositions
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-mono text-electric-bright liquid-glass-pill font-medium">
                {verticalProjects.length} Posters
              </span>
            </div>

            {/* Vertical Posters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {verticalProjects.map((project) => (
                <article
                  key={project.id}
                  title={project.title}
                  data-cursor-text="VIEW"
                  onClick={() => onSelectProject(project)}
                  className="group relative aspect-[9/16] rounded-2xl bg-black border border-white/15 hover:border-electric/60 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-glass-glow-blue cursor-pointer flex items-center justify-center p-2"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-md">
                    <div className="w-12 h-12 rounded-full liquid-glass group-hover:bg-electric text-white flex items-center justify-center border border-white/30 shadow-glass-md transform scale-90 group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* GROUP 3: WIDESCREEN ARTWORK (16:9) */}
        {showWide && wideProjects.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg liquid-glass text-electric-bright">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                    WIDESCREEN ARTWORK
                  </h3>
                  <p className="text-xs font-mono text-text-muted">
                    16:9 Landscape Artwork
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-mono text-electric-bright liquid-glass-pill font-medium">
                {wideProjects.length} Artwork
              </span>
            </div>

            {/* Wide Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {wideProjects.map((project) => (
                <article
                  key={project.id}
                  title={project.title}
                  data-cursor-text="VIEW"
                  onClick={() => onSelectProject(project)}
                  className="group relative aspect-video rounded-2xl bg-black border border-white/15 hover:border-electric/60 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-glass-glow-blue cursor-pointer flex items-center justify-center p-3 sm:p-4"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-md">
                    <div className="w-13 h-13 rounded-full liquid-glass group-hover:bg-electric text-white flex items-center justify-center border border-white/30 shadow-glass-md transform scale-90 group-hover:scale-110 transition-transform">
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