<template>
  <main-master-page>
    <loading-overlay v-if="fetchLoading" />
    <div class="task-form-wrapper">
      <h1 class="form-title">
        {{ formTitle }}
      </h1>
      <task-edit-form
        :action-loading="actionLoading"
        :task-init-data="currentItem"
        @edit-cancel="onEditCancel"
        @edit-save="onEditSave"
      />
    </div>
  </main-master-page>
</template>

<script>
import { useTasksStore } from "@/stores/tasks"
import { mapState, mapActions } from "pinia"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import LoadingOverlay from "@/components/general/LoadingOverlay.vue"
import TaskEditForm from "@/components/tasks/TaskEditForm.vue"
export default {
  name: "TaskEditView",
  components: {
    TaskEditForm,
    MainMasterPage,
    LoadingOverlay,
  },
  computed: {
    ...mapState(useTasksStore, [
      "actionLoading",
      "fetchLoading",
      "currentItem",
      "responseError",
    ]),
    taskId() {
      return this.$route.params.id
    },
    formTitle() {
      return this.taskId ? "Редагування" : "Створення"
    },
  },
  methods: {
    ...mapActions(useTasksStore, [
      "fetchItemById",
      "updateItemById",
      "addItem",
    ]),
    onEditCancel() {
      this.$router.push({ name: "tasks" })
    },
    async onEditSave(task) {
      if (task.id) await this.updateItemById(task)
      else await this.addItem(task)
      if (this.responseError) alert(this.responseError)
      else this.$router.push({ name: "tasks" })
    },
  },
  mounted() {
    if (this.taskId) this.fetchItemById(this.taskId)
  },
  beforeRouteLeave() {
    if (this.taskId) {
      const tasksStore = useTasksStore()
      tasksStore.clearCurrentItem()
    }
  },
}
</script>

<style lang="scss" scoped>
.task-form-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  min-width: 40rem;
  padding: 2rem;
  background-color: var(--card-background);
  border-radius: 15px;
}
.form-title {
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
