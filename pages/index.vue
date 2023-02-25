<template>
  <Header @open-side-panel="side.open()"></Header>
  <SidePanel ref="side"></SidePanel>
  <div class="h-full w-full bg-slate-800 flex">
    <div class="w-full md:w-4/5">
      <section ref="main" id="main" class="h-screen w-full p-40 flex justify-center items-center">
        <div class="flex flex-col gap-4">
          <h1 class="font-sans text-7xl text-white">
            Hey, I'm Dylan <br/>
            a Fullstack developer
          </h1>
          <h2 class="font-sans text-slate-500">Passionné par la photo et le développement, je m'égare parfois à la
            création de logo</h2>
          <a class="bg-indigo-600 w-max px-12 py-3 shadow-lg text-white" href="">Voir mon CV</a>
        </div>
      </section>
      <section ref="about" id="about" class="h-screen w-full p-24 lg:p-52">
        <h1 class="text-4xl md:text-5xl text-indigo-600">À propos</h1>
        <div class="bg-indigo-600 w-40 h-2 my-10"></div>
        <ul class="text-white marker:text-indigo-600 list-disc">
          <li class="p-2">
            <h2 class="font-bold text-lg">2018 - Baccalauréat STI2D</h2>
            <p>Obtenu avec mention Bien</p>
          </li>
          <li class="p-2">
            <h2 class="font-bold text-lg">2020 - DUT Informatique</h2>
            <p>Obtenu à l'IUT de Dijon</p>
            <p>Un stage de développeur FullStack Chez Odalid</p>
          </li>
          <li class="p-2">
            <h2 class="font-bold text-lg">2021 - Licence Pro CDAM</h2>
            <p>Obtenu à la Fac Sciences & Techniques de Besançon</p>
            <p>Un stage de développeur Web au Cercle Mixte de la gendarmerie de Besançon</p>
          </li>
          <li class="p-2">
            <h2 class="font-bold text-lg">2022 - Développeur Web <span class="rounded-full bg-indigo-600 px-2 text-sm">Vous êtes ici</span></h2>
            <p>Chez JDC à Bruges</p>
            <p>ASP Net Core + Vue 3</p>
          </li>
        </ul>
      </section>
      <section ref="skills" id="skills" class="h-min w-full p-24 lg:p-52">
        <h1 class="text-4xl md:text-5xl text-indigo-600">Compétences</h1>
        <div class="bg-indigo-600 w-40 h-2 my-10"></div>
        <div class="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-12">
          <div class="bg-slate-700 p-9 min-w-min">
            <Icon class="text-indigo-600" name="mdi:server" size="48px"/>
            <h2 class="text-white text-lg font-bold font-content">Back-end</h2>
            <p class="text-white font-content break-words md:text-xs break-words">
              Développement du fonctionnement entre l'interface utilisateur et la base de données en Java ou .Net
            </p>
          </div>
          <div class="bg-slate-700 p-9 min-w-min">
            <Icon class="text-indigo-600" name="mdi:web" size="48px"/>
            <h2 class="text-white text-lg font-bold font-content">Front-end</h2>
            <p class="text-white font-content break-words md:text-xs break-words">
              Création d'interface utilisateur web en JS/TS sous Vue
            </p>
          </div>
          <div class="bg-slate-700 p-9 min-w-min">
            <Icon class="text-indigo-600" name="material-symbols:phone-android" size="48px"/>
            <h2 class="text-white text-lg font-bold font-content">Application mobile</h2>
            <p class="text-white font-content break-words md:text-xs break-words">
              Sous Android grâce à MAUI (.Net), Java ou Flutter
            </p>
          </div>
          <div class="bg-slate-700 p-9 min-w-min">
            <Icon class="text-indigo-600" name="mingcute:terminal-box-fill" size="48px"/>
            <h2 class="text-white text-lg font-bold font-content">Environnement de développement</h2>
            <p class="text-white font-content break-words md:text-xs break-words">
              Utilisation de Git pour le versionnage du code et du service Azure DevOps pour le flux de travail
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class="hidden md:flex md:w-1/5">
      <Stepper :visible="visible"></Stepper>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import scrollama from "scrollama";

const side = ref(null);
const main = ref(null);
const about = ref(null);
const skills = ref(null);
const visible = ref('main');

onMounted(() => {
  const scroller = scrollama();
  scroller.setup({
    step: 'section[id]'
  })
      .onStepEnter((response) => {
        visible.value = response.element.id
      })

})

</script>
