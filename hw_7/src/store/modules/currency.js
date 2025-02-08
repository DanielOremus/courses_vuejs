import endpoints from "../../../endpoints"

export default {
  namespaced: true,
  state: () => ({
    currenciesList: [],
    loading: false,
    loadingError: null,
    currentCurrency: null,
  }),
  getters: {
    currenciesList: ({ currenciesList }) => currenciesList,
    isLoading: ({ loading }) => loading,
    loadingError: ({ loadingError }) => loadingError,
    currentCurrency: ({ currentCurrency }) => currentCurrency,
  },
  mutations: {
    setProp(state, { propName, v }) {
      state[propName] = v
    },
    setCurrenciesList(state, data) {
      state.currenciesList = data
    },
    setCurrentCurrency(state, currencyObj) {
      state.currentCurrency = currencyObj
    },
  },
  actions: {
    async fetchCurrencies({ commit, dispatch }) {
      dispatch("prepareBeforeFetch")
      try {
        const response = await fetch(endpoints.currencies.fetchAll)
        if (!response.ok)
          throw new Error("Error has occured while fetchind data")
        console.log(response)

        const currencies = await response.json()
        commit("setCurrenciesList", currencies)
      } catch (error) {
        commit("setProp", { propName: "loadingError", v: error })
      } finally {
        commit("setProp", { propName: "loading", v: false })
      }
    },
    setCurrentCurrency({ commit }, data) {
      commit("setCurrentCurrency", data)
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
