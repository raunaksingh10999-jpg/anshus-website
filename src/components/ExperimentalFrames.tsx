import React from 'react';
import { Terminal, ExternalLink, Sparkles, Cpu, Flame } from 'lucide-react';
import { creativeExperiments } from '../data/portfolio';

export const ExperimentalFrames: React.FC = () => {
  return (
    <section id="experiments" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[350px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-mono tracking-widest uppercase mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>R&D LAB</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          EXPERIMENTAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-white to-accent-cyan">
            FRAMES.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Where curiosity meets raw technical execution. Procedural shader tests, camera tracking experiments, and non-commercial visual explorations.
        </p>
      </div>

      {/* Experiment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {creativeExperiments.map((exp, index) => (
          <div
            key={exp.id}
            data-cursor-text="INSPECT"
            className="group relative rounded-2xl bg-dark-900/60 border border-white/10 overflow-hidden hover:border-accent-violet/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(139,92,246,0.15)] flex flex-col backdrop-blur-md"
          >
            {/* Visual media preview */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
              <img
                src={exp.thumbnailUrl}
                alt={exp.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90" />

              {/* Lab ID Badge */}
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/75 border border-white/10 text-[10px] font-mono text-accent-cyan backdrop-blur-md">
                EXP // 0{index + 1}
              </div>

              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-accent-violet/30 border border-accent-violet/40 text-[10px] font-mono text-white backdrop-blur-md">
                {exp.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-accent-violet transition-colors">
                  {exp.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Tech Specs & External link */}
              <div className="mt-6 pt-4 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/5"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {exp.launchUrl && (
                  <a
                    href={exp.launchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:text-white transition-colors"
                  >
                    <span>View Breakdown Video</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
