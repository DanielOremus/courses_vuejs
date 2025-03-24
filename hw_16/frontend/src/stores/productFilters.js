import { defineStore } from "pinia"
import QueryFormulator from "./helpers/QueryFormulator"
export const useProductFilters = defineStore("productFilters", {
  state: () => ({
    filters: {
      name: null,
      price: [null, null],
      categories: [],
    },
  }),
  getters: {
    query: (state) =>
      QueryFormulator.getReqQueryObj({
        name: state.filters.name,
        price: state.filters.price,
        categories: state.filters.categories,
      }),
  },
  actions: {
    resetFilters() {
      this.filters = { name: null, price: [null, null], categories: [] }
    },
  },
})
