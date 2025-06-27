<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        src="https://picsum.photos/500/300?random"
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        height="64"
        cover
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            subtitle="Gabriel Moreira"
            title="GE-List"
          >
          </v-list-item>
        </v-list>
      </v-img>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <RouterLink
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-item :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title :textContent="item.text"></v-list-item-title>
          </v-list-item>
        </RouterLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
      cover
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>GEList - Crie Um Lista Fácil e Rápido</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import AppFooter from "@/layouts/AppFooter.vue";

const drawer = ref(null);

const items = [
  {
    text: "Inicio",
    icon: "mdi-list-box",
    to: "/",
  },
  {
    text: "Sobre",
    icon: "mdi-information-slab-circle-outline",
    to: "/sobre",
  },
];
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
