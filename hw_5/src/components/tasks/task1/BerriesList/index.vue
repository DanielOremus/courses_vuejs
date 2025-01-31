<template>
  <div class="berries-container">
    <berry-card
      v-for="berry in berriesList"
      :key="berry.id"
      :berry="berry"
    ></berry-card>
  </div>
</template>

<script>
import BerryCard from "./BerryCard.vue"
export default {
  name: "BerryList",
  components: {
    BerryCard,
  },
  props: {
    berriesList: {
      type: Array,
      default: () => [
        {
          id: "1",
          name: "Малина звичайна",
          shopName: "Флоріум",
          isAvailable: true,
          imgSrc:
            "https://img.7dach.ru/image/600/17/79/71/2017/04/21/3c4d32.jpg",
        },
        {
          id: "2    ",
          name: "Малина1111",
          shopName: "FOZZY",
          isAvailable: false,
          imgSrc:
            "https://img.7dach.ru/image/600/17/79/71/2017/04/21/3c4d32.jpg",
        },
      ],
    },
  },
}
</script>

<style lang="css" scoped>
.berries-container {
  display: flex;
  gap: 1.5rem;
}
</style>
