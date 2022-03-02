<template>
  <Layout>
    <div class="w-screen h-screen bg-gray-800">
      <div class="h-screen w-full flex justify-center items-center bg-gray-800">
        <div id="particles-js" class="h-screen w-full absolute top-0 left-0 right-0"></div>
        <div class="flex flex-row justify-center items-center space-x-3">
          <div class="w-1/3">
            <p class="text-right text-white text-5xl">Développeur Back-end et (un peu front-end)</p>
          </div>
          <div class="p-4">
            <div class="bg-white h-48 w-1"></div>
          </div>
          <div class="w-1/3">
            <h1 class="text-left text-white text-8xl font-bold">Dylan Delbauve</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="w-screen h-full bg-gray-700 p-12">
      <h1 class="text-white text-5xl font-bold pb-8 pl-5">Compétences</h1>
      <div class="md:grid md:grid-cols-3 auto-cols-max p-4 gap-2">
        <Skill v-for="skill in $page.skills.edges" :key="skill.node.id" :skill=skill.node />
      </div>
    </div>

  </Layout>
</template>

<script>

import Skill from "../components/Skill.vue";

require('particles.js');
const parameters = require('../assets/particles.json');
particlesJS.load = function (tag_id) {
  window.particlesJS(tag_id, parameters);
}
export default {
  components: {
    Skill
  },

  metaInfo: {
    title: 'Portfolio'
  },
  mounted() {
    particlesJS.load('particles-js');
  }
}
</script>

<page-query>
query {
skills: allStrapiSkills {
edges {
node {
data {
name, array
}
}
}
}
}
</page-query>
