/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark_moss_green: {
          DEFAULT: '#606c38',
          100: '#13160b',
          200: '#262b16',
          300: '#394121',
          400: '#4c562c',
          500: '#606c38',
          600: '#88994f',
          700: '#a9b876',
          800: '#c5d0a3',
          900: '#e2e7d1'
        },
        pakistan_green: {
          DEFAULT: '#283618',
          100: '#080b05',
          200: '#101509',
          300: '#18200e',
          400: '#1f2a13',
          500: '#283618',
          600: '#547133',
          700: '#80ac4d',
          800: '#aac987',
          900: '#d5e4c3'
        },
        dark_purple: {
          DEFAULT: '#270722',
          100: '#080107',
          200: '#10030e',
          300: '#170415',
          400: '#1f061b',
          500: '#270722',
          600: '#761567',
          700: '#c523ac',
          800: '#e361d0',
          900: '#f1b0e7'
        },
        earth_yellow: {
          DEFAULT: '#dda15e',
          100: '#34210b',
          200: '#684216',
          300: '#9d6321',
          400: '#d1842c',
          500: '#dda15e',
          600: '#e4b57f',
          700: '#ebc79f',
          800: '#f1dabf',
          900: '#f8ecdf'
        },
        aquamarine: {
          DEFAULT: '#a0ecd0',
          100: '#0d422f',
          200: '#1a855e',
          300: '#27c78d',
          400: '#5fdfb0',
          500: '#a0ecd0',
          600: '#b4f0da',
          700: '#c7f4e3',
          800: '#daf8ed',
          900: '#ecfbf6'
        }
      },
    },
  },
  plugins: [],
}

