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
  // Files Tailwind should scan to tree-shake unused CSS
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: false,          // keep as explicit flag
  theme: {
    extend: {
      colors: brand,

      fontFamily: {
        hero: ['"Hero"', 'sans-serif'],
      },

      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)'    },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
    },
  },

  plugins: [],
};
