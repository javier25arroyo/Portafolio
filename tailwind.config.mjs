/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrainsMono Nerd Font Mono', 'JetBrains Mono', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',
        'sm': '0.875rem',
        'md': '1.125rem',
        'h3': '1.5rem',
        'h2': '2rem',
        'h1': '3rem',
        'hero': '4rem',
      }
    },
  },
  plugins: [],
}
