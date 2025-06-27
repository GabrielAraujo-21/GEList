<template>
  <div class="text-center pa-4">
    <v-dialog 
        v-model="taskStore.showDialogTaskFields" 
        max-width="600"
        min-width="400" 
        persistent
    >
        <v-card
            prepend-icon="mdi-pencil"
            title="Edit Task"
        >

            <v-card-text>
                <v-text-field 
                    label="Tittle"
                    v-model="props.task.title"
                />
                <v-text-field 
                    label="Description"
                    v-model="props.task.description"
                />
            </v-card-text>
            <template v-slot:actions>
                <v-spacer></v-spacer>
                <!-- Emit an event to toggle the dialog -->
                <v-btn 
                    @click="taskStore.updateTask()"
                    variant="elevated"
                    color="primary-darken-1"
                > 
                    Ok! 
                </v-btn> 
            </template>
        </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/task";
import { defineProps } from "vue";
const taskStore = useTaskStore();
const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => ({ title: "", description: "" }),
  },
});
</script>
