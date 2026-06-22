import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F5F5FA',
        border: '#E2E2EE',
        red: {
          brand: '#E8192C',
          glow: '#FF3347',
        },
        purple: {
          brand: '#4B3A9B',
          light: '#6B52C8',
        },
        text: {
          primary: '#0D0D1A',
          secondary: '#6E6E8A',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'red-glow': 'radial-gradient(ellipse at center, rgba(232,25,44,0.15) 0%, transparent 70%)',
        'purple-glow': 'radial-gradient(ellipse at center, rgba(75,58,155,0.2) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 30% 50%, rgba(75,58,155,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(232,25,44,0.15) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, rgba(245,245,250,0.8) 0%, rgba(226,226,238,0.4) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
