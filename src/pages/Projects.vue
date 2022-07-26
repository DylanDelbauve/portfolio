<template>
  <Layout>
      <div class="w-screen h-full min-h-screen bg-gray-800 py-8 md:py-24 overflow-x-hidden">
        <div id="particles-js" class="h-full w-full fixed top-0 left-0 bottom-0 right-0"></div>
        <div class="w-full h-full flex flex-col items-center pt-24 gap-4 md:gap-8 p-4 md:p-0">
          <g-link class="w-full md:w-3/5 h-max md:h-60 bg-gray-700 rounded-2xl shadow-md flex flex-col md:flex-row z-20" v-for="project in $page.projects.edges" :key="project.node.id" :to="{ path: '/projects/project/' + project.node.id}">
            <div class="h-full aspect-square">
              <g-image :src="project.node.thumbnail[0].url" width="300" class=" md:h-full aspect-square rounded-t-2xl md:rounded-tr-none  md:rounded-l-2xl object-cover"/>
            </div>
            <div class="w-full h-full py-2 px-4 md:p-8 flex flex-col gap-2">
              <div class="w-full mx-auto flex flex-wrap break-wrap text-ellipsis gap-2 md:gap-4 items-center">
                <h1 class="text-white w-fit whitespace-normal font-bold lg:text-5xl md:text-3xl align-middle" v-html="project.node.title"></h1>
                <div class="w-fit flex gap-1 md:gap-4">
                  <p v-for="tag in project.node.tags" :key="tag" class="scale-75 bg-sky-800 md:scale-100 py-2 px-4 bg-gray-600 rounded-full text-white font-bold shadow">
                    {{tag}}
                  </p>
                </div>
              </div>
              <p class="h-full w-full text-white ">
                {{ project.node.short }}
              </p>
            </div>
          </g-link>
        </div>
          <div class="w-screen justify-center pt-16 flex z-20">
            <Pager :info="$page.projects.pageInfo" class="text-white flex gap-4 z-20" linkClass="font-bold px-4 py-2 hover:bg-sky-800 hover:scale-125 hover:flex-shrike transition bg-gray-700 rounded-xl shadow mx-auto" activeLinkClass="bg-sky-900"/>
          </div>
      </div>
  </Layout>
</template>

<script>
import { Pager } from "gridsome";
import parameters from "../assets/particles.json";


export default {
  name: "Projects",
  components: {
    Pager
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

<page-query>
query($page: Int) {
  projects: allProject(perPage: 10, page: $page) @paginate {
    pageInfo {
    totalPages
    currentPage
    }
    edges {
      node {
        id,
        title,
        short,
        thumbnail { url, width },
        tags
      }
    }
  }
}
</page-query>