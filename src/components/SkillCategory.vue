<template>
  <div class="hover:bg-gray-800 w-1/5 h-min hover:h-max p-8 hover:shadow-lg rounded-2xl group hover:w-3/5 transition-all duration-300 ease-in">
    <h1 class="text-white text-3xl font-bold text-center group-hover:text-left">{{ skillCategory.name }}</h1>
    <div class="py-5 hidden group-hover:grid grid-cols-2">
      <div class="inline-flex gap-2 p-2" v-for="el in skillCategory.skills" :key="el.name">
        <g-image class="fill-white w-8 h-8 invert drop-shadow-xl" height="32" width="32" fit="contain" :src="el.logoLink" />
        <h2 class="text-white">{{ el.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    skillCategory: Object
  }
}
</script>

<style scoped>

</style>