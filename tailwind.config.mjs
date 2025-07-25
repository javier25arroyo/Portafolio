/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'base': '1rem',
        'sm': '0.875rem',
        'md': '1.125rem',
        'h3': '1.5rem',
        'h2': '2rem',
        'h1': '3rem',
        'hero': '4rem',
      },
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-surface': 'var(--bg-surface)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'color-primary': 'var(--color-primary)',
        'color-secondary': 'var(--color-secondary)',
        'border-color': 'var(--border-color)',
        'shadow-color': 'var(--shadow-color)',
      }
    },
  },
  plugins: [],
}
