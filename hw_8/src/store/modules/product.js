import endpoints from "../../../endpoints"

export default {
  namespaced: true,
  state: () => ({
    productsList: [],
    loading: false,
    loadingError: null,
  }),
  getters: {
    productsList: ({ productsList }) => productsList,
    isLoading: ({ loading }) => loading,
    loadingError: ({ loadingError }) => loadingError,
  },
  mutations: {
    setPropValue(state, { name, value }) {
      state[name] = value
    },
    //Для читабельності
    setProductsList(state, products) {
      state.productsList = products
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setPropValue", { name: "loadingError", value: null })
      commit("setPropValue", { name: "loading", value: true })
      try {
        const response = await fetch(endpoints.products)
        if (!response.ok) throw new Error("Error while fetching products")
        const products = await response.json()
        commit("setProductsList", products)
      } catch (error) {
        commit("setPropValue", { name: "loadingError", value: error })
      } finally {
        commit("setPropValue", { name: "loading", value: false })
      }
    },
  },
}
