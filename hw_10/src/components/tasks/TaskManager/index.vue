<template>
  <div class="task-manager">
    <h1 class="task-manager__title">Розподілювач завдань</h1>
    <div>
      <loading-circle v-if="taskFetchLoading || usersFetchLoading" />
      <div v-else-if="responseError" class="error-caption">
        {{ responseError }}
      </div>
      <div v-else class="task-manager__list">
        <div v-if="!populatedTasksList.length" class="no-tasks-caption">
          Створіть завдання, щоб призначити відповідального
        </div>
        <template v-else>
          <task-card
            v-for="task in populatedTasksList"
            :id="task.id"
            :task="task"
            :users="usersList"
            @responsible-update="onResponsibleUpdate"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingCircle from "@/components/general/LoadingCircle.vue"
import { useTasksStore } from "@/stores/tasks"
import { mapState, mapActions } from "pinia"
import TaskCard from "./TaskCard.vue"
import { useUsersStore } from "@/stores/users"
export default {
  name: "TaskManager",
  components: {
    TaskCard,
    LoadingCircle,
  },
  computed: {
    ...mapState(useTasksStore, {
      populatedTasksList: "populatedItemsList",
      taskFetchLoading: "fetchLoading",
      tasksError: "responseError",
    }),
    ...mapState(useUsersStore, {
      users: "itemsList",
      usersFetchLoading: "fetchLoading",
      usersError: "responseError",
    }),
    responseError() {
      return this.tasksError || this.usersError
    },
    usersList() {
      return [{ id: null, name: "Не обрано" }, ...this.users]
    },
  },

  methods: {
    ...mapActions(useTasksStore, {
      fetchTasks: "fetchItems",
      updateTask: "updateItemById",
    }),
    ...mapActions(useUsersStore, { fetchUsers: "fetchItems" }),
    onResponsibleUpdate({ taskId, userId }) {
      this.updateTask({ id: taskId, responsible: userId })
    },
  },
  mounted() {
    this.fetchTasks()
    this.fetchUsers()
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/tasks/task_manager.scss";
</style>
