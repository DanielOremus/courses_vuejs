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
    getProductById:
      ({ productsList }) =>
      (id) =>
        productsList.find((product) => product.id == id),
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
    updateProductById(state, productData) {
      const prodIndex = state.productsList.findIndex(
        (prod) => prod.id == productData.id
      )
      state.productsList[prodIndex] = { ...productData }
    },
    createProduct(state, data) {
      state.productsList.push({ id: Date.now(), ...data })
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
    updateProductById({ commit }, data) {
      commit("updateProductById", data)
    },
    createProduct({ commit }, data) {
      commit("createProduct", data)
    },
  },
}
