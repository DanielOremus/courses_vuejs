<template>
  <div class="condition-container">
    Користувачу виводять змішані картки з словами на англійській і українській
    мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо
    знайдено правильні пари карток, що відповідають одному слову, то видаляємо
    ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо
    рамку.
  </div>
  <div class="main">
    <WordsList :words="words" display-lang="en" @select="onSelect($event, 0)" />
    <WordsList :words="words" display-lang="ua" @select="onSelect($event, 1)" />
  </div>
</template>

<script>
const words = [
  {
    id: 0,
    en: "table",
    ua: "стіл",
  },
  {
    id: 1,
    en: "car",
    ua: "авто",
  },
  {
    id: 2,
    en: "bus",
    ua: "автобус",
  },
  {
    id: 3,
    en: "man",
    ua: "чоловік",
  },
  {
    id: 4,
    en: "boy",
    ua: "хлопець",
  },
]
import WordsList from "./WordsList.vue"
export default {
  name: "Task1",
  components: {
    WordsList,
  },
  data() {
    return {
      selectedWords: [],
    }
  },
  methods: {
    onSelect(word, i) {
      this.selectedWords[i] = word
      console.log(this.selectedWords)
    },
  },
  computed: {
    words() {
      return words
    },
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
}
</style>
