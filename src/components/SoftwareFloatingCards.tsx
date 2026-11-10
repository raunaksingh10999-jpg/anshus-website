import React from 'react';

export interface SoftwareCardData {
  id: string;
  name: string;
  shortName: string;
  category: string;
  badge: string;
  glowColor: string;
  accentBorder: string;
  animationClass: string;
  delay: string;
  // Position on desktop (absolute)
  desktopPosition: string;
  icon: React.ReactNode;
}

export const SOFTWARE_TOOLS: SoftwareCardData[] = [
  {
    id: 'premiere',
    name: 'Premiere Pro',
    shortName: 'Pr',
    category: 'Video Editing',
    badge: 'Timeline & Cut',
    glowColor: 'rgba(153, 153, 255, 0.45)',
    accentBorder: 'rgba(153, 153, 255, 0.3)',
    animationClass: 'animate-float-slow-1',
    delay: '0s',
    desktopPosition: 'top-10 -left-6 xl:left-2',
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#00005B] border border-[#9999FF]/40 flex items-center justify-center shadow-lg shrink-0">
        <span className="font-display font-extrabold text-base text-[#9999FF] tracking-tight">Pr</span>
      </div>
    ),
  },
  {
    id: 'aftereffects',
    name: 'After Effects',
    shortName: 'Ae',
    category: 'VFX & Motion',
    badge: 'Compositing',
    glowColor: 'rgba(210, 145, 255, 0.45)',
    accentBorder: 'rgba(210, 145, 255, 0.3)',
    animationClass: 'animate-float-slow-2',
    delay: '0.8s',
    desktopPosition: 'top-64 -left-10 xl:left-0',
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#00005B] border border-[#D291FF]/40 flex items-center justify-center shadow-lg shrink-0">
        <span className="font-display font-extrabold text-base text-[#D291FF] tracking-tight">Ae</span>
      </div>
    ),
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    shortName: 'Ps',
    category: 'Graphic Design',
    badge: 'Retouch & Poster',
    glowColor: 'rgba(49, 168, 255, 0.45)',
    accentBorder: 'rgba(49, 168, 255, 0.3)',
    animationClass: 'animate-float-slow-3',
    delay: '1.6s',
    desktopPosition: 'top-[440px] -left-4 xl:left-6',
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#001E36] border border-[#31A8FF]/40 flex items-center justify-center shadow-lg shrink-0">
        <span className="font-display font-extrabold text-base text-[#31A8FF] tracking-tight">Ps</span>
      </div>
    ),
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    shortName: 'Ai',
    category: 'Vector Graphics',
    badge: 'Key Visuals',
    glowColor: 'rgba(255, 154, 0, 0.45)',
    accentBorder: 'rgba(255, 154, 0, 0.3)',
    animationClass: 'animate-float-slow-4',
    delay: '0.4s',
    desktopPosition: 'top-8 -right-6 xl:right-2',
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#330000] border border-[#FF9A00]/40 flex items-center justify-center shadow-lg shrink-0">
        <span className="font-display font-extrabold text-base text-[#FF9A00] tracking-tight">Ai</span>
      </div>
    ),
  },
  {
    id: 'canva',
    name: 'Canva',
    shortName: 'Canva',
    category: 'Social Creatives',
    badge: 'Rapid Layouts',
    glowColor: 'rgba(0, 196, 204, 0.45)',
    accentBorder: 'rgba(0, 196, 204, 0.3)',
    animationClass: 'animate-float-slow-5',
    delay: '1.2s',
    desktopPosition: 'top-[220px] -right-10 xl:right-0',
    icon: (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7D2AE8] to-[#00C4CC] border border-white/30 flex items-center justify-center shadow-lg shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
          <path d="M18.8 9.5C18 8.6 16.8 8.1 15.2 8.1C11.8 8.1 9.2 10.8 9.2 14.5C9.2 17.5 11.3 19.3 14.5 19.3C16.4 19.3 18 18.5 19.1 17.2C19.4 16.8 19.3 16.3 18.8 16L18 15.5C17.6 15.3 17.1 15.4 16.8 15.8C16.1 16.7 15.2 17.1 14.2 17.1C12.3 17.1 11.2 16 11.2 14.3C11.2 12.3 12.8 10.1 15.2 10.1C16.2 10.1 17 10.4 17.6 11C18 11.3 18.5 11.2 18.8 10.8L19.2 10.2C19.4 9.8 19.2 9.4 18.8 9.5Z" />
        </svg>
      </div>
    ),
  },
  {
    id: 'blender',
    name: 'Blender 3D',
    shortName: 'Blender',
    category: '3D & VFX',
    badge: 'Cycles Engine',
    glowColor: 'rgba(232, 125, 13, 0.45)',
    accentBorder: 'rgba(232, 125, 13, 0.3)',
    animationClass: 'animate-float-slow-6',
    delay: '2.0s',
    desktopPosition: 'top-[390px] -right-8 xl:right-4',
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#222936] border border-[#E87D0D]/40 flex items-center justify-center shadow-lg shrink-0 p-1.5">
        <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
          <circle cx="16" cy="18" r="5" fill="#E87D0D" />
          <circle cx="16" cy="18" r="2.2" fill="#FFFFFF" />
          <path d="M16 6L16 12" stroke="#22578E" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M7 23L12 19" stroke="#22578E" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M25 23L20 19" stroke="#22578E" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    shortName: 'Figma',
    category: 'UI & Layout',
    badge: 'Vector Craft',
    glowColor: 'rgba(162, 89, 255, 0.45)',
    accentBorder: 'rgba(162, 89, 255, 0.3)',
    animationClass: 'animate-float-slow-7',
    delay: '2.8s',
    desktopPosition: 'top-[530px] -right-4 xl:right-10',
    icon: (
      <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] border border-white/20 flex items-center justify-center shadow-lg shrink-0 p-2">
        <svg viewBox="0 0 38 57" className="w-full h-full" fill="none" aria-hidden="true">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      </div>
    ),
  },
];

/**
 * Floating software cards for Hero Section.
 * - On desktop: Flanked cleanly on left & right without overlapping center avatar, title, or buttons.
 * - On mobile/tablet: Responsive liquid glass strip below hero buttons.
 */
export const SoftwareFloatingCards: React.FC = () => {
  return (
    <>
      {/* =========================================================================
          DESKTOP FLANKING CARDS (lg screens and above)
          Positioned on the outer flanks - 100% collision-free with center content
         ========================================================================= */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none overflow-visible">
        {SOFTWARE_TOOLS.map((tool) => (
          <div
            key={tool.id}
            style={{
              animationDelay: tool.delay,
              ['--software-glow' as string]: tool.glowColor,
            }}
            className={`absolute ${tool.desktopPosition} ${tool.animationClass} pointer-events-auto z-20`}
          >
            <div className="liquid-glass-software group flex items-center gap-3.5 px-4 py-3 rounded-2xl cursor-pointer">
              {tool.icon}
              <div className="flex flex-col text-left pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-sm text-white tracking-wide group-hover:text-electric-bright transition-colors">
                    {tool.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-mono text-text-secondary tracking-wider uppercase">
                    {tool.category}
                  </span>
                  <span className="text-white/20 text-[9px]">•</span>
                  <span className="text-[9px] font-mono text-electric-bright/80 font-medium">
                    {tool.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================================================
          MOBILE & TABLET RESPONSIVE SUITE (< lg screens)
          Neatly arranged liquid glass grid with zero text/button collisions
         ========================================================================= */}
      <div className="lg:hidden w-full max-w-2xl mx-auto mt-10 pt-8 border-t border-white/10">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass-pill text-[11px] font-mono text-electric-bright tracking-widest uppercase">
            <span>CREATIVE SUITE & SOFTWARE</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 px-1">
          {SOFTWARE_TOOLS.map((tool) => (
            <div
              key={tool.id}
              style={{ ['--software-glow' as string]: tool.glowColor }}
              className="liquid-glass-software flex items-center gap-2.5 p-2.5 rounded-xl text-left hover:border-electric/50 transition-all duration-300"
            >
              <div className="scale-90 origin-left shrink-0">
                {tool.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display font-bold text-xs text-white truncate">
                  {tool.name}
                </span>
                <span className="text-[9px] font-mono text-text-secondary truncate">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};