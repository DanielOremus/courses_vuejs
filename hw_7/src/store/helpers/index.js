export const convertPrice = (price, rate) => {
  return price / rate
}
export const getProductsListWithConvertedPrice = (list, rate) => {
  return list.map((product) => ({
    ...product,
    price: convertPrice(product.price, rate),
  }))
}
