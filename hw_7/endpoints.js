const API_BASE = import.meta.env.VITE_API_BASE
export default Object.freeze({
  products: {
    fetchAll: `${API_BASE}/products`,
  },
  currencies: {
    fetchAll: "../db/currencies.json",
  },
})
