<template>
  <div class="condition-container">Реалізувати список з ягодами</div>
  <div class="main">
    <berries-list :berries-list="berriesList"></berries-list>
  </div>
</template>

<script>
const berriesList = [
  {
    id: "1",
    name: "Малина свіжа на вагу",
    shopName: "Флоріум",
    isAvailable: true,
    imgSrc: "https://img.7dach.ru/image/600/17/79/71/2017/04/21/3c4d32.jpg",
  },
  {
    id: "2",
    name: "Малина великоплідна",
    shopName: "FOZZY",
    isAvailable: false,
    imgSrc:
      "https://cdn-img.perekrestok.ru/i/400x400-fit/xdelivery/files/6d/f6/27d1c1d1f14c35a31a4527a551b1.jpg",
  },
  {
    id: "3",
    name: "Ожина",
    shopName: "Ягідна Мрія",
    isAvailable: true,
    imgSrc:
      "https://soncesad.com/assets/images/products/14727/ozhina-svit-paj2.jpg",
  },
]
import BerriesList from "./BerriesList/index.vue"
export default {
  name: "Task1",
  components: {
    BerriesList,
  },
  computed: {
    berriesList() {
      return berriesList
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
