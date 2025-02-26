<template>
  <main-master-page>
    <div class="user-card">
      <h1 class="user-card__title">Користувач</h1>
      <loading-circle v-if="fetchLoading" />
      <div v-else-if="responseError">{{ responseError }}</div>
      <template v-else>
        <h2>Ім'я: {{ currentItem?.name }}</h2>
        <h2>Рік народження: {{ currentItem?.yearOfBirth }}</h2>
        <div>
          <h2>Завдання:</h2>
          <span v-if="!userTasks.length">Завдань нема :(</span>
          <tasks-list
            v-else
            :tasks-list="userTasks"
            :can-edit="false"
            class="tasks-list"
          />
        </div>
      </template>
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
  data() {
    return {
      userTasks: [],
    }
  },
  computed: {
    ...mapState(useUsersStore, [
      "currentItem",
      "fetchLoading",
      "responseError",
    ]),
    userId() {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapActions(useUsersStore, ["fetchItemById"]),
    ...mapActions(useTasksStore, ["fetchTasksByUserId"]),
  },
  async mounted() {
    if (this.userId) {
      this.fetchItemById(this.userId)
      this.userTasks = await this.fetchTasksByUserId(this.userId)
    }
  },
}
</script>

<style lang="scss" scoped>
.tasks-list {
  margin-top: 1rem;
}
.user-card {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
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
