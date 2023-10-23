<template>
  <div class="w-1/5 h-screen flex flex-col justify-center fixed">
    <div class="h-5 flex justify-center items-center">
      <a aria-label="step-1" href="#main" :class="getClasses('main')" class="h-5 w-5 rounded-full border-4 border-dark transition-colors"></a>
    </div>
    <div class="h-24 flex justify-center items-center">
      <div class="h-24 w-1 bg-dark"></div>
    </div>
    <div class="h-5 flex justify-center items-center">
      <a aria-label="step-2" href="#about" :class="getClasses('about')" class="h-5 w-5 rounded-full border-4 border-dark transition-colors"></a>
    </div>
    <div class="h-24 flex justify-center items-center">
      <div class="h-24 w-1 bg-dark"></div>
    </div>
    <div class="h-5 flex justify-center items-center">
      <a aria-label="step-3" href="#skills" :class="getClasses('skills')" class="h-5 w-5 rounded-full border-4 border-dark transition-colors"></a>
    </div>
    <div class="h-24 flex justify-center items-center">
        <div class="h-24 w-1 bg-dark"></div>
    </div>
    <div class="h-5 flex justify-center items-center">
        <a aria-label="step-3" href="#pictures" :class="getClasses('pictures')" class="h-5 w-5 rounded-full border-4 border-dark transition-colors"></a>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['visible']);
  function getClasses(id) {
    return props.visible === id ? 'bg-orange-400' : 'border-2 border-black';
  }

</script>