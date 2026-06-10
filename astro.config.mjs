// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.javier25cr.dev',
  base: '/',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  
  // Performance optimizations
  vite: {
    plugins: [tailwindcss()],
  },
  
  // Build optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
});
