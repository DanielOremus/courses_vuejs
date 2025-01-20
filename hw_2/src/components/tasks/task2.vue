<template>
  <div>
    <h2>Task {{ $route.params.id }}</h2>
    <div class="condition-container">
      Condition: Вводиться номер місяця. Автоматично виводити рекомендований
      одяг (зима – пальто, літо – шорти ….). Також автоматично виводити
      зображення з відповідним зображенням лісу (зима – ліс зі снігом, осінь –
      жовтий ліс, …).
    </div>
    <div class="main">
      <label
        >Month number:
        <input type="number" v-model.lazy="monthNumber" min="1" max="12" />
      </label>
      <span>Recommended clothing: {{ currentSeason.recommendedClothing }}</span>
      Forest Image: <img :src="currentSeason.forestImgSrc" width="400" />
    </div>
  </div>
</template>

<script>
const seasons = [
  {
    name: "Зима",
    months: [12, 1, 2],
    recommendedClothing: "Пальто",
    forestImgSrc:
      "https://images.stockcake.com/public/0/9/2/09259685-8109-49cf-b668-2b14cfe7dfa5_large/moonlit-winter-forest-stockcake.jpg",
  },
  {
    name: "Весна",
    months: [3, 4, 5],
    recommendedClothing: "Кросівки",
    forestImgSrc:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-spring-forest-with-sun-rays-and-first-flowers-free-photo.jpg?w=2210&quality=70",
  },
  {
    name: "Літо",
    months: [6, 7, 8],
    recommendedClothing: "Шорти",
    forestImgSrc:
      "https://i.pinimg.com/736x/2e/3f/ab/2e3fab2ed747fb0487c8eea502ec41f2.jpg",
  },
  {
    name: "Осінь",
    months: [9, 10, 11],
    recommendedClothing: "Дощовик",
    forestImgSrc:
      "https://images.stockcake.com/public/4/9/a/49a181d9-9c9f-410e-86bf-63f92513ad7f_large/autumn-forest-sunrise-stockcake.jpg",
  },
]
export default {
  name: "Task2",
  data() {
    return {
      monthNumber: 1,
    }
  },
  computed: {
    currentSeason() {
      return seasons.find((season) => season.months.includes(this.monthNumber))
    },
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
</style>
