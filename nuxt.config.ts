// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    title: 'Dylan Delbauve | Portfolio',
    //script: [
    //  {async: true, src: 'https://umami.server.dlbv.fr/script.js', 'data-website-id': '9887f905-d69e-4c58-bc30-5acaa805f085'}
    //]
  },
  modules: [
    "@nuxt/content",
    "nuxt-icon",
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Archivo+Black': true,
          'Public+Sans': true,
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
