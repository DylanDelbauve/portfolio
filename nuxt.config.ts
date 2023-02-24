// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "nuxt-icon",
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto+Sans': true,
          'Inter': true,
          'Open+Sans': true
        },
      },
    ],
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
