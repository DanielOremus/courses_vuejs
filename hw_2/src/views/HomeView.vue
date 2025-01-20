<template>
  <MainMasterPage>
    <h3>Homework 2 by DO</h3>
    <a @click="$router.push({ name: 'tasks' })">Tasks</a>
  </MainMasterPage>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "HomeView",
  components: {
    MainMasterPage,
  },
}
</script>

<style lang="css" scoped></style>
