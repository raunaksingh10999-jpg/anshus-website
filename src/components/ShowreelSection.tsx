import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, Info } from 'lucide-react';
import { featuredShowreel } from '../data/portfolio';

export const ShowreelSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error('Error attempting to exit fullscreen:', err);
      });
    }
  };

  return (
    <section id="showreel" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Film className="w-3.5 h-3.5 text-electric-bright" />
          <span>{featuredShowreel.sectionLabel}</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-text-primary uppercase tracking-tight">
          EVERY FRAME HAS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-electric-bright text-electric-glow">
            A PURPOSE.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans max-w-xl mx-auto">
          {featuredShowreel.description}
        </p>
      </div>

      {/* Large Cinematic Video Player with Widescreen 16:9 Aspect Ratio */}
      <div className="relative max-w-5xl mx-auto">
        <div
          ref={containerRef}
          className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video w-full bg-cinema-card border border-cinema-border hover:border-electric/40 transition-all duration-500 shadow-2xl shadow-black/80"
        >
          {isPlaying ? (
            /* Embedded Real Showreel Playback */
            <div className="relative w-full h-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${featuredShowreel.embedId}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&modestbranding=1&controls=1`}
                title={featuredShowreel.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            /* Poster State & Elegant Play Button */
            <div className="relative w-full h-full flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Poster Image */}
              <img
                src={featuredShowreel.posterUrl}
                alt={featuredShowreel.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-bg via-transparent to-cinema-bg/40 opacity-80" />

              {/* Top Film Metadata Details */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-3 font-mono text-[11px] text-text-secondary bg-cinema-card/80 px-3 py-1.5 rounded-full border border-cinema-border backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-electric-bright animate-pulse" />
                <span className="text-white font-medium">SHOWREEL 2024</span>
                <span className="text-cinema-border">•</span>
                <span>4K MASTER</span>
              </div>

              {/* Center Play Button */}
              <button
                data-cursor-text="PLAY"
                onClick={() => setIsPlaying(true)}
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cinema-bg/80 border border-electric/40 hover:border-electric text-white flex items-center justify-center backdrop-blur-xl shadow-electric-card transition-all duration-300 transform group-hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                aria-label="Play showreel video"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-electric/20 flex items-center justify-center transition-colors group-hover:bg-electric/30">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-electric-bright text-electric-bright ml-1" />
                </div>
              </button>

              {/* Bottom Film Bar Information */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                    {featuredShowreel.title}
                  </h3>
                  <p className="text-xs font-mono text-electric-bright">
                    ANSHU KUSHWAHA • EDITING & MOTION COMPOSITING
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-text-secondary">
                  <span>CLICK TO WATCH</span>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Player Controls Bar (When Playing) */}
          {isPlaying && (
            <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg bg-cinema-card/80 border border-cinema-border text-white hover:text-electric-bright hover:border-electric backdrop-blur-md transition-colors"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg bg-cinema-card/80 border border-cinema-border text-white hover:text-electric-bright hover:border-electric backdrop-blur-md transition-colors"
                aria-label="Toggle fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Instructions Toggle for Local Showreel Placement */}
        <div className="mt-4 flex items-center justify-between text-xs font-mono text-text-muted px-2">
          <span>Widescreen 16:9 • High-Definition Presentation</span>
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="inline-flex items-center gap-1.5 hover:text-electric-bright transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{showInstructions ? 'Hide asset guide' : 'How to replace showreel video?'}</span>
          </button>
        </div>

        {showInstructions && (
          <div className="mt-3 p-4 rounded-xl bg-cinema-card border border-cinema-border text-xs font-mono text-text-secondary space-y-2 animate-fadeIn">
            <p className="text-white font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-electric-bright" />
              <span>Easy Custom Showreel Instructions:</span>
            </p>
            <p>
              1. To use a local MP4 file, place your finished video at <code className="text-electric-bright">public/showreel.mp4</code>.
            </p>
            <p>
              2. Or update the YouTube video link in <code className="text-electric-bright">src/data/portfolio.ts</code> under <code className="text-electric-bright">featuredShowreel</code>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
