<template>
  <main-master-page :render-loading-overlay="fetchLoading || actionLoading">
    <div class="user-card">
      <h1 class="user-card__title">Користувач</h1>

      <h2>Ім'я: {{ currentItem?.name }}</h2>
      <h2>Рік народження: {{ currentItem?.yearOfBirth }}</h2>
      <div>
        <h2>Завдання:</h2>
        <span v-if="!userTasks.length">Завдань нема :(</span>
        <tasks-list
          v-else
          class="tasks-list"
          :tasks-list="userTasks"
          :can-edit="false"
          @task-delete="onTaskDeattach"
        />
      </div>
    </div>
  </main-master-page>
</template>

<script>
import { useUsersStore } from "@/stores/users"
import { useTasksStore } from "@/stores/tasks"
import { mapActions, mapState } from "pinia"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import TasksList from "@/components/tasks/TasksList/index.vue"
import LoadingCircle from "@/components/general/LoadingCircle.vue"
export default {
  name: "UserDetailsView",
  components: {
    MainMasterPage,
    TasksList,
    LoadingCircle,
  },
  computed: {
    ...mapState(useUsersStore, [
      "currentItem",
      "fetchLoading",
      "responseError",
    ]),
    ...mapState(useTasksStore, ["responseError", "actionLoading", "userTasks"]),
    userId() {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapActions(useUsersStore, ["fetchItemById", "clearCurrentItem"]),
    ...mapActions(useTasksStore, [
      "fetchTasksByUserId",
      "updateItemById",
      "deattachTaskResponsible",
    ]),
    onTaskDeattach(taskId) {
      this.updateItemById({ id: taskId, responsible: null })
      this.deattachTaskResponsible(taskId)
    },
  },
  mounted() {
    if (this.userId) {
      this.fetchItemById(this.userId)
      this.fetchTasksByUserId(this.userId)
    }
  },
  beforeRouteLeave() {
    const usersStore = useUsersStore()
    const tasksStore = useTasksStore()
    usersStore.clearCurrentItem()
    tasksStore.clearUserTasks()
  },
}
</script>

<style lang="scss" scoped>
.tasks-list {
  margin-top: 1rem;
}
.user-card {
  position: absolute;
  top: 30%;
  left: 50%;
  translate: -50%;
  min-width: 600px;
  padding: 3rem;
  padding-top: 2rem;
  background-color: var(--card-background);
  border-radius: 15px;
}
.user-card__title {
  margin-bottom: 1rem;
  text-align: center;
}
</style>
