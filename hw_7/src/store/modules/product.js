import endpoints from "../../../endpoints"
import { getProductsListWithConvertedPrice } from "../helpers"
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
    productsList: (state, getters, rootState, rootGetters) => {
      const currency = rootGetters["currency/currentCurrency"]
      if (!currency) return state.productsList
      return getProductsListWithConvertedPrice(
        state.productsList,
        currency.rate
      )
    },
    getProductById: (state) => (id) =>
      state.productsList.find((prod) => prod._id === id),
  },
  mutations: {
    setProp(state, { propName, v }) {
      state[propName] = v
    },
  },
  actions: {
    async fetchProducts({ commit, dispatch }) {
      dispatch("prepareBeforeFetch")
      try {
        const response = await fetch(endpoints.products.fetchAll)
        if (!response.ok)
          throw new Error("Error has occured while loading data")
        const resData = await response.json()
        const products = resData.products
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
    prepareBeforeFetch({ commit }) {
      commit("setProp", { propName: "loading", v: true })
      commit("setProp", { propName: "loadingError", v: null })
    },
  },
}
