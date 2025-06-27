<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogDelete"
      max-width="600"
      min-width="400"
      persistent
    >
      <v-card prepend-icon="mdi-trash-can-outline" title="Delete Task">
        <v-card-title> Você tem certeza que deseja excluir o item ({{ task.title }}) da lista? </v-card-title>
        <v-card-text> Esta ação não poderá ser revertida!</v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <!-- Emit an event to toggle the dialog -->
          <v-btn
            @click="taskStore.toggleDelete"
            variant="elevated"
            color="red-darken-1"
          >
            Não
          </v-btn>
          <v-btn 
            @click="taskStore.deleteTask" 
            variant="outlined" 
            color="red-darken-1"
        >
            Sim
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "@/stores/task";
const taskStore = useTaskStore();
const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => ({ title: "", description: "" }),
  },
});
</script>
