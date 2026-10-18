import React, { useState } from 'react';
import { Instagram, Youtube, Play, ExternalLink, Sparkles, Heart, Eye } from 'lucide-react';
import { instagramReels, youtubeShorts, personalInfo } from '../data/portfolio';
import { SocialMediaItem } from '../types';

export const SocialShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reels' | 'shorts'>('reels');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section id="socials" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[400px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FIND MY WORK IN MOTION</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          SHORT FORM. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
            MAXIMUM IMPACT.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Watch high-retention vertical edits, viral VFX breakdowns, and sound-synced reels directly from my official channels.
        </p>

        {/* Tab Toggle Buttons */}
        <div className="mt-8 inline-flex p-1.5 rounded-full bg-dark-900 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => {
              setActiveTab('reels');
              setPlayingVideoId(null);
            }}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'reels'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-pink-600/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram Reels</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('shorts');
              setPlayingVideoId(null);
            }}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'shorts'
                ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-600/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Youtube className="w-4 h-4" />
            <span>YouTube Shorts</span>
          </button>
        </div>
      </div>

      {/* Grid Content */}
      {activeTab === 'reels' ? (
        /* Instagram Reels Grid */
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {instagramReels.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-dark-900/80 border border-white/10 overflow-hidden hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] flex flex-col"
              >
                {/* 9:16 Vertical Video Aspect Ratio */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                  {/* Top Stats: Views & Likes */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                      <Eye className="w-3.5 h-3.5 text-pink-400" />
                      <span>{item.views}</span>
                    </span>

                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                      <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                      <span>{item.likes}</span>
                    </span>
                  </div>

                  {/* Bottom details & CTA */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-3">
                    <h4 className="font-display font-bold text-white text-base leading-snug">
                      {item.title}
                    </h4>
                    {item.caption && (
                      <p className="text-xs text-neutral-300 line-clamp-2">
                        {item.caption}
                      </p>
                    )}

                    <a
                      href={item.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-md"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>WATCH ON INSTAGRAM</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Profile CTA */}
          <div className="mt-12 text-center">
            <a
              href={personalInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-display text-xs uppercase tracking-wider font-bold hover:shadow-[0_0_30px_rgba(219,39,119,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      ) : (
        /* YouTube Shorts Grid */
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {youtubeShorts.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-dark-900/80 border border-white/10 overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)] flex flex-col"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  {playingVideoId === item.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.embedId || 'dQw4w9WgXcQ'}?autoplay=1&rel=0`}
                      title={item.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                      {/* Views & Likes */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                          <Eye className="w-3.5 h-3.5 text-red-400" />
                          <span>{item.views}</span>
                        </span>

                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                          <span>{item.likes}</span>
                        </span>
                      </div>

                      {/* Center Play Button */}
                      <button
                        onClick={() => setPlayingVideoId(item.id)}
                        className="absolute inset-0 flex items-center justify-center focus:outline-none"
                        aria-label="Play YouTube Short in-line"
                      >
                        <div className="w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        </div>
                      </button>

                      {/* Bottom details & external button */}
                      <div className="absolute bottom-4 left-4 right-4 space-y-3">
                        <h4 className="font-display font-bold text-white text-base leading-snug">
                          {item.title}
                        </h4>
                        {item.caption && (
                          <p className="text-xs text-neutral-300 line-clamp-2">
                            {item.caption}
                          </p>
                        )}

                        <a
                          href={item.postUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-md"
                        >
                          <Youtube className="w-3.5 h-3.5" />
                          <span>WATCH ON YOUTUBE</span>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Direct Channel CTA */}
          <div className="mt-12 text-center">
            <a
              href={personalInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-red-600 text-white font-display text-xs uppercase tracking-wider font-bold hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <Youtube className="w-4 h-4" />
              <span>SUBSCRIBE ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
