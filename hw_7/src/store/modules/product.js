import endPoints from "../../../endpoints"

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    loadingError: null,
    productsList: [],
  }),
  getters: {
    isLoading: ({ loading }) => loading,
    loadingError: ({ loadingError }) => loadingError,
    productsList: ({ productsList }) => productsList,
  },
  mutations: {
    setProp(state, { propName, v }) {
      state[propName] = v
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setProp", { propName: "loading", v: true })
      try {
        const response = await fetch(endPoints.products.fetchAll)
        if (!response.ok) throw new Error("Error while fetching data")
        const products = await response.json()
        commit("setProp", { propName: "productsList", v: products })
      } catch (error) {
        commit("setProp", { propName: "loadingError", v: error })
      } finally {
        commit("setProp", { propName: "loading", v: false })
      }
    },
    setProp({ commit }, data) {
      commit("setProp", data)
    },
  },
}
