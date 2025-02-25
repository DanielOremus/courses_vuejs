import { defineStore } from "pinia"
import { sleep } from "./helpers"
import {
  state as generalState,
  getters,
  actions as generalActions,
} from "./helpers/commonStoreTemplate"
import CollectionManager from "./managers/localStorageDB"
export const useTasksStore = defineStore("tasks", {
  state: () => ({
    ...JSON.parse(JSON.stringify(generalState)),
    collectionName: "tasks",
  }),
  getters,
  actions: {
    ...generalActions,
    async fetchTasksByUserId(userId) {
      this.responseError = null
      this.isLoading = true
      try {
        await sleep()
        const tasks = CollectionManager.getItemsByFieldValue(
          this.collectionName,
          { fieldName: "responsible", fieldValue: userId }
        )
        console.log(tasks)

        return tasks
      } catch (error) {
        this.responseError = error
      } finally {
        this.isLoading = false
      }
    },
  },
})
