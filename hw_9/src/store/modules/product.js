import endpoints from "../../../endpoints"
import { sleep } from "../helpers"

export default {
  namespaced: true,
  state: () => ({
    productsList: [],
    loading: false,
    loadingError: null,
  }),
  getters: {
    productsList: ({ productsList }) => productsList,
    getProductsByCategoryId:
      ({ productsList }) =>
      (id) =>
        productsList.filter((product) => product.category == id),
    isLoading: ({ loading }) => loading,
    loadingError: ({ loadingError }) => loadingError,
  },
  mutations: {
    setProductsList(state, list) {
      state.productsList = list
    },
    setLoading(state, status) {
      state.loading = status
    },
    setLoadingError(state, err) {
      state.loadingError = err
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setLoadingError", null)
      commit("setLoading", true)
      try {
        //Імітація затримки відповіді
        await sleep()
        const response = await fetch(endpoints.products.fetchAll)
        const products = await response.json()
        commit("setProductsList", products)
      } catch (error) {
        commit("setLoadingError", error)
      } finally {
        commit("setLoading", false)
      }
    },
  },
}
