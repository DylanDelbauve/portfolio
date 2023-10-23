<template>
    <aside :class="isHide" class="bg-slate-100 fixed top-0 left-0 z-40 w-screen h-screen transition-transform flex flex-col ">
        <div class="mb-4 py-4 px-10 flex justify-between border-b-4 border-dark">
            <h1 class=" font-menu text-xl font-bold">Delbauve</h1>
            <button title="SideCloseBtn" class="" @click="close()"><Icon size="24px" name="material-symbols:close-rounded" /></button>
        </div>
        <div class="h-full flex flex-col gap-7 px-4">
            <nuxt-link @click="close()" class="text-bold font-menu" to="/">Accueil</nuxt-link>
            <nuxt-link @click="close()" class="text-bold font-menu" to="#about">A propos</nuxt-link>
            <nuxt-link @click="close()" class="text-bold font-menu" to="#skills">Compétences</nuxt-link>
            <nuxt-link @click="close()" class="text-bold font-menu" to="#pictures">Photos</nuxt-link>
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