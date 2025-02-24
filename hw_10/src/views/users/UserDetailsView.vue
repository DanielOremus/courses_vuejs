<template>
  <main-master-page>
    <div class="user-card">
      <loading-circle v-if="isLoading" />
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
    ...mapState(useUsersStore, ["currentItem", "isLoading", "responseError"]),
    userId() {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapActions(useUsersStore, ["fetchItemById"]),
    ...mapActions(useTasksStore, ["fetchTasksByUserId"]),
  },
  async created() {
    if (this.userId) {
      this.fetchItemById(this.userId)
      const userTasks = await this.fetchTasksByUserId(this.userId)
      console.log(userTasks)
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
  background-color: rgb(14, 14, 14);
  border-radius: 15px;
}
</style>
