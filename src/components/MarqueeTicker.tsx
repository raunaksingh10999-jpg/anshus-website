import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'VISUAL EFFECTS',
    '3D COMPOSITING',
    'COLOR GRADING',
    'MOTION GRAPHICS',
    'DYNAMIC STORYTELLING',
    'SPEED RAMPING',
    'SOUND DESIGN',
    'VIRAL REELS',
    'KINETIC TYPOGRAPHY'
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-dark-900/60 py-3.5 backdrop-blur-md">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-6">
            <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-300 hover:text-accent-cyan transition-colors">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF]" />
          </div>
        ))}
      </div>
    </div>
  );
};
