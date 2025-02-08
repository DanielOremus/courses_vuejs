import { getProductsListWithConvertedPrice } from "../helpers"

export default {
  namespaced: true,
  state: () => ({
    cartItems: [],
  }),
  getters: {
    cartItems: (state, getters, rootState, rootGetters) => {
      const currency = rootGetters["currency/currentCurrency"]
      if (!currency) return state.cartItems
      return getProductsListWithConvertedPrice(state.cartItems, currency.rate)
    },
    totalItemsPrice: (state, getters) => {
      return getters["cartItems"].reduce((acc, item) => acc + item.price, 0)
    },
  },
  mutations: {
    addProductToCart(state, product) {
      const isInCart = state.cartItems.some((item) => item._id === product._id)
      if (!isInCart) state.cartItems.push(product)
    },
    deleteProductFromCart(state, prodId) {
      const prodIndex = state.cartItems.findIndex((item) => item._id === prodId)
      if (prodIndex > -1) state.cartItems.splice(prodIndex, 1)
    },
  },
  actions: {
    addToCart({ commit }, productObj) {
      commit("addProductToCart", productObj)
    },
    deleteFromCart({ commit }, productId) {
      commit("deleteProductFromCart", productId)
    },
  },
}
