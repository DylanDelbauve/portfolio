<template>
  <div class="inline-block">
    <div class="h-96 w-80 overflow-hidden rounded-3xl shadow-2xl transition">
      <div class="w-full h-3/5">
        <g-image :src="getStrapiMedia(project.thumbnail.url)" width="80" class="h-full w-full object-cover"/>
      </div>
      <div class="w-full h-2/5 bg-gray-800 p-4 flex flex-col">
        <h1 class="w-full font-bold text-xl text-white">{{ project.title }}</h1>
        <div class="w-full h-full flex justify-center items-center">
          <g-link :key="project.id" :to="{ path: '/projects/' + project.id}" class="shadow-md mx-auto p-2 bg-gray-800 shadow-2xl hover:bg-gray-700 hover:scale-125 transition rounded-3xl">
            <i class="h-6 w-6">
              <ArrowRight class="h-6 w-6 text-white font-bold text-xl"/>
            </i>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from '../assets/svg/Arrow-Right.svg'
import {getStrapiMedia} from "../utils/medias";

export default {
  name: "Project",
  props: {
    project: Object
  },
  components: {
    ArrowRight
  },

  methods: {
    getStrapiMedia,
  }
}
</script>

<style scoped>

</style>