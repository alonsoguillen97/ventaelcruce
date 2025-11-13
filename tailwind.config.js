/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#e5edff',
          200: '#d0dfff',
          300: '#b4c8ff',
          400: '#9aa5ff',
          500: '#7c7eff',
          600: '#6366f1',
          700: '#4f46e5',
          800: '#4338ca',
          900: '#1e1b4b',
          950: '#0f0d1e',
        },
        gold: {
          50: '#fffdf7',
          100: '#fffaeb',
          200: '#fff3c4',
          300: '#ffe888',
          400: '#ffd744',
          500: '#ffc107',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        warm: {
          50: '#fefaf8',
          100: '#fdf4f0',
          200: '#fae8e1',
          300: '#f5d5c8',
          400: '#edb8a1',
          500: '#e4926d',
          600: '#d87548',
          700: '#c5612d',
          800: '#a3511f',
          900: '#85441a',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'elegant': ['Aleo', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
