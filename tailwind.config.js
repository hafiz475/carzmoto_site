/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        neon: {
          red: '#ff1a1a',
          'red-dim': '#cc0000',
          glow: 'rgba(255,26,26,0.5)',
        },
        carbon: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#222222',
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'slide-in-left': 'slideInLeft 0.7s ease forwards',
        'slide-in-right': 'slideInRight 0.7s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #ff1a1a, 0 0 20px #ff1a1a, 0 0 40px #ff1a1a',
          },
          '50%': {
            boxShadow: '0 0 20px #ff1a1a, 0 0 40px #ff1a1a, 0 0 80px #ff1a1a',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'red-glow': 'radial-gradient(ellipse at center, rgba(255,26,26,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
