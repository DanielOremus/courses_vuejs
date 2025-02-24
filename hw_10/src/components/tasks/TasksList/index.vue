<template>
  <div class="tasks-list">
    <task-card
      v-for="task in tasksList"
      :key="task.id"
      :task="task"
      :actions="{ canDelete, canEdit }"
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
.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
