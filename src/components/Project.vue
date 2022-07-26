<template>
  <div class="h-96 w-full relative overflow-hidden rounded-3xl shadow-xl transition group">
    <div class="w-full h-full absolute bottom-0 bg-gradient-to-t z-10 from-black">
      <h1 class="pl-4 absolute bottom-4 font-bold text-xl group-hover:invisible text-white transition ease-in-out duration-200">{{ project.title }}</h1>
    </div>
    <div class="w-full h-full absolute z-20 ease-in-out duration-200 group-hover:flex transition hidden">
      <g-link :key="project.id" :to="{ path: '/projects/project/' + project.id}" class="bg-gray-800 font-bold text-white m-auto rounded shadow px-3 py-2">
          En savoir plus
        </g-link>
    </div>
    <g-image :src="project.thumbnail[0].url" width="80" class="h-full w-full z-0 object-cover ease-in-out duration-200 transition group-hover:blur group-hover:brightness-50" />
  </div>
</template>

<script>
import ArrowRight from '../assets/svg/Arrow-Right.svg'

export default {
  name: "Project",
  props: {
    project: Object
  },
  components: {
    ArrowRight
  }
}
</script>

<style scoped>

</style>