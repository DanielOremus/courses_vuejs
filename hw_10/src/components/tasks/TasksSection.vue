<template>
  <div class="tasks-list-wrapper">
    <h1 class="list-title">Завдання</h1>
    <tasks-list :tasks-list="itemsList" />
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useTasksStore } from "@/stores/tasks"
import TasksList from "./TasksList/index.vue"
export default {
  name: "TasksSection",
  components: {
    TasksList,
  },
  computed: {
    ...mapState(useTasksStore, ["itemsList"]),
  },
  methods: {
    ...mapActions(useTasksStore, ["fetchItems"]),
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
</style>
