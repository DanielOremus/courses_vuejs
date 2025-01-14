<template>
  <MainMasterPage>
    <ul class="task-list">
      <li
        v-for="i in 5"
        :key="i"
        @click="$router.push({ name: 'task', params: { id: i } })"
      >
        Task {{ i }}
      </li>
    </ul>
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

<style lang="css" scoped>
.task-list {
  font-size: 1.2rem;
  width: fit-content;
  list-style-position: inside;
}
.task-list > li {
  cursor: pointer;
  transition: color 0.1s ease;
  &:hover {
    color: hsla(160, 100%, 37%, 1);
  }
}
</style>
