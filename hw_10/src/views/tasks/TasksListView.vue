<template>
  <main-master-page>
    <loading-overlay v-if="actionLoading" />
    <tasks-section />
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import TasksSection from "@/components/tasks/TasksSection.vue"
import LoadingOverlay from "@/components/general/LoadingOverlay.vue"
import { useTasksStore } from "@/stores/tasks"
import { mapState } from "pinia"
export default {
  name: "TasksListView",
  components: {
    TasksSection,
    MainMasterPage,
    LoadingOverlay,
  },
  computed: {
    ...mapState(useTasksStore, ["actionLoading"]),
  },
}
</script>

<style lang="scss" scoped></style>
