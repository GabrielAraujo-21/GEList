<template>
  <div>
    <v-list
      lines="three"
      select-strategy="leaf"
      v-model:selected="taskStore.settingsSelection"
    >
      <v-list-subheader>Lista de Tarefas</v-list-subheader>
      <v-list-item
        v-for="(task, index) in taskStore.tasks"
        :key="index"
        :subtitle="task.description"
        :title="task.title"
        :value="task.value"
        @click="taskStore.toggleDoneTask(index)"
      >
        <template v-slot:prepend="{}">
          <v-list-item-action start>
            <v-checkbox-btn
              :model-value="task.done"
              @update:model-value="select"
            >
            </v-checkbox-btn>
          </v-list-item-action>
        </template>

        <template v-slot:append>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn
                    color="grey-lighten-1"
                    icon="mdi-dots-vertical"
                    variant="text"
                    v-bind="props"
                    >
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item value="edit">
                    <v-list-item-title
                        @click="taskStore.toggleEdit(index)"
                    >
                    <!-- <v-icon>mdi-pencil</v-icon> -->
                        Editar
                    </v-list-item-title>
                    </v-list-item>
                    <v-list-item value="delete">
                    <v-list-item-title
                        @click="taskStore.toggleDelete(index)"
                    >
                        Deletar
                    </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>

      </v-list-item>
    </v-list>
        
    <DialogTaskFields 
        :task="taskStore.tasks[taskStore.indexTaskSelected]"
    />
    <DialogDelete 
        :task="taskStore.tasks[taskStore.indexTaskSelected]"
    />
  </div>
</template>

<script setup>
import DialogTaskFields from '@/components/dialog/DialogTaskFields.vue';
import DialogDelete from '@/components/dialog/DialogDelete.vue';
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();
</script>
