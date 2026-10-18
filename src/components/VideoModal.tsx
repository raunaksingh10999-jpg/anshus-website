import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Play, Sparkles, Layers, Sliders } from 'lucide-react';
import { Project } from '../types';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);

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
  const getYouTubeEmbedUrl = (url: string) => {
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
    }
    return null;
  };

  const embedUrl = getYouTubeEmbedUrl(project.videoUrl);
  const isVertical = project.aspectRatio === '9:16' || project.category === 'Instagram Reels' || project.category === 'YouTube Shorts';
  const isSquare = project.aspectRatio === '1:1';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop overlay dismiss */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      <div
        className={`relative z-10 w-full rounded-2xl bg-dark-900 border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-all duration-300 ${
          isVertical ? 'max-w-md' : isSquare ? 'max-w-xl' : 'max-w-5xl'
        }`}
      >
        {/* Top bar with project category, title and close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-950/70">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
              {project.category}
            </span>
            <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-white/5 text-neutral-400 border border-white/10">
              {isVertical ? '9:16 Reel' : isSquare ? '1:1 Square' : '16:9 HD'}
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-white truncate max-w-[200px] sm:max-w-xs">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Media Body */}
        <div
          className={`relative w-full bg-black flex items-center justify-center overflow-hidden ${
            isVertical ? 'aspect-[9/16] max-h-[66vh] mx-auto' : isSquare ? 'aspect-square max-h-[66vh] mx-auto' : 'aspect-video'
          }`}
        >
          {showBeforeAfter && project.beforeAfter ? (
            /* Interactive Before/After toggle inside modal */
            <div
              className="relative w-full h-full select-none cursor-ew-resize"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const touch = e.touches[0];
                const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                setSliderPos((x / rect.width) * 100);
              }}
            >
              {/* After Image */}
              <img
                src={project.beforeAfter.afterImg}
                alt="After VFX"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-black/75 text-accent-cyan font-mono text-xs font-semibold backdrop-blur-md">
                {project.beforeAfter.afterLabel || 'Final VFX & Grade'}
              </span>

              {/* Before Image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={project.beforeAfter.beforeImg}
                  alt="Before VFX"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-black/75 text-neutral-300 font-mono text-xs font-semibold backdrop-blur-md">
                  {project.beforeAfter.beforeLabel || 'RAW Flat Footage'}
                </span>
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-accent-cyan shadow-[0_0_12px_#00F0FF] pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-900 border-2 border-accent-cyan flex items-center justify-center shadow-lg">
                  <Sliders className="w-4 h-4 text-accent-cyan" />
                </div>
              </div>
            </div>
          ) : embedUrl ? (
            /* YouTube Iframe Player */
            <iframe
              src={embedUrl}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Fallback preview with launch button */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 filter blur-sm"
              />
              <div className="relative z-10 max-w-md flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent-cyan/20 border border-accent-cyan/50 flex items-center justify-center text-accent-cyan mb-4 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                  <Play className="w-7 h-7 fill-accent-cyan" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-neutral-300 mb-6">
                  This project is hosted on {project.platform.toUpperCase()}. Click below to view the original high-resolution video.
                </p>
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cyan text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                >
                  <span>Watch on {project.platform}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Details & Metadata Footer */}
        <div className="p-6 overflow-y-auto space-y-4 bg-dark-950/60">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-neutral-400">{project.subtitle}</p>
              <p className="mt-1 text-sm text-neutral-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Toggle before-and-after if available */}
            {project.beforeAfter && (
              <button
                onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-colors border ${
                  showBeforeAfter
                    ? 'bg-accent-cyan text-black border-accent-cyan'
                    : 'bg-dark-800 text-neutral-200 border-white/10 hover:border-accent-cyan'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>{showBeforeAfter ? 'Return to Video' : 'Compare RAW vs VFX'}</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5">
            {/* Software used pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                Software:
              </span>
              {project.software.map((sw) => (
                <span
                  key={sw}
                  className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
                >
                  {sw}
                </span>
              ))}
            </div>

            {/* External link */}
            {project.publicationLink && (
              <a
                href={project.publicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:underline"
              >
                <span>View Published Post</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
