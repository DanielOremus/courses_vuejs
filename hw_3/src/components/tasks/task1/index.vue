<template>
  <div class="condition-container">
    Користувачу виводять змішані картки з словами на англійській і українській
    мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо
    знайдено правильні пари карток, що відповідають одному слову, то видаляємо
    ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо
    рамку.
  </div>
  <div class="main">
    <WordsList
      :words="words"
      display-lang="en"
      :selected-word-id="selectedWordsId[0]"
      :wrong-word-id="wrongWordsId[0]"
      @select="onSelect($event, 0)"
    />
    <WordsList
      :words="words"
      display-lang="ua"
      :selected-word-id="selectedWordsId[1]"
      :wrong-word-id="wrongWordsId[1]"
      @select="onSelect($event, 1)"
    />
  </div>
</template>

<script>
import WordsList from "./WordsList.vue"
export default {
  name: "Task1",
  components: {
    WordsList,
  },
  data() {
    return {
      selectedWordsId: [],
      wrongWordsId: [],
      words: [
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
      ],
    }
  },
  methods: {
    onSelect(wordId, i) {
      this.selectedWordsId[i] = wordId
      if (
        this.selectedWordsId.length !== 2 ||
        this.selectedWordsId.includes(undefined)
      )
        return
      const [firstId, secondId] = this.selectedWordsId
      if (firstId === secondId) {
        this.words = this.words.filter((w) => w.id !== firstId)
      } else {
        this.wrongWordsId = [firstId, secondId]
        setTimeout(() => {
          this.wrongWordsId = []
        }, 1000)
      }
      this.selectedWordsId = []
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
