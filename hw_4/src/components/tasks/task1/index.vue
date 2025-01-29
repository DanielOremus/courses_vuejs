<template>
  <div class="condition-container"></div>
  <div class="main">
    <comparisons-section :lists-arr="comparisonsLists"></comparisons-section>
    <last-seen-section :list-items="productsList"></last-seen-section>
  </div>
</template>

<script>
const comparisonsLists = [
  {
    title: "Мобільні телефони",
    items: [
      {
        title: "Apple iPhone 14",
        imgSrc: "https://content.rozetka.com.ua/goods/images/big/284957985.jpg",
      },
      {
        title: "Apple iPhone 15",
        imgSrc:
          "https://content1.rozetka.com.ua/goods/images/big/364623744.jpg",
      },
      {
        title: "Apple iPhone 16",
        imgSrc:
          "https://content2.rozetka.com.ua/goods/images/big/468886490.jpg",
      },
    ],
  },
]
const productsList = [
  {
    title: "Apple iPhone 14",
    imgSrc: "https://content.rozetka.com.ua/goods/images/big/284957985.jpg",
    isAvailable: true,
    price: 1200,
  },

  {
    title: "Apple iPhone 15",
    imgSrc: "https://content1.rozetka.com.ua/goods/images/big/364623744.jpg",
    isAvailable: false,
    price: 1400,
  },
]
import ComparisonsSection from "./ComparisonsSection/index.vue"
import LastSeenSection from "./LastSeenSection/index.vue"
export default {
  name: "Task1",
  components: {
    ComparisonsSection,
    LastSeenSection,
  },
  computed: {
    comparisonsLists() {
      return comparisonsLists
    },
    productsList() {
      return productsList
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
