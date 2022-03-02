<template>
  <div class="w-screen h-full bg-gray-800">
    <nav class="bg-gray-800 w-full fixed right-0 left-0 top-0 z-10 shadow">
      <div class="container fluid px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center">
          <div>
            <g-link class="text-2xl font-bold transition-colors duration-200 transform text-white lg:text-3xl hover:text-gray-300" to="/">Dylan Delbauve</g-link>
          </div>
        </div>

        <div class="items-center md:flex">
          <div class="flex flex-col md:flex-row md:mx-6">
            <g-link to="/projects/" class="my-1 text-sm font-medium transition-colors duration-200 transform text-gray-200 md:mx-4 md:my-0 hover:text-gray-400 transition" href="#">Projets</g-link>
            <g-link tp="/creations/" class="my-1 text-sm font-medium transition-colors duration-200 transform text-gray-200  md:mx-4 md:my-0 hover:text-gray-400 transition" href="#">Créations</g-link>
            <a class="my-1 text-sm font-medium transition-colors duration-200 transform text-gray-200 md:mx-4 md:my-0 hover:text-gray-400 transition" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <slot />

    <footer class="bg-gray-800 w-screen h-16 z-10 shadow my-auto">
      <div class="container fluid h-full py-4 mx-auto md:flex justify-between items-center">
        <p class="text-white font-bold">Dylan Delbauve - {{ year }} ©</p>
        <div class="flex gap-2 justify-center center">
          <p class="text-white">Made with <a href="">GridSome</a> and </p>
          <Heart class="text-pink-700 w-6 h-6" />
        </div>
        <div class="flex gap-4 min-h-min max-h-fit">
          <i class="h-5 w-5 text-white hover:text-gray-400"><a href="https://www.instagram.com/dylan_dlbv/" target="_blank"><Instagram class="h-6 w-6"/></a></i>
          <i class="h-5 w-5 text-white hover:text-gray-400"><a href="https://www.linkedin.com/in/dylandelbauve/" target="_blank"><Linkedin class="h-6 w-6"/></a></i>
          <i class="h-5 w-5 text-white hover:text-gray-400"><a href="https://github.com/DylanDelbauve" target="_blank"><Github class="h-6 w-6"/></a></i>
          <i class="h-5 w-5 text-white hover:text-gray-400"><a href="mailto:dylandelbauve@gmail.com"><Mail class="h-6 w-6"/></a></i>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>

import Mail from '../assets/svg/Mail.svg';
import Github from '../assets/svg/Github.svg';
import Linkedin from '../assets/svg/Linkedin.svg';
import Instagram from '../assets/svg/Instagram.svg';
import Heart from '../assets/svg/Heart.svg';

export default {
  computed: {
    year: function() {
      const d = new Date(Date.now());
      return d.getFullYear();
    }
  },
  components: {
    Mail,
    Github,
    Instagram,
    Linkedin,
    Heart
  }
}
</script>

<style>
</style>
