import apiEndpoints from "@/constants/apiEndpoints"
import api from "@/config/axios"
import { defineStore } from "pinia"

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categoriesList: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchAllCategories() {
      this.loading = true
      this.error = null
      try {
        const response = await api.get(apiEndpoints.categories.fetchAll)
        const resData = response.data
        this.categoriesList = resData.data.categories
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
