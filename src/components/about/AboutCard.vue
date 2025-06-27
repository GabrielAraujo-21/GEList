<template>
  <v-card class="mx-auto" max-width="344" min-width="344">
    <v-img 
        height="200px" 
        :src="props.image" 
        :alt="props.title" 

    ></v-img>

    <v-card-title>
      {{ props.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ props.subtitle }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" text="Explore"></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ props.text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { propsFactory } from "vuetify/lib/util/propsFactory.mjs";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
const show = ref(false);
</script>
