<template>
  <div class="tasks-list-wrapper">
    <h1 class="list-title">Поточні завдання</h1>
    <loading-circle v-if="fetchLoading" />
    <div v-else-if="responseError">{{ responseError }}</div>
    <span v-else-if="!itemsList.length" class="no-tasks-caption"
      >Нема завдань :(</span
    >
    <tasks-list
      v-else
      :tasks-list="itemsList"
      @task-edit="onTaskEdit"
      @task-delete="onTaskDelete"
    />
    <div class="new-task-caption">
      <router-link :to="{ name: 'taskEdit' }"
        >Створити нове завдання</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useTasksStore } from "@/stores/tasks"
import TasksList from "./TasksList/index.vue"
import LoadingCircle from "../general/LoadingCircle.vue"
export default {
  name: "TasksListSection",
  components: {
    TasksList,
    LoadingCircle,
  },
  computed: {
    ...mapState(useTasksStore, ["itemsList", "fetchLoading", "responseError"]),
  },
  methods: {
    ...mapActions(useTasksStore, ["fetchItems", "deleteItemById"]),
    onTaskEdit(taskId) {
      this.$router.push({ name: "taskEdit", params: { id: taskId } })
    },
    onTaskDelete(taskId) {
      this.deleteItemById(taskId)
    },
  },
  mounted() {
    this.fetchItems()
  },
}
</script>

<style lang="scss" scoped>
.tasks-list-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 600px;
  padding: 2rem;
  padding-top: 1rem;
  background-color: var(--card-background);
  border-radius: 10px;
}
.list-title {
  text-align: center;
  margin-bottom: 2rem;
}
.new-task-caption {
  margin-top: 0.2rem;
  font-size: 1.1rem;
}
.no-tasks-caption {
  font-size: 1.1rem;
}
</style>
