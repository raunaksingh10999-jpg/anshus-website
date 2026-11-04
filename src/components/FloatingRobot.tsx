import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Radio } from 'lucide-react';

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
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const lastScrollY = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animTime = useRef(0);

  // Responsive screen detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsMinimized(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth floating sine-wave hover idle physics
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      animTime.current += 0.035;
      setBobOffset(Math.sin(animTime.current) * 6);
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

      // Smooth tilt based on velocity (-14 to +14 deg)
      const targetTilt = Math.max(-14, Math.min(14, diff * 0.35));
      setTilt(targetTilt);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setTilt(0), 160);

      // Frame detection across sections in order
      const sections = [
        { id: 'hero', name: 'FRAME 01 // INTRO' },
        { id: 'showreel', name: 'FRAME 02 // SHOWREEL' },
        { id: 'work', name: 'FRAME 03 // SELECTED WORKS' },
        { id: 'services', name: 'FRAME 04 // SERVICES' },
        { id: 'about', name: 'FRAME 05 // ABOUT ME' },
        { id: 'workflow', name: 'FRAME 06 // WORKFLOW' },
        { id: 'skills', name: 'FRAME 07 // SOFTWARE PIPELINE' },
        { id: 'contact', name: 'FRAME 08 // CLIENT INQUIRY' }
      ];

      const checkPoint = curY + window.innerHeight * 0.4;
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
      aria-label="AI Sentinel Cybernetic Companion"
      className="fixed z-40 pointer-events-none select-none transition-all duration-500 ease-out"
      style={{
        right: isMobile ? '16px' : '28px',
        bottom: isMobile ? '20px' : '28px',
        transform: `translate3d(0, ${bobOffset}px, 0) rotate(${tilt}deg)`
      }}
    >
      {/* Minimized Floating Micro-Orb (Mobile & Collapsed Mode) */}
      {isMinimized ? (
        <div
          onClick={() => {
            if (isMobile) {
              triggerScan();
            } else {
              setIsMinimized(false);
            }
          }}
          className="relative pointer-events-auto cursor-pointer group flex items-center gap-2"
          title="Click to expand AI Sentinel"
        >
          {/* Conical Holographic Scan Beam */}
          {isScanning && (
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-36 h-24 pointer-events-none transition-opacity duration-300"
              style={{
                background:
                  'conic-gradient(from 0deg at 50% 100%, rgba(22,139,255,0.3) 0deg, rgba(85,183,255,0.15) 35deg, transparent 70deg, transparent 290deg, rgba(85,183,255,0.15) 325deg, rgba(22,139,255,0.3) 360deg)',
                filter: 'blur(4px)'
              }}
            />
          )}

          {/* Micro-Orb Body */}
          <div className="relative w-12 h-12 rounded-full bg-cinema-card/90 border border-electric/40 backdrop-blur-md shadow-electric-button flex items-center justify-center transition-transform group-hover:scale-110">
            {/* Pulsing Aura */}
            <div className="absolute inset-0 rounded-full bg-electric/20 animate-ping opacity-60 pointer-events-none" />

            {/* Rotating mini ring */}
            <div className="absolute -inset-1 rounded-full border border-dashed border-electric/40 robot-spin pointer-events-none" />

            {/* Central Ocular Core */}
            <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center border border-electric-bright">
              <div
                className="w-2.5 h-2.5 rounded-full bg-electric-bright eye-pulse"
                style={{
                  transform: `translate3d(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px, 0)`
                }}
              />
            </div>
          </div>

          {/* Compact Telemetry Pill */}
          <div className="px-2.5 py-1 rounded-full bg-cinema-card/90 border border-cinema-border backdrop-blur-md text-[10px] font-mono text-electric-bright flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>AI SENTINEL</span>
            <span className="text-text-muted">•</span>
            <span className="text-white">{progressPercent}%</span>
            {!isMobile && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(false);
                }}
                className="ml-1 text-text-muted hover:text-white"
                aria-label="Expand AI Sentinel HUD"
              >
                <ChevronUp className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Full Drone Unit & HUD Readout (Desktop & Tablet Expanded Mode) */
        <div
          className="relative pointer-events-auto cursor-pointer group flex flex-col items-center"
          onClick={triggerScan}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Conical Holographic Scan Beam */}
          {(isScanning || isHovered) && (
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-28 pointer-events-none transition-opacity duration-300"
              style={{
                background:
                  'conic-gradient(from 0deg at 50% 100%, rgba(22,139,255,0.25) 0deg, rgba(85,183,255,0.15) 35deg, transparent 70deg, transparent 290deg, rgba(85,183,255,0.15) 325deg, rgba(22,139,255,0.25) 360deg)',
                filter: 'blur(4px)'
              }}
            />
          )}

          {/* Pulse Wave Animation on Click */}
          {isScanning && (
            <div
              key={scanPulse}
              className="absolute inset-0 rounded-full border-2 border-electric-bright animate-ping pointer-events-none opacity-80"
            />
          )}

          {/* Robot Chassis (Detailed Futuristic SVG) */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:scale-105">
            {/* Outer Ambient Glow Aura */}
            <div className="absolute inset-0 rounded-full bg-electric/15 blur-xl pointer-events-none group-hover:bg-electric/30 transition-colors" />

            {/* Rotating 3D Gyroscope Ring */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-electric/40 robot-spin pointer-events-none" />
            <div className="absolute -inset-3.5 rounded-full border border-dotted border-electric-bright/30 robot-spin-reverse pointer-events-none" />

            {/* Cyber Drone SVG Illustration */}
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full drop-shadow-[0_0_15px_rgba(22,139,255,0.45)]"
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
              <rect x="26" y="78" width="12" height="18" rx="4" fill="#101319" stroke="#168BFF" strokeWidth="1.2" />
              <line x1="28" y1="88" x2="36" y2="88" stroke="#168BFF" strokeWidth="1" />

              {/* Right Thruster Pod */}
              <rect x="82" y="78" width="12" height="18" rx="4" fill="#101319" stroke="#168BFF" strokeWidth="1.2" />
              <line x1="84" y1="88" x2="92" y2="88" stroke="#168BFF" strokeWidth="1" />

              {/* Wing Connectors */}
              <path d="M36 82 L46 72" stroke="#55B7FF" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M84 82 L74 72" stroke="#55B7FF" strokeWidth="2.5" strokeLinecap="round" />

              {/* Main Chassis Body (Stealth Diamond Shape) */}
              <polygon
                points="60,18 94,44 88,82 60,94 32,82 26,44"
                fill="#08090C"
                stroke="#168BFF"
                strokeWidth="1.8"
              />

              {/* Inner Armor Plates & Inset */}
              <polygon
                points="60,26 86,47 80,76 60,86 40,76 34,47"
                fill="#151922"
                stroke="#55B7FF"
                strokeWidth="1"
                opacity="0.85"
              />

              {/* Antenna Left & Right */}
              <line x1="48" y1="24" x2="42" y2="10" stroke="#168BFF" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="42" cy="10" r="2.2" fill="#55B7FF" />
              <line x1="72" y1="24" x2="78" y2="10" stroke="#168BFF" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="78" cy="10" r="2.2" fill="#55B7FF" />

              {/* Central Ocular Core (Iris & Eye) */}
              <circle cx="60" cy="56" r="18" fill="#08090C" stroke="#168BFF" strokeWidth="1.5" />
              <circle cx="60" cy="56" r="13" fill="none" stroke="#55B7FF" strokeWidth="1" strokeDasharray="3 2" />

              {/* Eye Pupil Tracking Cursor */}
              <circle
                cx={60 + mousePos.x * 0.4}
                cy={56 + mousePos.y * 0.4}
                r={isScanning ? 7 : 5}
                fill="#55B7FF"
                className="transition-all duration-150 eye-pulse"
              />
              <circle
                cx={60 + mousePos.x * 0.4}
                cy={56 + mousePos.y * 0.4}
                r="2"
                fill="#FFFFFF"
              />

              {/* Forehead Circuit Markings */}
              <path d="M54 36 L60 41 L66 36" fill="none" stroke="#168BFF" strokeWidth="1.2" />

              {/* Gradients */}
              <defs>
                <linearGradient id="thrusterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#55B7FF" stopOpacity="1" />
                  <stop offset="70%" stopColor="#168BFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#168BFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Telemetry HUD Readout Card */}
          <div className="mt-2 px-3 py-2 rounded-xl bg-cinema-card/95 border border-cinema-border backdrop-blur-md shadow-2xl flex flex-col items-center gap-1 transition-all group-hover:border-electric/60 group-hover:shadow-electric-glow">
            <div className="flex items-center justify-between w-full gap-2">
              <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-widest text-electric-bright uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>AI SENTINEL</span>
                <span className="text-text-muted">•</span>
                <span className="text-white">{progressPercent}%</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(true);
                }}
                className="text-text-muted hover:text-white p-0.5 rounded transition-colors"
                title="Minimize AI Sentinel"
                aria-label="Minimize AI Sentinel"
              >
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            
            <div className="text-[10px] font-mono text-text-primary tracking-wider truncate max-w-[140px] text-center font-medium">
              {frameName}
            </div>
            
            <div className="flex items-center gap-2 text-[8px] font-mono text-text-muted pt-0.5 border-t border-cinema-border/60 w-full justify-center">
              <span>SCROLL TO TRACK</span>
              <span className="text-electric-bright group-hover:underline">CLICK TO SCAN</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
