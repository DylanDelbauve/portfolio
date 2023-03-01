<template>
    <div class="w-full h-16 bg-slate-900 flex items-center px-10 md:px-24 justify-between fixed z-10">
        <div class="justify-self-center md:justify-self-auto">
            <nuxt-link to="/" class="text-white font-name text-xl font-bold hover:text-indigo-400 transition-colors">Delbauve</nuxt-link>
        </div>
        <div class="hidden  text-white md:flex gap-7">
            <nuxt-link class="text-bold font-menu hover:text-indigo-500 transition-colors" to="/">Accueil</nuxt-link>
            <nuxt-link class="text-bold font-menu hover:text-indigo-500 transition-colors" to="#about">A propos</nuxt-link>
            <nuxt-link class="text-bold font-menu hover:text-indigo-500 transition-colors" to="#skills">Compétences</nuxt-link>
        </div>
        <div class="md:hidden justify-self-end md:justify-self-auto">
            <button @click="sideButtonClick()" title="SideOpenBtn" class="text-white hover:bg-slate-700 rounded p-0.5 transition-colors"><Icon size="24px" name="material-symbols:menu-rounded" /></button>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['openSidePanel'])

    function sideButtonClick() {
        emit('openSidePanel');
    }
</script>