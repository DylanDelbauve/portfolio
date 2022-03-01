<template>
  <div>

    <nav class="bg-gray-800 fixed right-0 left-0 top-0 z-10 shadow">
      <div class="container fluid px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <div>
            <a class="text-2xl font-bold transition-colors duration-200 transform text-white lg:text-3xl hover:text-gray-300" href="#">Dylan Delbauve</a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button type="button" class="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="items-center md:flex">
          <div class="flex flex-col md:flex-row md:mx-6">
            <a class="my-1 text-sm font-medium transition-colors duration-200 transform text-gray-200 hover:text-blue-400 md:mx-4 md:my-0" href="#">Projets</a>
            <a class="my-1 text-sm font-medium transition-colors duration-200 transform text-gray-200 hover:text-blue-400 md:mx-4 md:my-0" href="#">Créations</a>
            <a class="my-1 text-sm font-medium transition-colors duration-200 transform text-gray-200 hover:text-blue-400 md:mx-4 md:my-0" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <slot/>


  </div>
</template>

<style>
</style>
