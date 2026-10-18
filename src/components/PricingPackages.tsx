import React from 'react';
import { Check, Sparkles, Zap, ArrowRight, IndianRupee } from 'lucide-react';
import { pricingPackages, personalInfo } from '../data/portfolio';

export const PricingPackages: React.FC = () => {
  return (
    <section id="pricing" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[400px] bg-accent-cyan/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
          <IndianRupee className="w-3.5 h-3.5" />
          <span>SERVICES & PRICING</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
          TRANSPARENT VALUE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
            CINEMATIC RESULTS.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
          Clear, upfront pricing in Indian Rupees (₹) with guaranteed delivery timelines, modern AI-accelerated workflows, and dedicated creative attention.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {pricingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl ${
              pkg.popular
                ? 'bg-dark-900/90 border-2 border-accent-cyan shadow-[0_0_35px_rgba(0,240,255,0.2)] md:-translate-y-3'
                : 'bg-dark-900/60 border border-white/10 hover:border-white/25 shadow-xl'
            }`}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet text-black font-display font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-accent-cyan/25">
                <Sparkles className="w-3 h-3 fill-black" />
                <span>MOST POPULAR CHOICE</span>
              </div>
            )}

            <div>
              {/* Category Pill */}
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan block mb-2">
                {pkg.category}
              </span>

              {/* Package Name */}
              <h3 className="font-display font-bold text-2xl text-white">
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                  {pkg.price}
                </span>
                {pkg.billingPeriod && (
                  <span className="text-xs font-mono text-neutral-400">
                    /{pkg.billingPeriod}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed border-b border-white/10 pb-6">
                {pkg.description}
              </p>

              {/* Features List */}
              <div className="mt-6 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  What's Included:
                </span>
                <ul className="space-y-2.5">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <div className="w-4 h-4 rounded-full bg-accent-cyan/15 border border-accent-cyan/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-accent-cyan" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href={
                  personalInfo.whatsAppUrl
                    ? `${personalInfo.whatsAppUrl}?text=${encodeURIComponent(
                        `Hi Anshu! I'm interested in booking your ${pkg.name} (${pkg.price}). Let's discuss details.`
                      )}`
                    : '#contact'
                }
                target={personalInfo.whatsAppUrl ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`w-full py-3.5 px-6 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-accent-cyan via-white to-accent-violet text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-accent-cyan/50'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Retainer / Custom Agency Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-dark-900/50 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-accent-cyan text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>CUSTOM VOLUME / MONTHLY RETAINER</span>
          </div>
          <h4 className="font-display font-bold text-lg text-white">
            Need multiple edits each week or full channel management?
          </h4>
          <p className="text-xs text-neutral-400">
            Dedicated monthly creative bandwidth with discounted bundle pricing in INR and priority turnarounds.
          </p>
        </div>

        <a
          href="#contact"
          className="shrink-0 px-6 py-3 rounded-full bg-dark-800 hover:bg-dark-750 text-white border border-accent-cyan/40 hover:border-accent-cyan text-xs font-mono transition-all"
        >
          Request Custom Quote →
        </a>
      </div>
    </section>
  );
};
