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
        // Base — warm cream
        bg: '#F6F3EE',
        surface: '#EEE7DD',
        'border-subtle': '#D7CEC3',
        'text-1': '#171616',
        'text-2': '#5E5A56',
        'text-3': '#9B9590',
        // Legacy accent
        accent: '#8FB7E8',
        'accent-subtle': '#E8EFF8',
        // Accent palette
        'ice-blue': '#8FB7E8',
        'ice-blue-light': '#E8EFF8',
        electric: '#2D66F5',
        peach: '#F2B2A0',
        'peach-light': '#FAF0ED',
        'warm-yellow': '#F4C542',
        'warm-yellow-light': '#FBF5DC',
        forest: '#314C3A',
        'forest-light': '#E3EDE6',
        coral: '#E86A5B',
        'coral-light': '#FAEDEB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'PingFang SC', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-inter)', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        '4xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        xl: ['1.25rem', { lineHeight: '1.4' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.7' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        card: '8px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
