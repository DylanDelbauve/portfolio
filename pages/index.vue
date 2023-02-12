<template>
    <Header @open-side-panel="side.open()"></Header>
    <SidePanel ref="side"></SidePanel>
    <div class="h-full w-full bg-slate-800 flex">
        <div class="w-4/5">
            <section class="h-screen w-full flex justify-center items-center">
                <div class="flex flex-col gap-4">
                    <h1 class="font-sans text-7xl text-white">
                        Hey, I'm Dylan <br/>
                        a Fullstack developer
                    </h1>
                    <h2 class="font-sans text-slate-500">Passionné par la photo et le développement, je m'égare parfois à la création de logo</h2>
                    <a class="bg-indigo-600 w-max px-12 py-3 shadow-lg text-white" href="">Voir mon CV</a>
                    <button @click="side.open()">test</button>
                </div>
            </section>
            <section id="about" class="h-screen w-full flex justify-center items-center">
                <h1>A propos</h1>
            </section>
            <section id="skills" class="h-screen w-full flex justify-center items-center">
                <h1>Competences</h1>
            </section>
        </div>
        <div class="w-1/5">

        </div>
    </div>
</template>

<script setup>

    const side = ref(null);

    onMounted(() => {
        console.log(side.value)
    })
</script>
