<template>
  <NuxtPage />
</template>

<script setup lang="ts">
  if(import.meta.env.PROD)
    useHead({
        title: 'Dylan Delbauve | Portfolio',
        meta: [
            { name: 'title', content: 'Dylan Delbauve | Portfolio'},
            { name: 'description', content: 'Développeur Full-stack'},

            { name: 'og:type', content: 'website'},
            { name: 'og:url', content: 'https://dylan.dlbv.fr/'},
            { name: 'og:title', content: 'Dylan Delbauve | Portfolio'},
            { name: 'og:description', content: 'Développeur Full-stack'},

            { name: 'twitter:card', content: 'summary_large_image'},
            { name: 'twitter:url', content: 'https://dylan.dlbv.fr/'},
            { name: 'twitter:title', content: 'Dylan Delbauve | Portfolio'},
            { name: 'twitter:description', content: 'Développeur Full-stack'}
        ],
        htmlAttrs: {
            lang: 'fr'
        },
        script: [
            { src: 'https://umami.srv.dlbv.party/script.js', 'data-website-id' : '8ad29c19-84c9-4486-9ed9-f2aedfa323ed', async: true}
        ]
    })

</script>
