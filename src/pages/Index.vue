<template>
  <Layout>
    <div class="w-screen h-screen bg-gray-900">
      <div class="h-screen w-full flex justify-center items-center from-black to-gray-500">
        <div id="particles-js" class="h-screen w-full absolute top-0 left-0 right-0"></div>
        <div class="flex flex-row justify-center items-center space-x-3">
          <div class="md:w-1/3 w-1/4">
            <p class="text-right text-white md:text-5xl slideFromLeft">Développeur Back-end et (un peu front-end)</p>
          </div>
          <div class="p-4">
            <div  class="md:h-48 h-24 w-1">
              <div id="separator" class="w-1 h-full bg-white">

              </div>
            </div>
          </div>
          <div class="md:w-1/3 w-1/4">
            <h1 id="name" class="text-left text-white text-3xl lg:text-8xl md:text-7xl font-bold">Dylan Delbauve</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="w-screen h-full bg-gray-900 py-12 transition-all">
      <h1 class="pb-8 pl-16 break-words text-white text-3xl md:text-5xl font-bold">Compétences</h1>
      <div class="w-screen flex flex-row gap-4 p-4">
        <SkillCategory v-for="skillCategory in $page.skillCategories.edges" :key="skillCategory.node.id" :skillCategory=skillCategory.node />
      </div>
    </div>
    <div class="w-screen h-full transition-all">
      <h1 class="pb-8 pl-16 break-words text-white text-3xl md:text-5xl font-bold">Les derniers projets ajoutés</h1>
      <div class="w-screen h-96 grid grid-cols-3 justify-items-center gap-4 px-4">
        <Project v-for="project in $page.projects.edges" :project=project.node :key="project.node.id" />
      </div>
    </div>

  </Layout>
</template>

<script>

import SkillCategory from "../components/SkillCategory.vue";
import Project from "../components/Project";
import ArrowRight from "../assets/svg/Arrow-Right.svg";

export default {
  components: {
    SkillCategory,
    Project,
    ArrowRight
  },

  metaInfo: {
    title: 'Portfolio'
  },
  mounted() {
    require('particles.js');
    const parameters = require('../assets/particles.json');
    particlesJS.load = function (tag_id) {
      window.particlesJS(tag_id, parameters);
    }
    particlesJS.load('particles-js');
  }
}
</script>

<style lang="css">
  #name {
    animation-name: slideRight;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    transition: ease-out;
  }

  .slideFromLeft{
    animation-name: slideLeft;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    transition: ease-out;
  }

  #separator {
    animation-name: grow;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-delay: 1.5s;
    animation-fill-mode: backwards;
    transition: ease-out;
  }
  
  @keyframes slideRight {
    from {
      position: relative;
      left: 100vw;
    }
    to {
      position: relative;
      left: 0vw;
    }
  }

  @keyframes slideLeft {
    from {
      position: relative;
      right: 100vw;
    }
    to {
      position: relative;
      right: 0vw;
    }
  }

  @keyframes grow {
    0% {
      transform: scaleY(0%);
    }
    100% {
      transform: scaleY(100%);
    }
  }
</style>

<page-query>
query {
  projects: allProject(limit: 3) {
    edges {
      node {
        id,
        title,
        slug,
        thumbnail { url, width }
      }
    }
  },
  skillCategories: allSkillCategory {
    edges {
      node {
        name,
        skills {
          name,
          logoLink
        }
      }
    }
  }
}
</page-query>
