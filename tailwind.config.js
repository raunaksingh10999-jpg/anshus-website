/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cinema: {
          bg: '#050508',
          secondary: '#0C0E14',
          card: '#121620',
          border: '#1A202C',
          cardHover: '#181E2C',
        },
        text: {
          primary: '#F5F7FA',
          secondary: '#A2AAB8',
          muted: '#687385',
        },
        electric: {
          DEFAULT: '#168BFF',
          bright: '#55B7FF',
          dim: '#0D569F',
          glow: 'rgba(22, 139, 255, 0.35)',
          surface: 'rgba(22, 139, 255, 0.08)',
        },
        lime: {
          DEFAULT: '#10B981',
          bright: '#34D399',
          neon: '#A3E635',
          glow: 'rgba(16, 185, 129, 0.35)',
        },
        dark: {
          950: '#050508',
          900: '#0C0E14',
          850: '#121620',
          800: '#181E2C',
          750: '#202738',
          700: '#2A3348',
        },
        accent: {
          cyan: '#168BFF',
          bright: '#55B7FF',
          violet: '#55B7FF',
          lime: '#10B981',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'float-slow-1': 'floatSlow1 7s ease-in-out infinite',
        'float-slow-2': 'floatSlow2 8.2s ease-in-out infinite',
        'float-slow-3': 'floatSlow3 6.5s ease-in-out infinite',
        'float-slow-4': 'floatSlow4 9s ease-in-out infinite',
        'float-slow-5': 'floatSlow5 7.8s ease-in-out infinite',
        'float-slow-6': 'floatSlow6 8.5s ease-in-out infinite',
        'float-slow-7': 'floatSlow7 6.9s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.04)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatSlow1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        floatSlow2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-2deg)' },
        },
        floatSlow3: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatSlow4: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-1.5deg)' },
        },
        floatSlow5: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-13px) rotate(1.2deg)' },
        },
        floatSlow6: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-17px) rotate(-1.8deg)' },
        },
        floatSlow7: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1.6deg)' },
        },
      },
      boxShadow: {
        'electric-glow': '0 0 30px -5px rgba(22, 139, 255, 0.35)',
        'electric-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(22, 139, 255, 0.15)',
        'electric-button': '0 0 25px rgba(22, 139, 255, 0.45)',
        'glass-sm': '0 8px 24px -4px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.18)',
        'glass-md': '0 16px 36px -8px rgba(0, 0, 0, 0.65), inset 0 1px 1.5px rgba(255, 255, 255, 0.22)',
        'glass-lg': '0 24px 48px -12px rgba(0, 0, 0, 0.75), inset 0 1.5px 2px rgba(255, 255, 255, 0.28)',
        'glass-glow-blue': '0 0 35px -5px rgba(22, 139, 255, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.25)',
        'glass-glow-lime': '0 0 35px -5px rgba(16, 185, 129, 0.3), inset 0 1px 1.5px rgba(255, 255, 255, 0.25)',
      }
    },
  },
  plugins: [],
}