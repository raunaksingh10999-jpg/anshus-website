import React, { useState } from 'react';
import { Wrench, Sparkles, Film, Palette, Box, Image, PenTool, Scissors, Layout, CheckCircle2 } from 'lucide-react';
import { softwareTools } from '../data/portfolio';
import { SoftwareTool } from '../types';

export const SkillsSection: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  // Map icon strings to Lucide components
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Box':
        return <Box className="w-5 h-5" />;
      case 'Image':
        return <Image className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="tools" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
          <Wrench className="w-3.5 h-3.5" />
          <span>PRODUCTION ARSENAL</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          TOOLS BEHIND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
            THE VISION.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Mastering industry-standard post-production software, 3D pipelines, node-based color systems, and modern editing suites.
        </p>
      </div>

      {/* Interactive Tool Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {softwareTools.map((tool: SoftwareTool) => {
          const isHovered = hoveredTool === tool.name;

          return (
            <div
              key={tool.name}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
              className="group relative rounded-2xl p-6 bg-dark-900/60 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden backdrop-blur-md"
              style={{
                borderColor: isHovered ? tool.accentColor : undefined,
                boxShadow: isHovered ? `0 10px 30px -10px ${tool.accentColor}33` : undefined,
              }}
            >
              {/* Subtle top corner gradient accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-15 pointer-events-none transition-opacity duration-300 group-hover:opacity-30"
                style={{ backgroundColor: tool.accentColor }}
              />

              <div>
                {/* Header: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${tool.accentColor}18`,
                      borderColor: `${tool.accentColor}44`,
                      color: tool.accentColor,
                    }}
                  >
                    {getToolIcon(tool.iconName)}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                    {tool.category}
                  </span>
                </div>

                {/* Tool Name */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-white transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Proficiency Gauge & Experience */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-neutral-500 uppercase">Proficiency</span>
                  <span className="font-bold" style={{ color: tool.accentColor }}>
                    {tool.proficiency}%
                  </span>
                </div>

                {/* Animated fill bar */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${tool.proficiency}%`,
                      backgroundColor: tool.accentColor,
                      boxShadow: `0 0 10px ${tool.accentColor}`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
