export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxt/content',
        '@nuxt/image',
        '@nuxtjs/robots',
        'nuxt-icon',
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
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
