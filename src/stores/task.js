// Utilities
import { defineStore } from "pinia";
import { useAlertStore } from "@/stores/alert";
const alertStore = useAlertStore();

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    titleTaskCreating: "",
    showDialogDelete: false,
    showDialogTaskFields: false,
    indexTaskSelected: 0,
    settingsSelection: [],
  }),
  actions: {
    addTask() {
        if(this.titleTaskCreating.length < 4) return;
        this.tasks.push({ title: this.titleTaskCreating });
        this.titleTaskCreating;
        this.saveLocalData();
        alertStore.notifyAlertCreated();
        done: false;
    },
    toggleDelete(index) {
        this.showDialogDelete = !this.showDialogDelete;
        if (index != null) this.indexTaskSelected = index;
    },
    deleteTask() {
        this.tasks.splice(this.indexTaskSelected, 1);
        this.toggleDelete();
        this.saveLocalData();
        alertStore.notifyAlertDeleted();
    },
    updateTask() {
        this.saveLocalData();
        this.toggleEdit();
        alertStore.notifyAlertUpDated();
    },
    toggleEdit(index) {
        this.showDialogTaskFields = !this.showDialogTaskFields;
        if (index != null) this.indexTaskSelected = index;        
    },
    saveLocalData() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    getTasks() {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        } else {
            this.saveLocalData();
        }
    },
    toggleDoneTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocalData();
        }
    }
  },
});
