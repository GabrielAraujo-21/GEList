<template> 
    <div class="ma-4 text-center">
        <h1 class="ma-4">Sobre</h1>
        <p class="ma-4">
            Este é um aplicativo de exemplo para demonstrar o uso do Vue.js e Vuetify.
            Ele permite que você adicione, edite e exclua tarefas, além de visualizar uma lista de tarefas pendentes.
        </p>
        <v-divider class="my-4"></v-divider>
    </div>

    <div class="flex-grow-1 ml-10">
                    <h1 class="text-h5">Tecnologias Utilizadas</h1>
                    <p>
                        Uma breve descrição das tecnologias utilizadas neste projeto:
                    </p>

    </div>
    <div class="ma-4 d-flex">
        
        <AboutCard 
            v-for="(item, index) in items"
            :key="index"
            :title="item.title"
            :subtitle="item.subtitle"
            :image="item.image"
            :text="item.text"
        />
    </div>
    <div class="text-center">
        <p class="ma-4">
            Desenvolvido por <a href="" target="_blank">Gabriel Araújo</a> - 2025
        </p>
    </div>
</template>
<script setup>
import AboutCard from '@/components/about/AboutCard.vue';

const items = [
    {
        title: 'Vue.js',
        subtitle: 'Framework JavaScript',
        image: 'https://miro.medium.com/v2/resiza:fit:1400/format:webp/1*2b4j3k8Z5X9a6Y7f0c1QWg.png',
        text: 'Vue.js é um framework JavaScript progressivo para construir interfaces de usuário. Ele é projetado para ser adotado incrementalmente.'
    },
    {
        title: "Vuetify 3",
        image: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
        subtitle: "Incível biblioteca front-end",
        text: "Learn more about what Vuetify is, how to create an application from scratch, browse API references, sample code, tutorials, and more.",
    },
    {
        title: "Netlify",
        image: "https://fineproxy.org/wp-content/uploads/2023/07/netlify.app_logo.png",
        subtitle: "Netlify Embeds Serverless Functionality into Its Web",
        text: "Netlify is the modern development platform for Enterprises to realize the speed, agility and performance of a scalable, composable web architecture.",
    },
    {
        title: "PWA",
        image:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UWpmhI3AEdFY7gjHIZH-2w.png",
        subtitle: "Progressive Web App",
        text: "Web apps have long played second-fiddle to native ones. While mobile apps benefit from full access to device APIs, snappy performance and support for features such as offline content and push notifications, the stateless and browser sandboxed nature of the web has frequently relegated web-based apps to second choice.",
  },
];
</script>