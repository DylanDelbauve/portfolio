<template>
  <NuxtPage />
</template>

<script setup lang="ts">

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
  })

</script>
