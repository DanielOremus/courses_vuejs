<template>
  <main-master-page :render-loading-overlay="actionLoading">
    <tasks-list-section />
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import TasksListSection from "@/components/tasks/TasksListSection.vue"
import { useTasksStore } from "@/stores/tasks"
import { mapState } from "pinia"
export default {
  name: "TasksListView",
  components: {
    TasksListSection,
    MainMasterPage,
  },
  computed: {
    ...mapState(useTasksStore, ["actionLoading"]),
  },
}
</script>

<style lang="scss" scoped></style>
