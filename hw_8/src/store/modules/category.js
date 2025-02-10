import endpoints from "../../../endpoints"

export default {
  namespaced: true,
  state: () => ({
    categoriesList: [],
    selectedCategoryId: null,
    loading: false,
    loadingError: null,
  }),
  getters: {
    categoriesList: ({ categoriesList }) => categoriesList,
    selectedCategory: (state) =>
      state.categoriesList.find((el) => el.id === state.selectedCategoryId),
    isLoading: ({ loading }) => loading,
    loadingError: ({ loadingError }) => loadingError,
  },
  mutations: {
    setPropValue(state, { name, value }) {
      state[name] = value
    },
    //Для читабельності
    setCategoriesList(state, categories) {
      state.categoriesList = categories
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      commit("setPropValue", { name: "loadingError", value: null })
      commit("setPropValue", { name: "loading", value: true })
      try {
        const response = await fetch(endpoints.categories.fetchAll)
        if (!response.ok) throw new Error("Error while fetching categories")
        const categories = await response.json()
        commit("setCategoriesList", categories)
      } catch (error) {
        commit("setPropValue", { name: "loadingError", value: error })
      } finally {
        commit("setPropValue", { name: "loading", value: false })
      }
    },
  },
}
