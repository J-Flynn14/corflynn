/** @type {import('tailwindcss').Config} */
const brand = {
  corgreen: '#18cb96',
  cormint:  '#00b9a9',
  corcyan:  '#00a5b6',
  corblue:  '#0090ba',
  cornavy:  '#0079b3',
  cordenim: '#0062a1',
};

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: brand,
      fontFamily: {
        hero: ['"Hero"', 'sans-serif'],
      },

      /* ---------- Animated gradient helpers ---------- */
      backgroundSize: {
        '200%': '200% 200%',
      },
      keyframes: {
        gradient: {
          '0%':   { backgroundPosition: '0% 50%' },
          '25%':  { backgroundPosition: '50% 100%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '75%':  { backgroundPosition: '50% 0%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        gradient: 'gradient 3s ease infinite',   // faster (3s)
        'fade-in':     'fadeIn 0.4s ease-out forwards',
        'fade-in-up':  'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};

