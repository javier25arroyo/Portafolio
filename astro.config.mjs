// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'vite-plugin-compression';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.javier25cr.dev',
  base: '/',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  
  // Performance optimizations
  vite: {
    plugins: [
      // Brotli compression for production
      compress({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024,
        deleteOriginFile: false
      }),
      // Gzip compression as fallback
      compress({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024,
        deleteOriginFile: false
      })
    ],
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
