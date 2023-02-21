<template>
  <div class="w-1/5 h-screen flex flex-col justify-center fixed">
    <div class="h-5 flex justify-center items-center">
      <a href="#main" :class="getClasses('main')" class="h-5 w-5 rounded-full transition-colors"></a>
    </div>
    <div class="h-24 flex justify-center items-center">
      <div class="h-24 w-0.5 bg-gray-500"></div>
    </div>
    <div class="h-5 flex justify-center items-center">
      <a href="#about" :class="getClasses('about')" class="h-5 w-5 rounded-full transition-colors"></a>
    </div>
    <div class="h-24 flex justify-center items-center">
      <div class="h-24 w-0.5 bg-gray-500"></div>
    </div>
    <div class="h-5 flex justify-center items-center">
      <a href="#skills" :class="getClasses('skills')" class="h-5 w-5 rounded-full transition-colors"></a>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['visible']);
  function getClasses(id) {
    return props.visible === id ? 'bg-indigo-600' : 'border-2 border-indigo-600';
  }

</script>