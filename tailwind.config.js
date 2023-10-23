/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'menu': ['Archivo Black'],
        'name': ['Inter'],
        'content': ['Public Sans'],

      },
      boxShadow: {
        'solid': '#1f1f1f 5px 5px 0 0',
      },
      colors: {
        'dark': '#1f1f1f'
      }
    },
  },
  plugins: [],
}
