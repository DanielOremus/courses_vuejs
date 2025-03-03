<template>
  <main-master-page :render-loading-overlay="actionLoading">
    <div class="task-manager-wrapper">
      <task-manager />
    </div>
  </main-master-page>
</template>

<script>
import TaskManager from "@/components/tasks/TaskManager/index.vue"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import { mapState } from "pinia"
import { useTasksStore } from "@/stores/tasks"
export default {
  name: "TaskManagerView",
  components: {
    MainMasterPage,
    TaskManager,
  },
  computed: {
    ...mapState(useTasksStore, ["actionLoading"]),
  },
}
</script>

<style lang="scss" scoped>
.task-manager-wrapper {
  position: absolute;
  min-width: 700px;
  text-align: center;
  top: 20%;
  left: 50%;
  translate: -50%;
}
</style>
