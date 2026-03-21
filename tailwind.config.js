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
        brand: {
          gold: '#B8860B',         /* Deep gold */
          'gold-light': '#DAA520', /* Goldenrod */
          'gold-bright': '#FFD700',/* Pure gold for glows */
          'gold-dim': '#8B6508',   /* Dark gold */
        },
        carbon: {
          950: '#0a0a0a', /* Almost black */
          900: '#111111', /* Matte black base */
          800: '#1a1a1a', /* Slightly lighter matte */
          700: '#222',    /* Dark grey */
          600: '#333',
        },
      },
      animation: {
        'pulse-glow-gold': 'pulseGlowGold 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.8s ease forwards',
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse': 'spinReverse 18s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'logo-entrance': 'logoEntrance 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        pulseGlowGold: {
          '0%, 100%': { boxShadow: '0 0 10px #B8860B, 0 0 25px rgba(184,134,11,0.3)' },
          '50%': { boxShadow: '0 0 20px #DAA520, 0 0 50px rgba(218,165,32,0.5), 0 0 80px rgba(255,215,0,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-70px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(70px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        logoEntrance: {
          '0%': { opacity: '0', transform: 'scale(0.85) translateY(20px)' },
          '60%': { transform: 'scale(1.02) translateY(-2px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8860B 0%, #DAA520 40%, #FFD700 60%, #B8860B 100%)',
        'dark-gold-gradient': 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #B8860B 100%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(218,165,32,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
