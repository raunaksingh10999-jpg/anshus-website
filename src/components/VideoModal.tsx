import React, { useEffect } from 'react';
import { X } from 'lucide-react';
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

  // Extract YouTube ID if valid with controls and autoplay
  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&controls=1&rel=0&modestbranding=1`;
    }
    return null;
  };

  const isGraphic = project.isGraphic || project.category === 'Graphic Design';
  const embedUrl = getYouTubeEmbedUrl(project.videoUrl);
  const isVertical = project.aspectRatio === '9:16';
  const isSquare = project.aspectRatio === '1:1';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn">
      {/* Backdrop overlay dismiss */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      {/* Floating Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-black/80 hover:bg-electric text-white border border-white/20 hover:border-electric transition-all focus:outline-none backdrop-blur-md shadow-2xl"
        aria-label="Close preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Media Container - Pure visual media only, no descriptions or metadata */}
      <div
        className={`relative z-10 w-full rounded-2xl bg-black border border-cinema-border/60 shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-300 ${
          isVertical
            ? 'max-w-sm sm:max-w-md aspect-[9/16]'
            : isSquare
            ? 'max-w-2xl aspect-square'
            : 'max-w-5xl aspect-video'
        }`}
      >
        {isGraphic ? (
          /* Clean full-size image preview only */
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3 select-none">
            <img
              src={project.thumbnail}
              alt=""
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          </div>
        ) : embedUrl ? (
          /* Clean edge-to-edge video player only */
          <iframe
            src={embedUrl}
            title=""
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <img
              src={project.thumbnail}
              alt=""
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};
