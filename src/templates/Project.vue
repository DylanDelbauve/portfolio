<template>
  <layout>
    <div class="h-full w-screen flex flex-col justify-center items-center">
      <g-image :src="getStrapiMedia($page.project.thumbnail.url)" width="800" class="w-1/3 aspect-square object-fill"/>
      <h1 v-html="$page.project.title"></h1>
      <p class="text-white"><VueShowdown :markdown="$page.project.description" flavor="github" /></p>
    </div>
  </layout>
</template>

<script>
import {VueShowdown} from 'vue-showdown';
import {getStrapiMedia} from "../utils/medias";
export default {
  name: "Project",
  components: {
    VueShowdown
  },
  methods: {
    getStrapiMedia,
  }
}
</script>

<page-query>
query($id: ID!) {
project: strapiProjects(id : $id) {
title, description, thumbnail {url}
}
}
</page-query>

<style scoped>
#présentation {
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
</style>