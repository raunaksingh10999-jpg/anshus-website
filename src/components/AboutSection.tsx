import React, { useState } from 'react';
import { User, MapPin, GraduationCap, Globe, Sparkles, ExternalLink, Briefcase, Phone, Mail } from 'lucide-react';
import { personalInfo, timelineMilestones } from '../data/portfolio';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'journey' | 'ai'>('bio');

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
          <User className="w-3.5 h-3.5" />
          <span>BEHIND THE FRAMES</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          CRAFTING STORIES, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
            PIXEL BY PIXEL.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Portrait & Creator Profile Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-dark-900 shadow-2xl group">
            {/* Portrait Image */}
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-85" />

            {/* Bottom floating details */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-dark-900/85 border border-white/10 backdrop-blur-xl space-y-2">
              <h3 className="font-display font-bold text-2xl text-white">
                {personalInfo.name}
              </h3>
              <p className="text-xs font-mono text-accent-cyan font-medium">
                {personalInfo.subheadline}
              </p>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2 text-xs text-neutral-300 font-mono">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{personalInfo.location}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{personalInfo.availableForProjects ? 'Available' : 'Booked'}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between text-neutral-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-accent-violet" />
                    <span>{personalInfo.phone}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{personalInfo.languages.join(', ')}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct link to original Google Sites Portfolio */}
          <a
            href={personalInfo.portfolioWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-accent-cyan transition-colors"
          >
            <span>Anshu's Website (Portfolio)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right Column: Bio, Experience, Education & AI Arsenal */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-6 border-b border-white/10 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('bio')}
              className={`font-display text-xs sm:text-sm uppercase tracking-wider font-bold transition-colors ${
                activeTab === 'bio'
                  ? 'text-accent-cyan border-b-2 border-accent-cyan pb-4 -mb-[18px]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              About & Philosophy
            </button>

            <button
              onClick={() => setActiveTab('journey')}
              className={`font-display text-xs sm:text-sm uppercase tracking-wider font-bold transition-colors ${
                activeTab === 'journey'
                  ? 'text-accent-cyan border-b-2 border-accent-cyan pb-4 -mb-[18px]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Experience & Education
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`font-display text-xs sm:text-sm uppercase tracking-wider font-bold transition-colors ${
                activeTab === 'ai'
                  ? 'text-accent-cyan border-b-2 border-accent-cyan pb-4 -mb-[18px]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              AI Suite & Workflows
            </button>
          </div>

          {activeTab === 'bio' ? (
            <div className="space-y-6 text-neutral-300 font-sans leading-relaxed text-sm sm:text-base">
              {personalInfo.fullBio.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'text-lg text-white font-medium' : ''}>
                  {paragraph}
                </p>
              ))}

              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-dark-900/50 border border-white/5">
                  <span className="text-[11px] font-mono uppercase text-neutral-500">Experience</span>
                  <p className="text-sm font-semibold text-white mt-1">3 Years Professional</p>
                </div>
                <div className="p-4 rounded-xl bg-dark-900/50 border border-white/5">
                  <span className="text-[11px] font-mono uppercase text-neutral-500">Focus Areas</span>
                  <p className="text-sm font-semibold text-white mt-1">YouTube, Reels, Podcasts</p>
                </div>
                <div className="p-4 rounded-xl bg-dark-900/50 border border-white/5">
                  <span className="text-[11px] font-mono uppercase text-neutral-500">Languages</span>
                  <p className="text-sm font-semibold text-white mt-1">English, Hindi, Marathi</p>
                </div>
              </div>
            </div>
          ) : activeTab === 'journey' ? (
            <div className="space-y-8">
              {/* Work Experience */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-cyan mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Work Experience</span>
                </h4>
                <div className="space-y-6">
                  {timelineMilestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="relative pl-6 pb-4 border-l border-white/10 last:border-0 last:pb-0"
                    >
                      <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_10px_#00F0FF]" />
                      <span className="text-xs font-mono text-accent-cyan font-bold tracking-wider">
                        {milestone.year}
                      </span>
                      <h5 className="text-base font-bold text-white mt-0.5">
                        {milestone.role}
                      </h5>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5">
                        {milestone.highlight}
                      </p>
                      <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-violet mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Formal Education & Training</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {personalInfo.education.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-dark-900/70 border border-white/5">
                      <span className="text-[10px] font-mono text-accent-violet font-semibold">
                        {edu.years} • {edu.location}
                      </span>
                      <h5 className="text-sm font-bold text-white mt-1">
                        {edu.degree}
                      </h5>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* AI Suite & Workflows */
            <div className="space-y-4">
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                Combining human creative editorial instinct with next-generation AI workflows for unprecedented speed, visual upscaling, and generative scene assets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.aiSkills.map((ai, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-dark-900/80 border border-white/10 hover:border-accent-cyan/40 transition-colors">
                    <span className="text-[10px] font-mono uppercase text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                      {ai.category}
                    </span>
                    <h5 className="text-base font-bold text-white mt-2">
                      {ai.name}
                    </h5>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {ai.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
