<template>
  <Layout>
      <div class="w-screen h-full bg-gray-800 py-8">
        <div class="w-screen h-full flex flex-col items-center pt-24 gap-8">
          <div v-for="project in $page.projects.edges" :key="project.node.id" class="w-3/5 h-60 bg-gray-700 rounded-2xl shadow-md flex">
            <div class=" h-full aspect-square">
              <g-image :src="getStrapiMedia(project.node.thumbnail.url)" width="300" class="h-full w-full rounded-l-2xl object-cover"/>
            </div>
            <div class="w-full h-full p-8 text-ellipsis">
              <g-link :key="project.node.id" :to="{ path: '/projects/' + project.node.id}">
                <h1 class="text-white font-bold text-5xl align-middle">{{ project.node.title }}</h1>
              </g-link>
              <p class="h-full w-full text-white ">
                {{ project.node.short }}
              </p>
            </div>
          </div>
        </div>
      </div>
  </Layout>
</template>

<script>
import {getStrapiMedia} from "../utils/medias";

export default {
  name: "Projects",
  methods: {
    getStrapiMedia
  }
}
</script>

<page-query>
query {
projects: allStrapiProjects(limit: 5) {
edges {
node {
id,
title,
short,
thumbnail { url, width }
}
}
}
}
</page-query>