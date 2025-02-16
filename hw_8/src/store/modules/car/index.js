import { sleep } from "@/store/helpers/index"
import { getFilteredCarsList, getPopulatedCarsList } from "@/store/helpers/cars"
import endpoints from "../../../../endpoints"

export default {
  namespaced: true,
  state: () => ({
    carsList: [],
    loading: false,
    loadingError: null,
  }),
  getters: {
    carsList: (state, getters, rootState, rootGetters) => {
      const filterValues = rootGetters["carFilters/filterValues"]
      return getPopulatedCarsList(state.carsList, filterValues)
    },
    filteredCarsList: (state, getters, rootState, rootGetters) => {
      const selectedFilters = rootGetters["carFilters/selectedFilters"]
      const filterValues = rootGetters["carFilters/filterValues"]
      const cars = getFilteredCarsList(state.carsList, selectedFilters)
      return getPopulatedCarsList(cars, filterValues)
    },
    isLoading: ({ loading }) => loading,
    loadingError: ({ loadingError }) => loadingError,
  },
  mutations: {
    setLoadingError(state, err) {
      state.loadingError = err
    },
    setLoading(state, status) {
      state.loading = status
    },
    setCarsList(state, list) {
      state.carsList = list
    },
  },
  actions: {
    async fetchCars({ commit }) {
      commit("setLoadingError", null)
      commit("setLoading", true)
      try {
        //Імітація затримки
        await sleep()
        const response = await fetch(endpoints.cars.fetchAll)
        const cars = await response.json()
        commit("setCarsList", cars)
      } catch (error) {
        commit("setLoadingError", error)
      } finally {
        commit("setLoading", false)
      }
    },
  },
}
