<template>
  <div class="task">
    <p>
      {{ task.content }}
    </p>
    <div class="actions">
      <button
        v-if="actions.canEdit"
        class="action-btn edit-btn"
        @click="onEdit"
      >
        Редагувати
      </button>
      <button
        v-if="actions.canDelete"
        class="action-btn delete-btn"
        @click="onDelete"
      >
        Видалити
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  emits: ["task-delete", "task-edit"],
  props: {
    task: {
      type: Object,
      required: true,
    },
    actions: {
      type: Object,
      default: {
        canDelete: true,
        canEdit: true,
      },
    },
  },
  methods: {
    onDelete() {
      this.$emit("task-delete", this.task.id)
    },
    onEdit() {
      this.$emit("task-edit", this.task.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.task {
  font-size: 1.1rem;
  padding: 0.5em 1em;
  background-color: rgb(68, 68, 68);
  border-radius: 10px;
}
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
