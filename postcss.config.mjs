// PostCSS config (ESM syntax)
const config = {
  plugins: {
    // NEW: use the separate PostCSS plugin for v4
    '@tailwindcss/postcss': {},     // <— fixes the build error
    autoprefixer: {},               // vendor prefixes
  },
};

export default config;
