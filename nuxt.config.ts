// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta : [
        { name: 'title', content: 'Dylan Delbauve | Portfolio'},
        { name: 'description', content: 'Développeur Full-stack'},

        { name: 'og:type', content: 'website'},
        { name: 'og:url', content: 'https://dylan.dlbv.fr/'},
        { name: 'og:title', content: 'Dylan Delbauve | Portfolio'},
        { name: 'og:description', content: 'Développeur Full-stack'},

        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:url', content: 'https://dylan.dlbv.fr/'},
        { name: 'twitter:title', content: 'Dylan Delbauve | Portfolio'},
        { name: 'twitter:description', content: 'Développeur Full-stack'},
      ],
      title: 'Dylan Delbauve | Portfolio'
    }
  },
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
