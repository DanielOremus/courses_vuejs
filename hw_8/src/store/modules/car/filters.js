import { getObjKeysInCamelCase } from "@/store/helpers"
import endpoints from "../../../../endpoints"
export default {
  namespaced: true,
  state: () => ({
    loading: false,
    loadingError: null,
    typesList: [],
    brandsList: [],
    modelsList: [],
    bodyTypes: [],
    selectedFilters: {
      type: null,
      bodyType: [],
      brand: null,
      model: null,
      year: [null, null],
    },
  }),
  getters: {
    filterValues: ({ typesList, brandsList, modelsList, bodyTypes }) => ({
      typesList,
      brandsList,
      modelsList,
      bodyTypes,
    }),
    selectedFilters: ({ selectedFilters }) => selectedFilters,
    isLoading: ({ loading }) => loading,
    loadingError: ({ loadingError }) => loadingError,
    modelsListByBrandId: (state) => (id) =>
      state.modelsList.filter(({ brand }) => brand === id || brand === null),
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status
    },
    setLoadingError(state, err) {
      state.loadingError = err
    },
    setFilterValues(state, data) {
      for (const filterVal in data) {
        if (state[filterVal]) state[filterVal] = data[filterVal]
      }
    },
    setFilterPropValue(state, { name, value }) {
      state.selectedFilters[name] = value
    },
  },
  actions: {
    async fetchFilterValues({ commit }) {
      commit("setLoadingError", null)
      commit("setLoading", true)
      try {
        const response = await fetch(endpoints.cars.fetchFilterValues)
        if (!response.ok) {
          throw new Error("Error while fetching filter options")
        }
        const data = await response.json()
        const payload = getObjKeysInCamelCase(data)
        commit("setFilterValues", payload)
      } catch (error) {
        commit("setLoadingError", error)
      } finally {
        commit("setLoading", false)
      }
    },
    setFilterPropValue({ commit }, data) {
      commit("setFilterPropValue", data)
    },
  },
}
