<template>
  <layout>
    <div class="h-screen w-screen flex flex-col justify-center items-center">
      <g-image :src="getStrapiMedia($page.project.thumbnail.url)" width="800" class="h-full w-full"/>
      <h1 v-html="$page.project.title"></h1>
      <p class="text-white"><VueShowdown :markdown="$page.project.description" flavor="github" /></p>
    </div>
  </layout>
</template>

<script>
import { VueShowdown } from 'vue-showdown';
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