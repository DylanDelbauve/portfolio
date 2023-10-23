<template>
    <Header @open-side-panel="side.open()"></Header>
    <SidePanel ref="side"></SidePanel>
    <div class="h-full w-full bg-blue-100 flex">
        <div class="w-full md:w-4/5">
            <section ref="main" id="main" class="h-screen w-full md:p-40 px-5 flex justify-center items-center">
                <div class="w-full h-3/4 md:h-full rounded-xl border-4 border-dark shadow-solid shadow-dark bg-orange-200 flex justify-center items-center">
                    <div class="flex flex-col gap-4 items-center">
                        <h1 class="font-menu text-center text-5xl lg:text-7xl">
                            Hey, I'm Dylan <br/>
                            a Fullstack developer
                        </h1>
                        <h2 class="font-content px-10 text-center">Passionné par la photo et le développement, je m'égare parfois à la
                            création de logo</h2>
                        <a class="bg-orange-400 border-4 border-dark hover:shadow-dark w-max px-12 py-3 hover:shadow-solid transition-all font-menu"
                           href="#">Voir mon CV</a>
                    </div>
                </div>

            </section>
            <section ref="about" id="about" class="md:min-h-screen w-full p-24 lg:p-52">
                <h1 class="text-4xl md:text-5xl font-menu">À propos</h1>
                <div class="bg-black w-40 h-2 my-10"></div>
                <div class="font-content flex flex-col gap-10">
                    <div class="p-2 pt-8 bg-rose-200 border-4 border-black rounded-lg shadow-solid min-w-min relative">
                        <h2 class="font-menu text-lg absolute -left-4 -top-4 border-4 border-dark rounded-lg px-2 bg-orange-400 shadow-solid">2018 - Baccalauréat STI2D</h2>
                        <p class="font-content">Obtenu avec mention Bien</p>
                        <p class="font-content">Conception d'un distributeur de croquette avec source solaire et heure GPS</p>
                        <p class="font-content">Arduino + Solidworks</p>
                    </div>
                    <div class="p-2 pt-8 bg-amber-200 border-4 border-black rounded-lg shadow-solid min-w-min relative">
                        <h2 class="font-menu text-lg absolute -left-4 -top-4 border-4 border-dark rounded-lg px-2 bg-orange-400 shadow-solid">2020 - DUT Informatique</h2>
                        <p class="font-content">Obtenu à l'IUT de Dijon</p>
                        <p class="font-content">Un stage de développeur FullStack Chez Odalid</p>
                        <p class="font-content">Ajout de fonctionnalité sur un application gestion d'accès</p>
                        <p class="font-content">Java EE + AngularJS</p>
                    </div>
                    <div class="p-2 pt-8 bg-cyan-200 border-4 border-black rounded-lg shadow-solid min-w-min relative">
                        <h2 class="font-menu text-lg absolute -left-4 -top-4 border-4 border-dark rounded-lg px-2 bg-orange-400 shadow-solid">2021 - Licence Pro CDAM</h2>
                        <p class="font-content">Obtenu à la Fac Sciences & Techniques de Besançon</p>
                        <p class="font-content">Un stage de développeur Web au Cercle Mixte de la gendarmerie de Besançon</p>
                        <p class="font-content">Création d'une application de gestion de carte avec allergènes</p>
                        <p class="font-content">CakePHP + Bootstrap 4</p>
                    </div>
                    <div class="p-2 pt-8 bg-emerald-200 border-4 border-black rounded-lg shadow-solid min-w-min relative">
                        <h2 class="font-menu text-lg absolute -left-4 -top-4 border-4 border-dark rounded-lg px-2 bg-orange-400 shadow-solid">2022 - Développeur Web</h2>
                        <p class="font-content">JDC SA</p>
                        <p class="font-content">Développement d'une solution SaaS</p>
                        <p class="font-content">ASP Net Core + Vue 3</p>
                    </div>
                </div>
            </section>
            <section ref="skills" id="skills" class="md:min-h-screen h-min w-full p-24 lg:p-52">
                <h1 class="text-4xl md:text-5xl font-menu">Compétences</h1>
                <div class="bg-black w-40 h-2 my-10"></div>
                <div class="flex flex-col 2xl:grid grid-cols-4 gap-12">
                    <div class="bg-rose-200 border-4 border-dark rounded-lg shadow-solid p-9 min-w-min">
                        <h2 class="text-lg font-bold font-menu my-2">Back-end</h2>
                        <p class="font-content break-words md:text-md">
                            Développement du fonctionnement entre l'interface utilisateur et la base de données en Java
                            ou .Net
                        </p>
                    </div>
                    <div class="bg-amber-200 border-4 border-dark rounded-lg shadow-solid p-9 min-w-min">
                        <h2 class="text-lg font-bold font-menu my-2">Front-end</h2>
                        <p class="font-content break-words md:text-md">
                            Création d'interface utilisateur web en JS/TS sous Vue
                        </p>
                    </div>
                    <div class="bg-cyan-200 border-4 border-dark rounded-lg shadow-solid p-9 min-w-min">
                        <h2 class="text-lg font-bold font-menu my-2">Application mobile</h2>
                        <p class="font-content break-words md:text-md">
                            Sous Android grâce à MAUI (.Net), Java ou Flutter
                        </p>
                    </div>
                    <div class="bg-emerald-200 border-4 border-dark rounded-lg shadow-solid p-9 min-w-min">
                        <h2 class="text-lg font-bold font-menu my-2">Environnement de développement</h2>
                        <p class="font-content break-words md:text-md">
                            Utilisation de Git pour le versionnage du code et du service Azure DevOps pour le flux de
                            travail
                        </p>
                    </div>
                </div>
            </section>
            <section ref="pictures" id="pictures" class="md:min-h-screen md:max-h-max w-full p-24 lg:p-52 ">
                <h1 class="text-4xl md:text-5xl font-menu">Photos</h1>
                <div class="bg-black w-40 h-2 my-10"></div>
                <div class="grid xl:grid-cols-2 gap-4 place-items-center">
                    <div class="h-min border-4 border-dark rounded-lg shadow-solid shadow-dark relative overflow-hidden group hover:shadow-none transition">
                        <img src="/pictures/6842648.jpg" alt="nature autumn road">
                        <a href="https://pixabay.com/photos/nature-autumn-road-fall-forest-6842648/" target="_blank" class="w-full h-full z-20 absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black flex flex-col justify-between p-4 transition-opacity">
                            <div class="font-menu rounded-full w-min px-2 border-4 border-black bg-orange-400 self-end after:content-['↗']">Pixabay</div>
                            <div class="text-white w-max">nature autumn road</div>
                        </a>
                    </div>
                    <div class="h-min border-4 border-dark rounded-lg shadow-solid shadow-dark relative overflow-hidden group hover:shadow-none transition">
                        <img src="/pictures/6470645.jpg" alt="hydrangea flower">
                        <a href="https://pixabay.com/photos/hydrangea-flower-pink-hydrangea-6470645/" target="_blank" class="w-full h-full z-20 absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black flex flex-col justify-between p-4 transition-opacity">
                            <div class="font-menu rounded-full w-min px-2 border-4 border-black bg-orange-400 self-end after:content-['↗']">Pixabay</div>
                            <div class="text-white w-max">hydrangea flower</div>
                        </a>
                    </div>
                    <div class="h-min border-4 border-dark rounded-lg shadow-solid shadow-dark relative overflow-hidden group hover:shadow-none transition">
                        <img src="/pictures/5373076.jpg" alt="poppy flower">
                        <a href="https://pixabay.com/photos/hydrangea-flower-pink-hydrangea-6470645/" target="_blank" class="w-full h-full z-20 absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black flex flex-col justify-between p-4 transition-opacity">
                            <div class="font-menu rounded-full w-min px-2 border-4 border-black bg-orange-400 self-end after:content-['↗']">Pixabay</div>
                            <div class="text-white w-max">poppy flower</div>
                        </a>
                    </div>
                    <div class="w-full h-full border-4 border-dark rounded-lg shadow-solid shadow-dark relative overflow-hidden group hover:shadow-none transition flex flex-col items-center justify-center">
                        <img class="h-full object-cover" src="/pictures/blured.png" alt="blur">
                        <div class="h-full w-full absolute z-10 backdrop-blur-lg flex justify-center items-center font-menu text-white">En voir plus ?</div>
                        <a href="https://pixabay.com/users/dylan_dlbv-15049403/" target="_blank" class="w-full h-full z-20 absolute top-0 left-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black flex items-center justify-center p-4 transition-opacity">
                            <div class="bg-orange-400 border-4 border-dark hover:shadow-dark w-max px-12 py-3 hover:shadow-solid transition-all font-menu after:content-['↗']">Pixabay</div>
                        </a>
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
