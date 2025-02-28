<template>
  <form class="task-form" @submit.prevent="onSubmit">
    <label class="label">
      Контент:
      <my-textarea v-model="task.content" />
    </label>

    <div class="actions-container">
      <button class="action-btn cancel-btn" @click="onCancel">Відміна</button>
      <button class="action-btn save-btn" @click="onSave">
        <loading-circle v-if="actionLoading" />
        <span v-else>
          {{ btnTitle }}
        </span>
      </button>
    </div>
  </form>
</template>

<script>
import MyTextarea from "../ui/MyTextarea.vue"
import LoadingCircle from "../general/LoadingCircle.vue"
export default {
  name: "TaskEditForm",
  components: {
    MyTextarea,
    LoadingCircle,
  },
  props: {
    taskInitData: {
      type: Object,
      default: null,
    },
    actionLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      task: {
        content: " ",
      },
    }
  },
  computed: {
    btnTitle() {
      return this.taskInitData ? "Зберегти" : "Створити"
    },
  },
  watch: {
    taskInitData(newValue) {
      this.task = { ...newValue }
    },
  },
  methods: {
    onCancel() {
      this.$emit("edit-cancel")
    },
    onSave() {
      this.$emit("edit-save", this.task)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/tasks/task_form.scss";
</style>
