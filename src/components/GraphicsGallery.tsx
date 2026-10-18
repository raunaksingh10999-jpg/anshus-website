import React, { useState } from 'react';
import { Palette, Sparkles, ExternalLink, Image as ImageIcon, X, Maximize2, Layers } from 'lucide-react';
import { graphicsWork, personalInfo } from '../data/portfolio';
import { GraphicItem } from '../types';

export const GraphicsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeGraphic, setActiveGraphic] = useState<GraphicItem | null>(null);

  const categories = ['All', 'YouTube Thumbnails', 'Posters & Art', 'Photoshop VFX', 'Brand Designs'];

  const filteredItems = selectedCategory === 'All'
    ? graphicsWork
    : graphicsWork.filter((item) => item.category === selectedCategory);

  return (
    <section id="graphics" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-accent-violet/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[350px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-mono tracking-widest uppercase mb-4">
          <Palette className="w-3.5 h-3.5" />
          <span>GRAPHICS & VISUAL ART</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          HIGH-IMPACT DESIGNS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
            & DIGITAL ARTWORK.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Photoshop manipulations, high-CTR YouTube thumbnails, cinematic posters, and visual branding assets crafted for digital creators and brands.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-accent-violet text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105'
                  : 'bg-dark-900/80 text-neutral-400 hover:text-white hover:bg-dark-800 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Graphics Grid with Masonry Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
        {filteredItems.map((item) => {
          const isLandscape = item.aspectRatio === '16:9';
          const isPoster = item.aspectRatio === '4:5';

          return (
            <div
              key={item.id}
              onClick={() => setActiveGraphic(item)}
              data-cursor-text="VIEW"
              className="break-inside-avoid group relative rounded-2xl bg-dark-900/70 border border-white/10 hover:border-accent-violet/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.25)] cursor-pointer flex flex-col"
            >
              {/* Media Container with correct aspect ratio */}
              <div
                className={`relative w-full overflow-hidden bg-dark-950 flex items-center justify-center ${
                  isPoster ? 'aspect-[4/5]' : isLandscape ? 'aspect-video' : 'aspect-square'
                }`}
              >
                {/* Fallback stylized artwork gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-850 to-dark-950 flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="w-12 h-12 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center mb-3 text-accent-violet">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-bold text-sm text-white/90">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 mt-1">
                    {item.software.join(' • ')}
                  </span>
                </div>

                {/* Actual image asset if available */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    // If local graphic file is still being placed by user, hide img so styled backdrop displays cleanly
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="relative z-10 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                {/* Badges */}
                <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 text-accent-violet border border-accent-violet/30 backdrop-blur-md">
                    {item.category}
                  </span>
                  {item.aspectRatio && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-white/10 text-neutral-300 backdrop-blur-md border border-white/10">
                      {item.aspectRatio}
                    </span>
                  )}
                </div>

                {/* View Icon Overlay */}
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-accent-violet text-white flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Graphic Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-accent-violet transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Software tags */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.software.map((sw) => (
                      <span
                        key={sw}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/5"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-accent-cyan uppercase">
                    Preview
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Google Sites Source Reference Box */}
      <div className="mt-14 text-center">
        <a
          href={personalInfo.portfolioWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-900/80 hover:bg-dark-800 border border-white/10 text-xs font-mono text-accent-cyan hover:text-white transition-all shadow-lg"
        >
          <span>View Additional Graphics on Google Sites</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeGraphic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setActiveGraphic(null)} />

          <div className="relative z-10 w-full max-w-4xl rounded-2xl bg-dark-900 border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-950/70">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
                  {activeGraphic.category}
                </span>
                <h3 className="font-display font-bold text-base text-white truncate max-w-md">
                  {activeGraphic.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveGraphic(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Body */}
            <div className="relative flex-1 bg-black/60 flex items-center justify-center p-4 overflow-hidden min-h-[300px] max-h-[65vh]">
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                <img
                  src={activeGraphic.imageUrl}
                  alt={activeGraphic.title}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
                <div className="mt-4 p-4 rounded-xl bg-dark-850/80 border border-white/10 text-xs font-mono text-neutral-300 max-w-md">
                  <span className="text-accent-cyan font-bold block mb-1">
                    📁 High-Resolution Asset:
                  </span>
                  To display your own high-res render here, place image at{' '}
                  <code className="text-accent-violet">{activeGraphic.imageUrl}</code>
                </div>
              </div>
            </div>

            {/* Footer details */}
            <div className="p-6 bg-dark-950/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-neutral-300 max-w-xl">
                  {activeGraphic.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {activeGraphic.software.map((sw) => (
                    <span
                      key={sw}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/5"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={
                  personalInfo.whatsAppUrl
                    ? `${personalInfo.whatsAppUrl}?text=${encodeURIComponent(
                        `Hi Anshu! I'm interested in commissioning graphic design like "${activeGraphic.title}".`
                      )}`
                    : '#contact'
                }
                target={personalInfo.whatsAppUrl ? '_blank' : '_self'}
                className="px-5 py-2.5 rounded-xl bg-accent-violet hover:bg-accent-purple text-white text-xs font-display uppercase tracking-wider font-bold transition-all shadow-lg"
              >
                Inquire Graphic Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
