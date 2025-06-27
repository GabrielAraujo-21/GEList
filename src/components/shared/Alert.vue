<template>
    <div class="alert-notification">
        <v-alert
          class="animate__animated animate__zoomIn"
          :text="alertStore.text"
          :title="alertStore.title"
          :type="alertStore.type"
          closable
        ></v-alert>
    </div>
  </template>
  <script setup>
  import 'animate.css'
    import { useAlertStore } from '@/stores/alert'  
    const alertStore = useAlertStore();
  </script>

  <style scoped>
    .alert-notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        max-width: 600px;
        z-index: 1000;
    }
</style>