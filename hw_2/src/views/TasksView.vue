<template>
  <MainMasterPage>
    <ul class="task-list">
      <li
        v-for="task in tasksList"
        :key="task.id"
        @click="onTaskClick(task.id)"
      >
        Task {{ task.id }}
      </li>
    </ul>
  </MainMasterPage>
</template>

<script>
import { mapGetters } from "vuex"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "TaskView",
  components: {
    MainMasterPage,
  },
  methods: {
    onTaskClick(taskId) {
      this.$router.push({ name: "task", params: { id: taskId } })
    },
  },
  computed: {
    ...mapGetters("task", ["tasksList"]),
  },
  mounted() {
    console.log(this.tasksList)
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
