export const getCurrencyPrice = (price, rate) => {
  return price / rate
}
export const getProductsListWithCurrencyPrice = (list, rate) => {
  return list.map((product) => ({
    ...product,
    price: getCurrencyPrice(product.price, rate),
  }))
}
