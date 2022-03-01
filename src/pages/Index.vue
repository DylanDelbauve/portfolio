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

    <div class="w-screen h-screen bg-gray-700 p-12">
      <div class="grid grid-cols-3 shadow-xl rounded-3xl">
      </div>
    </div>

  </Layout>
</template>

<script>

require('particles.js');
const parameters = require('../assets/particles.json');
particlesJS.load = function(tag_id) {
  window.particlesJS(tag_id, parameters);
}

export default {
  components: {
  },

  metaInfo: {
    title: 'Portfolio'
  },
  mounted() {
    particlesJS.load('particles-js');
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
