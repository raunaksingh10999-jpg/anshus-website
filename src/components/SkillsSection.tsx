import React, { useState } from 'react';
import { Wrench, Film, Sparkles, Image, PenTool, Layout, Layers, Box, Cpu, CheckCircle } from 'lucide-react';
import { toolsData, personalInfo } from '../data/portfolio';
import { ToolItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>('ALL');

  const groups = [
    'ALL',
    'EDITING AND MOTION',
    'DESIGN',
    '3D',
    'AI AND CREATIVE TOOLS'
  ];

  const filteredTools = activeGroup === 'ALL'
    ? toolsData
    : toolsData.filter((t) => t.category === activeGroup);

  const getToolIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-5 h-5 text-electric" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-electric-bright" />;
      case 'Image':
        return <Image className="w-5 h-5 text-electric" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-electric-bright" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-electric" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-electric-bright" />;
      case 'Box':
        return <Box className="w-5 h-5 text-electric" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-electric-bright" />;
      default:
        return <Wrench className="w-5 h-5 text-electric" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Wrench className="w-3.5 h-3.5 text-electric-bright" />
          <span>PRODUCTION ARSENAL</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-text-primary uppercase tracking-tight">
          TOOLS BEHIND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-electric-bright text-electric-glow">
            THE CRAFT.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
          Mastering modern editing suites, motion design ecosystems, 3D spatial integration, and cutting-edge generative AI workflows.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
        {groups.map((grp) => {
          const isActive = activeGroup === grp;
          return (
            <button
              key={grp}
              onClick={() => setActiveGroup(grp)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'bg-electric text-white font-bold shadow-electric-button scale-105'
                  : 'bg-cinema-card text-text-secondary hover:text-white hover:bg-cinema-cardHover border border-cinema-border'
              }`}
            >
              {grp}
            </button>
          );
        })}
      </div>

      {/* Typographic Tool Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredTools.map((tool: ToolItem) => (
          <div
            key={tool.name}
            className="group relative rounded-2xl p-6 bg-cinema-card border border-cinema-border hover:border-electric/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-electric-card flex flex-col justify-between"
          >
            <div>
              {/* Header: Icon + Category Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cinema-secondary border border-cinema-border group-hover:border-electric/40 flex items-center justify-center transition-colors">
                  {getToolIcon(tool.iconName)}
                </div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-text-muted px-2 py-0.5 rounded bg-cinema-secondary border border-cinema-border">
                  {tool.category}
                </span>
              </div>

              {/* Tool Name */}
              <h3 className="font-display font-bold text-base text-text-primary group-hover:text-white transition-colors">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs text-text-secondary leading-relaxed font-sans">
                {tool.description}
              </p>
            </div>

            {/* Subtle verification indicator */}
            <div className="mt-5 pt-3 border-t border-cinema-border/50 flex items-center gap-1.5 text-[10px] font-mono text-electric-bright">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-bright" />
              <span>Production Workflow Ready</span>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Creative Capabilities Showcase */}
      <div className="mt-14 p-8 rounded-2xl bg-cinema-card border border-cinema-border">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-electric-bright mb-4 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ADDITIONAL CREATIVE CAPABILITIES</span>
        </h3>
        <p className="text-xs sm:text-sm font-sans text-text-secondary mb-6 leading-relaxed">
          Integrated capabilities spanning creative development, narrative architecture, and post-production polish:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {personalInfo.additionalCapabilities.map((cap) => (
            <div
              key={cap}
              className="px-3.5 py-2 rounded-xl bg-cinema-secondary border border-cinema-border text-xs font-mono text-text-secondary flex items-center gap-2 hover:border-electric/30 hover:text-white transition-colors"
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
