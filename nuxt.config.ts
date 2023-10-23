export default defineNuxtConfig({
    ssr: false,
    nitro: {
        prerender: {
            routes: [
                '/_ipx/f_webp&q_80/pictures/6470645.jpg',
                '/_ipx/f_webp&q_80/pictures/5373076.jpg',
                '/_ipx/f_webp&q_80/pictures/6842648.jpg',
                '/_ipx/f_webp&q_80/pictures/blur.png'
            ]
        }
    },
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
