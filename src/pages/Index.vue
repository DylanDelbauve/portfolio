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

    <div class="w-screen h-full bg-gray-700">
      <h1 class="p-8 text-white text-5xl font-bold">Les derniers projets ajoutés</h1>
      <div class="w-screen h-full overflow-x-scroll no-scrollbar">
        <div class=" flex flex-nowrap gap-8 p-8">
          <Project v-for="project in $page.projects.edges" :project=project.node :key="project.node.id" />
          <div class="inline-block">
            <div class="h-96 w-80 overflow-hidden rounded-3xl shadow-2xl transition bg-gray-800 flex flex-col gap-6 justify-center items-center">
              <h2 class="text-white font-bold">En voir plus ?</h2>
              <g-link to="/projects/" class="shadow-md mx-auto p-2 bg-gray-800 shadow-2xl hover:bg-gray-700 hover:scale-125 transition rounded-3xl">
                <i class="h-6 w-6">
                  <ArrowRight class="h-6 w-6 text-white font-bold text-xl"/>
                </i>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>

import Skill from "../components/Skill.vue";
import Project from "../components/Project";
import ArrowRight from "../assets/svg/Arrow-Right.svg";

require('particles.js');
const parameters = require('../assets/particles.json');
particlesJS.load = function (tag_id) {
  window.particlesJS(tag_id, parameters);
}
export default {
  components: {
    Skill,
    Project,
    ArrowRight
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
  },
  projects: allStrapiProjects(limit: 5) {
    edges {
      node {
        id,
        title,
        slug,
        thumbnail { url, width }
      }
    }
  }
}
</page-query>
