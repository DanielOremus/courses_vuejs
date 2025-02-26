<template>
  <main-master-page>
    <tasks-section />
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import TasksSection from "@/components/tasks/TasksSection.vue"
export default {
  name: "TasksListView",
  components: {
    TasksSection,
    MainMasterPage,
  },
}
</script>

<style lang="scss" scoped></style>
