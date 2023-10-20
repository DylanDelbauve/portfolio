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
        'menu': ['Noto Sans'],
        'name': ['Inter'],
        'content': ['Open Sans']
      },
      boxShadow: {
        'solid': 'black 10px 10px 0 0',
      }
    },
  },
  plugins: [],
}
