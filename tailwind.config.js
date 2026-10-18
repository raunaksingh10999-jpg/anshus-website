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
          bg: '#08090C',
          secondary: '#101319',
          card: '#151922',
          border: '#1F2430',
          cardHover: '#1A1F2C',
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
        dark: {
          950: '#08090C',
          900: '#101319',
          850: '#151922',
          800: '#1A1F2C',
          750: '#23293A',
          700: '#2D354A',
        },
        accent: {
          cyan: '#168BFF',
          bright: '#55B7FF',
          violet: '#55B7FF',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.03)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      boxShadow: {
        'electric-glow': '0 0 30px -5px rgba(22, 139, 255, 0.35)',
        'electric-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(22, 139, 255, 0.15)',
        'electric-button': '0 0 25px rgba(22, 139, 255, 0.45)',
      }
    },
  },
  plugins: [],
}
