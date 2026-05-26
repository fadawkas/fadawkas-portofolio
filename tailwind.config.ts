import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#191919',
          card: '#252525',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        light: {
          bg: '#fafafa',
          card: '#f1f1f0',
          border: '#e7e7e6',
        },
        notion: {
          black: '#111111',
          gray: '#6b7280',
          'light-gray': '#9ca3af',
          border: '#e9e9e7',
          'dark-border': 'rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
