<template>
  <layout>
    <div class="w-screen min-h-screen flex justify-center">
      <a v-if="$page.project.links != null" class="fixed bg-gray-800 z-40 bottom-4 lg:bottom-20 md:bottom-10 right-4 lg:right-20 md:right-10 p-4 md:p-6 shadow rounded-full hover:animate-bounce" target="_blank" :href="$page.project.links.github">
        <Github class="h-6 w-6 text-white md:scale-125"/>
      </a>
      <g-image :src="getStrapiMedia($page.project.thumbnail.url)" width="800" class="invisible md:visible w-full h-full z-0 fixed object-cover object-center blur-md contrast-75"/>
      <div class="h-full min-h-screen w-full md:w-10/12 lg:w-3/5 flex flex-col justify-center items-center z-10 bg-gray-700 py-28 md:py-24 px-12 shadow-2xl">
        <g-image :src="getStrapiMedia($page.project.thumbnail.url)" width="800" class="w-full rounded-2xl shadow object-fill"/>
        <div class="w-full mx-auto flex my-4 py-4 gap-4 md:flex-row flex-col">
          <h1 class="text-white w-fit whitespace-nowrap font-bold text-2xl md:text-4xl" v-html="$page.project.title"></h1>
          <div class="w-full flex gap-2">
            <p v-for="tag in $page.project.tag" :key="tag.label" class="py-2 px-4 bg-sky-900 rounded-3xl text-white font-bold shadow w-git h-fit">
              {{tag.label}}
            </p>
          </div>
        </div>
        <p class="text-white break-words text-lg md:text-2xl"><VueShowdown :markdown="$page.project.description" :extensions="['ext']" /></p>
      </div>
    </div>

  </layout>
</template>

<script>
import VueShowdown, { showdown } from 'vue-showdown';
import {getStrapiMedia} from "../utils/medias";
import Vue from 'vue';
import Github from '../assets/svg/Github.svg';

const classMap = {
  h2: "font-bold text-2xl mt-6 mb-2",
  p: ""
}

const extension = Object.keys(classMap).map(key => ({
      type: 'output',
      regex: new RegExp(`<${key}(.*)>`, 'g'),
      replace: `<${key} class="${classMap[key]}" $1>`
    })
);

showdown.extension('ext', extension);
Vue.use(VueShowdown, {
  options: {
    noHeaderId: true
  },
  extensions: [
      extension
  ]
})

export default {
  name: "Project",
  components: {
    Github
  },
  methods: {
    getStrapiMedia,
  }
}
</script>

<page-query>
query($id: ID!) {
project: strapiProjects(id : $id) {
title, description, thumbnail {url}, tag {label},
links {github}
}
}
</page-query>
