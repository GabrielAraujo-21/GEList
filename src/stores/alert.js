// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false, // Default to true for testing
    type: "",
    text: "",
    title: "",
  }),
  actions: {
    notifyAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 4000); // Hide after 4 seconds
    },
    notifyAlertCreated() {
        this.type = "success";
        this.text = "Tarefa criada com sucesso!";
        this.title = "Criação de Nova Tarefa";
        this.notifyAlert();
    },
    notifyAlertDeleted() {
        this.type = "warning";
        this.text = "A tarefa foi deletada!";
        this.title = "Deleção de Tarefa";
        this.notifyAlert();
    },
    notifyAlertUpDated() {
        this.type = "info";
        this.text = "A tarefa foi atualizada com sucesso!";
        this.title = "Atualização de Tarefa";
        this.notifyAlert();
    },
  },
})
