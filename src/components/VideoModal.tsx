import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Play, Film, Sparkles, Maximize2, Download } from 'lucide-react';
import { Project } from '../types';
import { personalInfo } from '../data/portfolio';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Extract YouTube ID if valid
  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
    }
    return null;
  };

  const isGraphic = project.isGraphic || project.category === 'Graphic Design';
  const embedUrl = getYouTubeEmbedUrl(project.videoUrl);
  const isVertical = project.aspectRatio === '9:16';
  const isSquare = project.aspectRatio === '1:1';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      {/* Backdrop overlay dismiss */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      <div
        className={`relative z-10 w-full rounded-2xl bg-cinema-card border border-cinema-border shadow-2xl overflow-hidden flex flex-col max-h-[94vh] transition-all duration-300 ${
          isVertical ? 'max-w-md' : isSquare ? 'max-w-2xl' : 'max-w-5xl'
        }`}
      >
        {/* Top bar with category, title and close button */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-cinema-border bg-cinema-bg/90">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-electric/15 text-electric-bright border border-electric/30 flex-shrink-0">
              {project.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/5 text-text-muted border border-cinema-border flex-shrink-0">
              {project.aspectRatio ? project.aspectRatio.toUpperCase() : 'ORIGINAL'}
            </span>
            <h3 className="font-display font-bold text-sm sm:text-base text-white truncate">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-cinema-secondary border border-cinema-border text-text-secondary hover:text-white hover:border-electric transition-colors focus:outline-none flex-shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Media Body */}
        <div
          className={`relative w-full bg-black/90 flex items-center justify-center overflow-auto max-h-[72vh] p-2 sm:p-4 select-none ${
            isVertical ? 'aspect-[9/16]' : isSquare ? 'aspect-square' : 'aspect-video'
          }`}
        >
          {isGraphic ? (
            /* High-Resolution Uncropped Graphic Design Showcase */
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 ${
                  isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </div>
          ) : embedUrl ? (
            /* YouTube Video Embed */
            <iframe
              src={embedUrl}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </div>

        {/* Modal Footer with Role, Software & Inquiry CTA */}
        <div className="p-5 sm:p-6 bg-cinema-secondary border-t border-cinema-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            {project.role && (
              <p className="text-xs font-mono text-electric-bright uppercase tracking-wider font-semibold">
                Role: {project.role}
              </p>
            )}
            <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 max-w-xl font-sans">
              {project.description}
            </p>
            {project.software && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-text-muted bg-cinema-card border border-cinema-border"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {isGraphic ? (
              <a
                href={
                  personalInfo.whatsAppUrl
                    ? `${personalInfo.whatsAppUrl}?text=${encodeURIComponent(
                        `Hi Anshu! I'm interested in commissioning design work like "${project.title}".`
                      )}`
                    : '#contact'
                }
                target={personalInfo.whatsAppUrl ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-electric hover:bg-electric-bright text-white text-xs font-mono font-semibold transition-all shadow-electric-button"
              >
                <span>Commission Design</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : project.externalWatchUrl ? (
              <a
                href={project.externalWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cinema-card border border-cinema-border hover:border-electric text-xs font-mono text-white transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-electric-bright" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
