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
      keyframes: {
        // Animata gradient background
        'bg-position': {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        // Simple fade-in for sections
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        'bg-position': 'bg-position 6s ease-in-out infinite alternate',
        'fade-in-up':  'fade-in-up 0.6s ease-out forwards',
        // optional shorthand fade-in
        'fade-in':     'fadeIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
