<template>
  <Layout>
    <div class="w-screen h-screen bg-gray-800">
      <div class="h-screen w-full flex justify-center items-center bg-gray-800">
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

    <div class="w-screen h-full bg-gray-700 py-12">
      <h1 class="pb-8 pl-16 break-words text-white text-3xl md:text-5xl font-bold">Compétences</h1>
      <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:auto-cols-max p-4 gap-2 px-12">
        <Skill v-for="skill in $page.skills.edges" :key="skill.node.id" :skill=skill.node />
      </div>
    </div>

    <div class="w-screen h-full bg-gray-700">
      <h1 class="pb-8 pl-16 break-words text-white text-3xl md:text-5xl font-bold">Les derniers projets ajoutés</h1>
      <div class="w-screen h-full overflow-x-scroll scrollbar-thight scroll-smooth overscroll-none">
        <div class=" flex flex-nowrap gap-8 p-12">
          <Project v-for="project in $page.projects.edges" :project=project.node :key="project.node.id" />
          <div class="inline-block">
            <div class="h-96 w-80 overflow-hidden rounded-3xl shadow-2xl transition bg-gray-800 flex flex-col gap-6 justify-center items-center">
              <h2 class="text-white font-bold">En voir plus ?</h2>
              <g-link to="/projects/" class=" shadow-md mx-auto p-2 bg-gray-800 shadow-2xl hover:bg-gray-700 hover:scale-125 transition rounded-3xl">
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
