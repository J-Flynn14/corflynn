/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -- puts HTML/CSS/JS into ./out
  output: 'export',

  // Keeps every route as …/index.html  →  works nicely with GitHub Pages
  trailingSlash: true,

  // Required when you use output: 'export' and *don’t* want Next/Image to optimise
  images: { unoptimized: true },

  // ❌ DELETE the two lines below in the old file:
  // basePath: '/corflynn',
  // assetPrefix: '/corflynn/',
};

export default nextConfig;
