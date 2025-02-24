<template>
  <div class="task">
    <p>
      {{ task.content }}
    </p>
    <div class="actions">
      <button v-if="actions.canEdit" class="action-btn edit-btn">
        Редагувати
      </button>
      <button v-if="actions.canDelete" class="action-btn delete-btn">
        Видалити
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
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
}
</style>
