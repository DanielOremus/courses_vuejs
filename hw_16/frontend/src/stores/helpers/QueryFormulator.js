class QueryFormulator {
  static getReqQueryObj(query) {
    return {
      name: query.name,
      price: QueryFormulator.getPriceQuery(query.price),
      category: query.categories?.join(","),
    }
  }
  static getPriceQuery(priceArr) {
    const [minPrice, maxPrice] = priceArr
    if (minPrice && maxPrice) return `${minPrice}-${maxPrice}`
    if (minPrice) return `gte:${minPrice}`
    if (maxPrice) return `lte:${maxPrice}`
    return null
  }
}

export default QueryFormulator
