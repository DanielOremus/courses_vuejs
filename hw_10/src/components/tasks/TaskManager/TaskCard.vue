<template>
  <div class="task-card">
    <span>
      {{ task.content }}
    </span>
    <my-selector class="user-selector" v-model="selectedUser" :items="users" />
  </div>
</template>

<script>
import MySelector from "@/components/ui/MySelector.vue"
export default {
  name: "TaskCard",
  components: {
    MySelector,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedUser: this.task.responsible?.id,
    }
  },
  watch: {
    selectedUser(newValue) {
      this.$emit("responsible-update", {
        userId: newValue,
        taskId: this.task.id,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/tasks/task_manager_card.scss";
</style>
