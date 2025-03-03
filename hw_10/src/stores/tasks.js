import { defineStore } from "pinia"
import { sleep } from "./helpers"
import {
  state as generalState,
  getters as generalGetters,
  actions as generalActions,
} from "./helpers/commonStoreTemplate"
import CollectionManager from "./managers/localStorageDB"
import { useUsersStore } from "./users"
export const useTasksStore = defineStore("tasks", {
  state: () => ({
    ...JSON.parse(JSON.stringify(generalState)),
    collectionName: "tasks",
    userTasks: [],
  }),
  getters: {
    ...generalGetters,
    populatedItemsList: (state) => {
      const usersStore = useUsersStore()
      const users = {}
      for (const user of usersStore.itemsList) {
        users[user.id] = { ...user }
      }
      return state.itemsList.map((item) => ({
        ...item,
        responsible: users[item.responsible] ?? null,
      }))
    },
  },

  actions: {
    ...generalActions,
    async fetchTasksByUserId(userId) {
      this.responseError = null
      this.fetchLoading = true
      try {
        await sleep()
        const tasks = CollectionManager.getItemsByFieldValue(
          this.collectionName,
          { fieldName: "responsible", fieldValue: userId }
        )
        this.userTasks = tasks
        return tasks
      } catch (error) {
        this.responseError = error
      } finally {
        this.fetchLoading = false
      }
    },
    async deattachTaskResponsible(taskId) {
      this.responseError = null
      this.actionLoading = true
      try {
        await sleep()
        CollectionManager.updateItem(this.collectionName, {
          id: taskId,
          responsible: null,
        })
        this.userTasks = this.userTasks.filter((task) => task.id !== taskId)
      } catch (error) {
        this.responseError = error
      } finally {
        this.actionLoading = false
      }
    },
    async clearTasksResponsible(responsibleId) {
      this.responseError = null
      this.actionLoading = true
      try {
        await sleep(500)
        CollectionManager.updateManyItems(
          this.collectionName,
          {
            fieldName: "responsible",
            fieldValue: responsibleId,
          },
          { responsible: null }
        )
        this.userTasks = this.userTasks.filter(
          (task) => task.responsible !== responsibleId
        )
      } catch (error) {
        this.responseError = error
      } finally {
        this.actionLoading = false
      }
    },
    clearUserTasks() {
      this.userTasks = []
    },
  },
})
