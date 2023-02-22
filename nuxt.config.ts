// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "nitro": {
    "output": {
      dir: 'output',
      serverDir: 'output/server',
      publicDir: 'output/public'
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
