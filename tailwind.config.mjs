/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          500: '#9a3412', 
          900: '#431407', 
        }
      }
    },
  },
  plugins: [],
}