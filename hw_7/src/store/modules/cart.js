import { getProductsListWithCurrencyPrice } from "../helpers"

export default {
  namespaced: true,
  state: () => ({
    productsList: [],
  }),
  getters: {
    productsList: ({ productsList }) => productsList,
    totalProductsPrice: (state, getters, rootState, rootGetters) => {
      const currency = rootGetters["currency/currentCurrency"]
      let currencyRate = currency ? currency.rate : 1
      const list = getProductsListWithCurrencyPrice(
        state.productsList,
        currencyRate
      )
      return list.reduce((acc, product) => acc + product.price, 0)
    },
  },
  mutations: {
    addProductToCart(state, product) {
      console.log(product)
      console.log(state.productsList)

      const isInCart = state.productsList.some(
        (prod) => prod._id === product._id
      )
      console.log(isInCart)

      if (!isInCart) state.productsList.push(product)
    },
    deleteProductFromCart(state, prodId) {
      const prodIndex = state.productsList.findIndex(
        (prod) => prod._id === prodId
      )
      if (prodIndex > 1) state.productsList.splice(prodIndex, 1)
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
