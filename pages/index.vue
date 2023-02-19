<template>
    <Header @open-side-panel="side.open()"></Header>
    <SidePanel ref="side"></SidePanel>
    <div class="h-full w-full bg-slate-800 flex">
        <div class="w-full md:w-4/5">
            <section class="h-screen w-full p-40 flex justify-center items-center">
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
            <section id="skills" class="h-min w-full p-24 lg:p-52">
                <h1 class="text-4xl md:text-5xl text-indigo-600">Compétences</h1>
                <div class="bg-indigo-600 w-40 h-2 my-10"></div>
                <div class="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-12">
                    <div class="bg-slate-700 p-9 min-w-min">
                        <Icon class="text-indigo-600" name="mdi:code-json" size="48px" />
                        <h2 class="text-white text-lg font-bold font-content">Back-end</h2>
                        <p class="text-white font-content break-words md:text-xs break-words">
                            Développement du fonctionnement entre l'interface utilisateur et la base de données en Java ou .Net
                        </p>
                    </div>
                    <div class="bg-slate-700 p-9 min-w-min">
                        <Icon class="text-indigo-600" name="mdi:web" size="48px" />
                        <h2 class="text-white text-lg font-bold font-content">Front-end</h2>
                        <p class="text-white font-content break-words md:text-xs break-words">
                            Création d'interface utilisateur web en JS/TS sous Vue
                        </p>
                    </div>
                    <div class="bg-slate-700 p-9 min-w-min">
                        <Icon class="text-indigo-600" name="material-symbols:phone-android" size="48px" />
                        <h2 class="text-white text-lg font-bold font-content">Application mobile</h2>
                        <p class="text-white font-content break-words md:text-xs break-words">
                            Sous Android grâce à MAUI (.Net), Java ou Flutter
                        </p>
                    </div>
                    <div class="bg-slate-700 p-9 min-w-min">
                        <Icon class="text-indigo-600" name="material-symbols:phone-android" size="48px" />
                        <h2 class="text-white text-lg font-bold font-content">Environnement de développement</h2>
                        <p class="text-white font-content break-words md:text-xs break-words">
                            Utilisation de Git pour le versionnage du code et du service Azure DevOps pour le flux de travail
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <div class="hidden md:flex md:w-1/5">

        </div>
    </div>
    <Footer></Footer>
</template>

<script setup>
    const side = ref(null);
</script>
