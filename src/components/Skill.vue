<template>
  <div class="bg-gray-800 p-8 shadow-lg rounded-2xl hover:bg-slate-800 transition hover:scale-125">
    <h1 class="text-white text-3xl font-bold">{{ skill.data.name }}</h1>
    <div class="sm:columns-2 py-5">
      <h2 v-for="el in skill.data.array" class="text-white h-full w-full whitespace-normal break-all sm:text-sm">{{ el }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    skill: Object
  }
}
</script>

<style scoped>

</style>