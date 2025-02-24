import { defineStore } from "pinia"
import {
  state as generalState,
  getters,
  actions,
} from "./helpers/commonStoreTemplate"
export const useUsersStore = defineStore("users", {
  state: () => ({
    ...JSON.parse(JSON.stringify(generalState)),
    collectionName: "users",
  }),
  getters,
  actions,
})
