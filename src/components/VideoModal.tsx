import React, { useEffect } from 'react';
import { X, ExternalLink, Play, Film, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
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

  const embedUrl = getYouTubeEmbedUrl(project.videoUrl);
  const isVertical = project.aspectRatio === '9:16';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop overlay dismiss */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      <div
        className={`relative z-10 w-full rounded-2xl bg-cinema-card border border-cinema-border shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-all duration-300 ${
          isVertical ? 'max-w-md' : 'max-w-4xl'
        }`}
      >
        {/* Top bar with category, title and close button */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-cinema-border bg-cinema-bg/80">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-electric/15 text-electric-bright border border-electric/30 flex-shrink-0">
              {project.category}
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
          className={`relative w-full bg-black flex items-center justify-center overflow-hidden ${
            isVertical ? 'aspect-[9/16] max-h-[70vh] mx-auto' : 'aspect-video w-full'
          }`}
        >
          {embedUrl ? (
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
                className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
              />
              <div className="relative z-10 p-6 rounded-2xl bg-cinema-card/90 border border-cinema-border max-w-sm">
                <Film className="w-8 h-8 text-electric-bright mx-auto mb-2" />
                <h4 className="font-display font-bold text-white text-base">{project.title}</h4>
                <p className="text-xs text-text-secondary mt-1 font-sans">{project.description}</p>
                {project.externalWatchUrl && (
                  <a
                    href={project.externalWatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-electric text-white text-xs font-mono"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Verified Role & Description */}
        <div className="p-5 sm:p-6 bg-cinema-secondary border-t border-cinema-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            {project.role && (
              <p className="text-xs font-mono text-electric-bright uppercase tracking-wider font-semibold">
                Role: {project.role}
              </p>
            )}
            <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {project.externalWatchUrl && (
              <a
                href={project.externalWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cinema-card border border-cinema-border hover:border-electric text-xs font-mono text-white transition-colors"
              >
                <span>External Link</span>
                <ExternalLink className="w-3.5 h-3.5 text-electric-bright" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
