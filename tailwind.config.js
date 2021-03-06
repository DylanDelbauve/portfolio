module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.html',
  ],
  theme: {
    // your tailwind config goes here
    // container: {
    //  center: true,
    // },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}
