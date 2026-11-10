import React, { useState } from 'react';
import { User, MapPin, GraduationCap, Phone, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-electric/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <User className="w-3.5 h-3.5 text-electric-bright" />
          <span>BIOGRAPHY & BACKGROUND</span>
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>ABOUT </span>
          <span className="text-gradient-cyan text-electric-glow">
            ME
          </span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans leading-relaxed max-w-xl mx-auto">
          Transforming creative concepts into immersive visual experiences through modern editing and visual craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
        {/* Left Column: Real Profile Photo & Status Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 hover:border-electric/50 bg-[#08090C] shadow-2xl group transition-all duration-500">
            {/* Ambient inner rim glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric/15 via-transparent to-transparent pointer-events-none z-10" />

            {!imageError ? (
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-[center_18%] transition-all duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-cinema-card text-center p-8">
                <div className="w-24 h-24 rounded-2xl bg-cinema-secondary border border-electric/30 flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-4xl text-electric-bright">AK</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">{personalInfo.name}</h3>
                <p className="text-xs font-mono text-electric-bright mt-1">VIDEO EDITOR & MOTION DESIGNER</p>
              </div>
            )}

            {/* Bottom floating details in liquid glass */}
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl liquid-glass space-y-2 z-20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-[11px] font-mono text-electric-bright">
                    Video Editor & Graphic Designer
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-electric-bright" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-electric-bright" />
                  <span>{personalInfo.phone}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Direct link to original Google Sites Portfolio */}
          <a
            href={personalInfo.portfolioWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass-pill text-xs font-mono text-electric-bright hover:border-electric transition-all"
          >
            <span>Original Portfolio on Google Sites</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right Column: Exact About Me Statement & Approach */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
          <div className="p-7 sm:p-8 rounded-3xl liquid-glass-card relative overflow-hidden">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-electric-bright mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CREATIVE APPROACH</span>
            </h3>

            {/* Exact About Me content from Google Sites */}
            <p className="text-base sm:text-lg text-text-primary font-sans leading-relaxed">
              I’m Anshu Kushwaha, a passionate <span className="text-white font-semibold">Video Editor & Graphic Designer</span> who loves creating engaging and creative visuals. I have worked on YouTube videos, podcasts, intros, and Instagram reels, helping creators and brands share their stories in a better way. My focus is always on making content that connects with people and leaves a lasting impression.
            </p>

            {/* Key Creative Pillars */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono text-text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>High-Retention Rhythmic Video Cuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Generative AI Visual Concepting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Vector Branding & Thumbnail Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Strict Delivery Deadlines & Communication</span>
              </div>
            </div>
          </div>

          {/* Education & Academic Training from CV */}
          <div className="p-7 sm:p-8 rounded-3xl liquid-glass-card space-y-5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-electric-bright flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION & DESIGN TRAINING</span>
            </h3>

            <div className="space-y-4">
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 last:border-b-0 last:pb-0 gap-1">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-text-secondary">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-electric-bright px-3 py-1 rounded-full liquid-glass-pill self-start sm:self-auto">
                    {edu.years}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};