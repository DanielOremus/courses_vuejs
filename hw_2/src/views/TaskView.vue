<template>
  <MainMasterPage>
    <ul class="task-list">
      <li
        v-for="task in tasksList"
        :key="task.id"
        @click="
          $router.push({
            name: 'task',
            params: { id: task.id },
            state: { task },
          })
        "
      >
        Task {{ task.id }}
      </li>
    </ul>
  </MainMasterPage>
</template>

<script>
const tasks = [
  {
    id: "1",
    component: () => import("@/components/tasks/task1.vue"),
  },
]
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "TaskView",
  components: {
    MainMasterPage,
  },
  computed: {
    tasksList() {
      return tasks
    },
  },
}
</script>

<style lang="css">
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
