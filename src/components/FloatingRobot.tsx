import React, { useEffect, useState, useRef } from 'react';

export const FloatingRobot: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [tilt, setTilt] = useState(0);
  const [activeFrame, setActiveFrame] = useState(1);
  const [frameName, setFrameName] = useState('FRAME 01 // INTRO');
  const [isScanning, setIsScanning] = useState(false);
  const [scanPulse, setScanPulse] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [bobOffset, setBobOffset] = useState(0);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animTime = useRef(0);

  // Smooth floating sine-wave hover idle physics
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      animTime.current += 0.04;
      setBobOffset(Math.sin(animTime.current) * 8);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Scroll tracking across frames/sections
  useEffect(() => {
    const handleScroll = () => {
      const curY = window.scrollY;
      const diff = curY - lastScrollY.current;
      lastScrollY.current = curY;
      setScrollY(curY);

      // Smooth tilt based on velocity (-16 to +16 deg)
      const targetTilt = Math.max(-16, Math.min(16, diff * 0.45));
      setTilt(targetTilt);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setTilt(0), 180);

      // Frame detection across sections
      const sections = [
        { id: 'hero', name: 'FRAME 01 // INTRO & SHOWREEL' },
        { id: 'work', name: 'FRAME 02 // SELECTED WORKS' },
        { id: 'comparison', name: 'FRAME 03 // VFX BREAKDOWN' },
        { id: 'socials', name: 'FRAME 04 // VIRAL REELS & SHORTS' },
        { id: 'tools', name: 'FRAME 05 // SOFTWARE PIPELINE' },
        { id: 'about', name: 'FRAME 06 // CREATIVE BACKGROUND' },
        { id: 'contact', name: 'FRAME 07 // CLIENT INQUIRY' }
      ];

      const checkPoint = curY + window.innerHeight * 0.35;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          const h = el.offsetHeight;
          if (checkPoint >= top && checkPoint < top + h) {
            setActiveFrame(i + 1);
            setFrameName(sections[i].name);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 12
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const triggerScan = () => {
    setIsScanning(true);
    setScanPulse((p) => p + 1);
    setTimeout(() => setIsScanning(false), 1400);
  };

  const totalHeight = typeof document !== 'undefined' ? (document.documentElement.scrollHeight - window.innerHeight || 1) : 1;
  const progressPercent = Math.min(100, Math.max(0, Math.round((scrollY / totalHeight) * 100)));

  return (
    <aside
      aria-label="Cybernetic Companion Robot"
      className="fixed z-30 pointer-events-none select-none transition-all duration-500 ease-out"
      style={{
        right: 'clamp(12px, 3vw, 40px)',
        top: 'clamp(120px, 28vh, 320px)',
        transform: `translate3d(0, ${bobOffset}px, 0) rotate(${tilt}deg)`
      }}
    >
      {/* Floating Drone Unit */}
      <div
        className="relative pointer-events-auto cursor-pointer group"
        onClick={triggerScan}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Conical Holographic Scan Beam */}
        {(isScanning || isHovered) && (
          <div
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 h-28 pointer-events-none transition-opacity duration-300"
            style={{
              background:
                'conic-gradient(from 180deg at 50% 0%, rgba(0,240,255,0.25) 0deg, rgba(139,92,246,0.15) 35deg, transparent 70deg, transparent 290deg, rgba(139,92,246,0.15) 325deg, rgba(0,240,255,0.25) 360deg)',
              filter: 'blur(4px)'
            }}
          />
        )}

        {/* Pulse Wave Animation on Click */}
        {isScanning && (
          <div
            key={scanPulse}
            className="absolute inset-0 rounded-full border-2 border-accent-cyan animate-ping pointer-events-none opacity-80"
          />
        )}

        {/* Robot Chassis (Detailed Futuristic SVG) */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 transition-transform duration-300 group-hover:scale-105">
          {/* Outer Ambient Glow Aura */}
          <div className="absolute inset-0 rounded-full bg-accent-cyan/15 blur-xl pointer-events-none group-hover:bg-accent-cyan/30 transition-colors" />

          {/* Rotating 3D Gyroscope Ring */}
          <div className="absolute -inset-2 rounded-full border border-dashed border-accent-cyan/40 robot-spin pointer-events-none" />
          <div className="absolute -inset-3.5 rounded-full border border-dotted border-accent-violet/30 robot-spin-reverse pointer-events-none" />

          {/* Cyber Drone SVG Illustration */}
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            {/* Thruster Flame Left */}
            <ellipse
              cx="32"
              cy="102"
              rx="4"
              ry={isHovered ? 12 : 8}
              fill="url(#thrusterGrad)"
              className="thruster-pulse"
            />
            {/* Thruster Flame Right */}
            <ellipse
              cx="88"
              cy="102"
              rx="4"
              ry={isHovered ? 12 : 8}
              fill="url(#thrusterGrad)"
              className="thruster-pulse"
            />

            {/* Left Thruster Pod */}
            <rect x="26" y="78" width="12" height="18" rx="4" fill="#131826" stroke="#00F0FF" strokeWidth="1.2" />
            <line x1="28" y1="88" x2="36" y2="88" stroke="#00F0FF" strokeWidth="1" />

            {/* Right Thruster Pod */}
            <rect x="82" y="78" width="12" height="18" rx="4" fill="#131826" stroke="#00F0FF" strokeWidth="1.2" />
            <line x1="84" y1="88" x2="92" y2="88" stroke="#00F0FF" strokeWidth="1" />

            {/* Wing Connectors */}
            <path d="M36 82 L46 72" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M84 82 L74 72" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />

            {/* Main Chassis Body (Stealth Diamond Shape) */}
            <polygon
              points="60,18 94,44 88,82 60,94 32,82 26,44"
              fill="#0B0E17"
              stroke="#00F0FF"
              strokeWidth="1.8"
            />

            {/* Inner Armor Plates & Inset */}
            <polygon
              points="60,26 86,47 80,76 60,86 40,76 34,47"
              fill="#131B2E"
              stroke="#8B5CF6"
              strokeWidth="1"
              opacity="0.8"
            />

            {/* Antenna Left & Right */}
            <line x1="48" y1="24" x2="42" y2="10" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="42" cy="10" r="2.2" fill="#00F0FF" />
            <line x1="72" y1="24" x2="78" y2="10" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="78" cy="10" r="2.2" fill="#8B5CF6" />

            {/* Central Ocular Core (Iris & Eye) */}
            <circle cx="60" cy="56" r="18" fill="#070A12" stroke="#00F0FF" strokeWidth="1.5" />
            <circle cx="60" cy="56" r="13" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 2" />

            {/* Eye Pupil Tracking Cursor */}
            <circle
              cx={60 + mousePos.x * 0.4}
              cy={56 + mousePos.y * 0.4}
              r={isScanning ? 7 : 5}
              fill="#00F0FF"
              className="transition-all duration-150 eye-pulse"
            />
            <circle
              cx={60 + mousePos.x * 0.4}
              cy={56 + mousePos.y * 0.4}
              r="2"
              fill="#FFFFFF"
            />

            {/* Forehead Circuit Markings */}
            <path d="M54 36 L60 41 L66 36" fill="none" stroke="#00F0FF" strokeWidth="1.2" />

            {/* Gradients */}
            <defs>
              <linearGradient id="thrusterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
                <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Telemetry HUD Readout Card */}
        <div className="mt-2 px-3 py-2 rounded-xl bg-dark-900/90 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center gap-1 transition-all group-hover:border-accent-cyan/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]">
          <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-widest text-accent-cyan uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>AI SENTINEL</span>
            <span className="text-neutral-500">•</span>
            <span className="text-accent-violet">{progressPercent}%</span>
          </div>
          <div className="text-[10px] font-mono text-neutral-300 tracking-wider truncate max-w-[130px] text-center font-medium">
            {frameName}
          </div>
          <div className="flex items-center gap-2 text-[8px] font-mono text-neutral-500 pt-0.5 border-t border-white/5 w-full justify-center">
            <span>SCROLL TO TRACK</span>
            <span className="text-accent-cyan group-hover:underline">CLICK TO SCAN</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
