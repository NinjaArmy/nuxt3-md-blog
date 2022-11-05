/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultColors = {
  blue: {
    100: '#3db2ff',
    200: '#0000aa',
  },
  red: {
    100: '#ee7578',
    200: '#e56568',
    300: '#ff2121',
    400: '#e50404',
  },
  grey: {
    100: '#ffffff',
    200: '#f8f8f8',
    300: '#f0f0f0',
    400: '#d6d6d6',
    500: '#707070',
    600: '#555555',
    700: '#222222',
    800: '#121212',
  },
};
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
