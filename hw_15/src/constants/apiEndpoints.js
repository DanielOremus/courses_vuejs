import config from "@/config/default"

export default Object.freeze({
  products: {
    fetchAll: `${config.apiUri}/products`,
    fetchById: (id) => `${config.apiUri}/products/${id}`,
    create: `${config.apiUri}/products`,
    updateById: (id) => `${config.apiUri}/products/${id}`,
    deleteById: `${config.apiUri}/products`,
  },
  categories: {
    fetchAll: `${config.apiUri}/categories`,
  },
})
