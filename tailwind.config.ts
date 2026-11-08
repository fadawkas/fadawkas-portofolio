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
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Keep existing neutral utilities on the same warm ivory / ink palette.
        white: '#F4EFE6',
        black: '#12110F',
        gray: {
          50: '#F7F3ED',
          100: '#EAE3D8',
          200: '#DDD4C7',
          300: '#D0C7BA',
          400: '#B9B0A4',
          500: '#6D6358',
          600: '#655D53',
          700: '#49433B',
          800: '#2D2924',
          900: '#12110F',
          950: '#0B0A09',
        },
        accent: {
          DEFAULT: '#C65F32',
          hover: '#D57043',
          focus: '#A8441D',
        },
        dark: {
          bg: '#12110F',
          card: '#1D1B18',
          border: 'rgba(244, 239, 230, 0.08)',
        },
        light: {
          bg: '#F4EFE6',
          card: '#EAE3D8',
          border: '#DDD4C7',
        },
        notion: {
          black: '#12110F',
          gray: '#6D6358',
          'light-gray': '#B9B0A4',
          border: '#DDD4C7',
          'dark-border': 'rgba(244, 239, 230, 0.08)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
