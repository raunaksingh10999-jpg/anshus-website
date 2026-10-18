import React from 'react';
import { Compass, Lightbulb, Clapperboard, CheckCircle, ArrowRight } from 'lucide-react';
import { workflowSteps } from '../data/portfolio';

export const WorkflowSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-electric" />;
      case 1:
        return <Lightbulb className="w-5 h-5 text-electric-bright" />;
      case 2:
        return <Clapperboard className="w-5 h-5 text-electric" />;
      case 3:
        return <CheckCircle className="w-5 h-5 text-electric-bright" />;
      default:
        return <Compass className="w-5 h-5 text-electric" />;
    }
  };

  return (
    <section id="workflow" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Clapperboard className="w-3.5 h-3.5 text-electric-bright" />
          <span>CREATIVE WORKFLOW</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-text-primary uppercase tracking-tight">
          FROM SCRIPT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-electric-bright text-electric-glow">
            TO SCREEN.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
          A disciplined, four-stage creative pipeline designed to maintain creative velocity without compromising storytelling rigor.
        </p>
      </div>

      {/* Clean Horizontal Timeline on Desktop & Vertical on Mobile */}
      <div className="relative">
        {/* Desktop Connecting Line */}
        <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[1px] bg-gradient-to-r from-electric/10 via-electric/40 to-electric/10 -translate-y-12 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="group relative rounded-2xl p-6 sm:p-7 bg-cinema-card border border-cinema-border hover:border-electric/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card flex flex-col justify-between"
            >
              <div>
                {/* Header: Step Number badge and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cinema-secondary border border-cinema-border group-hover:border-electric/40 flex items-center justify-center transition-colors">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric-bright">
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Primary Description */}
                <p className="mt-2 text-xs sm:text-sm font-sans text-text-primary font-medium leading-relaxed">
                  {step.description}
                </p>

                {/* Detail text */}
                {step.details && (
                  <p className="mt-3 text-xs font-mono text-text-muted leading-relaxed">
                    {step.details}
                  </p>
                )}
              </div>

              {/* Step indicator arrow */}
              <div className="mt-6 pt-4 border-t border-cinema-border/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span className="tracking-widest uppercase">STAGE {idx + 1}</span>
                <span className="text-electric group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
