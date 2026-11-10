import React from 'react';
import { Wrench, Film, Sparkles, Image, PenTool, Layout, Layers, Cpu, CheckCircle } from 'lucide-react';
import { skillsList, personalInfo } from '../data/portfolio';
import { ToolItem } from '../types';

export const SkillsSection: React.FC = () => {
  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Adobe Premiere Pro':
      case 'Video Editing':
        return <Film className="w-6 h-6 text-electric" />;
      case 'Adobe After Effects':
        return <Sparkles className="w-6 h-6 text-electric-bright" />;
      case 'Adobe Photoshop':
        return <Image className="w-6 h-6 text-electric" />;
      case 'Adobe Illustrator':
        return <PenTool className="w-6 h-6 text-electric-bright" />;
      case 'AI Video Creation':
        return <Cpu className="w-6 h-6 text-electric" />;
      case 'Motion Graphics':
        return <Layers className="w-6 h-6 text-electric-bright" />;
      case 'Graphic Design':
        return <Layout className="w-6 h-6 text-electric" />;
      default:
        return <Wrench className="w-6 h-6 text-electric" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cinema-border/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header: Strict 3-Level Visual Hierarchy */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        {/* LEVEL 1: Section Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Wrench className="w-3.5 h-3.5 text-electric-bright" />
          <span>PRODUCTION TOOLKIT</span>
        </div>

        {/* LEVEL 2: Section Headline */}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-text-primary uppercase tracking-tight leading-[1.15]">
          <span>SOFTWARE & </span>
          <span className="text-gradient-cyan text-electric-glow">
            SKILLS
          </span>
        </h2>

        {/* LEVEL 3: Supporting Description */}
        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans leading-relaxed max-w-xl mx-auto">
          Core creative technologies, timeline software mastery, and cutting-edge generative AI workflows used for high-end digital production.
        </p>
      </div>

      {/* Professional Skills Cards Grid — Clean Modern Cards, No Fake Percentages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {skillsList.map((skill: ToolItem) => (
          <div
            key={skill.name}
            className="group relative rounded-2xl p-6 bg-cinema-card border border-cinema-border hover:border-electric/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card flex flex-col justify-between"
          >
            <div>
              {/* Header: Skill Icon & Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cinema-secondary border border-cinema-border group-hover:border-electric/40 flex items-center justify-center transition-colors">
                  {getSkillIcon(skill.name)}
                </div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-text-muted px-2 py-0.5 rounded bg-cinema-secondary border border-cinema-border">
                  {skill.category}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-electric-bright transition-colors">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                {skill.description}
              </p>
            </div>

            {/* Verification Status */}
            <div className="mt-5 pt-3 border-t border-cinema-border/50 flex items-center gap-1.5 text-[10px] font-mono text-electric-bright">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-bright" />
              <span>Production Pipeline Ready</span>
            </div>
          </div>
        ))}
      </div>

      {/* Integrated Creative Capabilities */}
      <div className="mt-12 p-7 sm:p-8 rounded-2xl bg-cinema-card border border-cinema-border">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-electric-bright mb-3 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRODUCTION CAPABILITIES</span>
        </h3>
        <p className="text-xs sm:text-sm font-sans text-text-secondary mb-6 leading-relaxed">
          Integrated capabilities spanning creative development, narrative architecture, and post-production polish:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {personalInfo.additionalCapabilities.map((cap) => (
            <div
              key={cap}
              className="px-3.5 py-2.5 rounded-xl bg-cinema-secondary border border-cinema-border text-xs font-mono text-text-secondary flex items-center gap-2 hover:border-electric/30 hover:text-white transition-colors"
            >
              <CheckCircle className="w-3.5 h-3.5 text-electric-bright flex-shrink-0" />
              <span className="truncate">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
