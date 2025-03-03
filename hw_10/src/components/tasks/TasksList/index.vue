<template>
  <div class="tasks-list">
    <task-card
      v-for="task in tasksList"
      :key="task.id"
      :task="task"
      :actions="{ canDelete, canEdit }"
      @task-edit="$emit('task-edit', $event)"
      @task-delete="$emit('task-delete', $event)"
    />
  </div>
</template>

<script>
import TaskCard from "./TaskCard.vue"
export default {
  name: "TasksList",
  components: {
    TaskCard,
  },
  emits: ["task-delete", "task-edit"],
  props: {
    tasksList: {
      type: Array,
      default: () => [],
    },
    canEdit: {
      type: Boolean,
      default: true,
    },
    canDelete: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/tasks/tasks_list.scss";
</style>
