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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/90 backdrop-blur-3xl animate-fadeIn">
      {/* Backdrop overlay dismiss */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      {/* Floating Apple Liquid Glass Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full liquid-glass-pill hover:bg-electric text-white border border-white/25 hover:border-electric-bright hover:scale-110 active:scale-95 transition-all focus:outline-none shadow-2xl"
        aria-label="Close preview"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Modal Media Container - Pure visual media only, no descriptions or metadata */}
      <div
        className={`relative z-10 w-full rounded-3xl bg-black/95 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden flex items-center justify-center transition-all duration-300 ${
          isVertical
            ? 'max-w-sm sm:max-w-md aspect-[9/16]'
            : isSquare
            ? 'max-w-2xl aspect-square'
            : 'max-w-5xl aspect-video'
        }`}
      >
        {isGraphic ? (
          /* Clean full-size image preview only */
          <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4 select-none">
            <img
              src={project.thumbnail}
              alt=""
              className="max-h-full max-w-full object-contain rounded-2xl"
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
          <div className="relative w-full h-full flex items-center justify-center p-3">
            <img
              src={project.thumbnail}
              alt=""
              className="max-h-full max-w-full object-contain rounded-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};