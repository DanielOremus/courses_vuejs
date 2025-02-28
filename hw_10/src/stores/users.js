import { defineStore } from "pinia"
import { useTasksStore } from "./tasks"
import { sleep } from "./helpers"
import CollectionManager from "./managers/localStorageDB"
import {
  state as generalState,
  getters,
  actions as globalActions,
} from "./helpers/commonStoreTemplate"
export const useUsersStore = defineStore("users", {
  state: () => ({
    ...JSON.parse(JSON.stringify(generalState)),
    collectionName: "users",
  }),
  getters,
  actions: {
    ...globalActions,
    async deleteItemById(id) {
      const tasksStore = useTasksStore()
      this.responseError = null
      this.actionLoading = true
      try {
        await sleep()
        await tasksStore.clearTasksResponsible(id)
        CollectionManager.deleteItem(this.collectionName, id)
        this.itemsList = this.itemsList.filter((item) => item.id !== id)
      } catch (error) {
        this.responseError = error
      } finally {
        this.actionLoading = false
      }
    },
  },
})
