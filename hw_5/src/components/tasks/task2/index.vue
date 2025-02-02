<template>
  <div class="condition-container">
    Створити список з товарами. Спробувати додати корзину з ними
  </div>
  <div class="main">
    <list-section
      :products-list="products"
      @add-to-cart="addProductToCart"
    ></list-section>
    <cart-section
      :products-cart-list="productsInCart"
      @amount-change="updateProductAmount"
      @remove-item="removeItemFromCart"
    ></cart-section>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: "HP Pavilion x360",
    oldPrice: 28000,
    price: 25000,
    imgSrc: "https://content.rozetka.com.ua/goods/images/big/438591816.jpg",
  },
  {
    id: 2,
    name: "Dell Inspiron 15",
    oldPrice: 32000,
    price: 29000,
    imgSrc: "https://content2.rozetka.com.ua/goods/images/big/508163498.jpg",
  },
  {
    id: 3,
    name: "Lenovo ThinkPad E14",
    oldPrice: 35000,
    price: 31500,
    imgSrc: "https://content2.rozetka.com.ua/goods/images/big/499201249.jpg",
  },
  {
    id: 4,
    name: "Acer Aspire 5",
    oldPrice: 31000,
    price: 28000,
    imgSrc: "https://content2.rozetka.com.ua/goods/images/big/362592851.jpg",
  },
  {
    id: 5,
    name: "Asus ZenBook 14",
    oldPrice: 37000,
    price: 34000,
    imgSrc: "https://content1.rozetka.com.ua/goods/images/big/438139998.png",
  },
]
import ListSection from "./ListSection/index.vue"
import CartSection from "./CartSection/index.vue"
export default {
  name: "Task2",
  components: {
    ListSection,
    CartSection,
  },
  data() {
    return {
      productsIdsInCart: [],
    }
  },
  computed: {
    products() {
      return products
    },
    productsInCart() {
      return this.productsIdsInCart.map((obj) => {
        const product = this.products.find((el) => el.id === obj.id)
        return { ...product, count: obj.count }
      })
    },
  },
  methods: {
    addProductToCart(productId) {
      const product = this.productsIdsInCart.find((obj) => obj.id === productId)
      if (product) product.count++
      else this.productsIdsInCart.push({ id: productId, count: 1 })
    },
    updateProductAmount(payload) {
      const product = this.productsIdsInCart.find(
        (obj) => obj.id === payload.productId
      )
      if (product) product.count += payload.value
    },
    removeItemFromCart(productId) {
      this.productsIdsInCart = this.productsIdsInCart.filter(
        (obj) => obj.id !== productId
      )
    },
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
