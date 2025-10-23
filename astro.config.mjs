// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://javier25arroyo.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Portafolio' : '/',
  integrations: [tailwind()],
  
  // Performance optimizations
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro/runtime/client/idle.js', 'astro/runtime/client/load.js'],
            utils: ['astro/runtime/client/media.js']
          }
        }
      }
    },
    ssr: {
      external: ['@vercel/speed-insights']
    }
  },
  
  // Build optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
});
