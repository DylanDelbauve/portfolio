<template>
    <aside :class="isHide" class="bg-slate-900 fixed top-0 left-0 z-40 w-screen h-screen transition-transform flex flex-col p-12">
        <div class="flex justify-between">
            <h1 class="text-white font-name text-xl font-bold">Delbauve</h1>
            <button title="SideCloseBtn" class="text-white hover:bg-slate-700 rounded transition-colors" @click="close()"><Icon size="24px" name="material-symbols:close-rounded" /></button>
        </div>
        <div class="my-4 w-full h-0.5 bg-gradient-to-r from-gray-600"></div>
        <div class="h-full flex flex-col gap-7">
            <nuxt-link @click="close()" class="text-bold text-white font-menu" to="/">Accueil</nuxt-link>
            <nuxt-link @click="close()" class="text-bold text-white font-menu" to="#about">A propos</nuxt-link>
            <nuxt-link @click="close()" class="text-bold text-white font-menu" to="#skills">Compétences</nuxt-link>
        </div>
    </aside>
</template>

<script setup>
    let isHide = ref("-translate-x-full");

    function close(){
        isHide.value = "-translate-x-full";
    }

    function open() {
        isHide.value = "-translate-x-0";
    }

    defineExpose({
        close,
        open
    })
</script>