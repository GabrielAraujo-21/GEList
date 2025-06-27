<template>
  <v-text-field
    label="Adicionar Nova Tarefa"
    :rules="rules"
    @keyup.enter="taskStore.addTask"
    v-model="taskStore.titleTaskCreating"
  ></v-text-field>
  <ListTasks />
</template>

<script setup>
import ListTasks from '@/components/app/ListTasks.vue'
import { onMounted } from "vue";
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();

const rules = [
  (value) => {
    if(!value || value.length > 4) return true;
      return 'A tarefa deve ter pelo menos 5 caracteres!';
  },
];

onMounted(() => {
  taskStore.getTasks();
});
</script>