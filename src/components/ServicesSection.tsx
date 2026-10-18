import React from 'react';
import { Film, Cpu, Sparkles, Smartphone, Palette, ArrowUpRight } from 'lucide-react';
import { servicesList } from '../data/portfolio';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Film':
        return <Film className="w-6 h-6 text-electric" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-electric-bright" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-electric" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-electric-bright" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-electric" />;
      default:
        return <Film className="w-6 h-6 text-electric" />;
    }
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/25 text-electric-bright text-xs font-mono tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-electric-bright" />
          <span>SERVICES / CAPABILITIES</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-text-primary uppercase tracking-tight">
          BUILT FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-electric-bright text-electric-glow">
            CINEMATIC IMPACT.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
          Full-cycle creative services from script and visual concepting to final motion finishing and platform-ready master deliveries.
        </p>
      </div>

      {/* Typography-Led Services Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {servicesList.map((service: ServiceItem, idx: number) => {
          return (
            <div
              key={service.id}
              className="group relative rounded-2xl p-8 bg-cinema-card border border-cinema-border hover:border-electric/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-electric-card flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top corner gradient highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Service Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cinema-secondary border border-cinema-border group-hover:border-electric/40 flex items-center justify-center transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-text-muted tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Short Professional Description */}
                <p className="mt-3 text-sm text-text-secondary leading-relaxed font-sans">
                  {service.shortDesc}
                </p>
              </div>

              {/* Specific capabilities */}
              <div className="mt-8 pt-6 border-t border-cinema-border/70">
                <ul className="space-y-2 text-xs font-mono text-text-muted">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 group-hover:text-text-secondary transition-colors">
                      <span className="w-1 h-1 rounded-full bg-electric-bright" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-electric-bright group-hover:text-white transition-colors"
                >
                  <span>INQUIRE SERVICE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-electric-bright group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
