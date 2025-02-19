import endpoints from "../../../endpoints"
import { sleep } from "../helpers"

export default {
  namespaced: true,
  state: () => ({
    categoriesList: [],
    loading: false,
    loadingError: null,
  }),
  getters: {
    categoriesList: ({ categoriesList }) => categoriesList,
    isLoading: ({ loading }) => loading,
    loadingError: ({ loadingError }) => loadingError,
  },
  mutations: {
    setCategoriesList(state, list) {
      state.categoriesList = list
    },
    setLoading(state, status) {
      state.loading = status
    },
    setLoadingError(state, err) {
      state.loadingError = err
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      commit("setLoadingError", null)
      commit("setLoading", true)
      try {
        //Імітація затримки відповіді
        await sleep()
        const response = await fetch(endpoints.categories.fetchAll)
        const categories = await response.json()
        commit("setCategoriesList", categories)
      } catch (error) {
        commit("setLoadingError", error)
      } finally {
        commit("setLoading", false)
      }
    },
  },
}
