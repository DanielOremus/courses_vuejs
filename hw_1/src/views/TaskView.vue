<template>
  <MainMasterPage>
    <component :is="currentTask"> </component>
  </MainMasterPage>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import { defineAsyncComponent } from "vue"
export default {
  name: "TaskView",
  components: {
    MainMasterPage,
  },

  computed: {
    currentTask() {
      return defineAsyncComponent(() =>
        import(`@/components/tasks/task${this.$route.params.id}.vue`)
      )
    },
  },
}
</script>

<style lang="css">
.condition-container {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.condition-todo {
  list-style-position: inside;
}
</style>
