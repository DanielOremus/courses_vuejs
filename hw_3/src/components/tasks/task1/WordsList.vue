<template>
  <table class="words-list">
    <tr v-for="word in shuffledWords" :key="word.id">
      <td>
        <word-item
          :word="word"
          :display-lang="displayLang"
          :is-selected="isWordSelected(word.id)"
          :is-wrong="isWordWrong(word.id)"
          @click="onWordSelect(word.id)"
        />
      </td>
    </tr>
  </table>
</template>

<script>
import WordItem from "./WordItem.vue"
export default {
  name: "WordsList",
  components: {
    WordItem,
  },
  props: {
    words: {
      type: Array,
      required: true,
    },
    selectedWordId: {
      type: [Number, String],
      default: null,
    },
    displayLang: {
      type: String,
      required: true,
    },
    wrongWordId: {
      type: [Number, String],
      default: null,
    },
  },

  methods: {
    onWordSelect(wordId) {
      this.$emit("select", wordId)
    },
    isWordSelected(currentWordId) {
      return this.selectedWordId === currentWordId
    },
    isWordWrong(currentWordId) {
      return this.wrongWordId === currentWordId
    },
    shuffleArray(arr) {
      const resArr = [...arr]
      for (let i = arr.length - 1; i > 0; i--) {
        const randIndex = Math.floor(Math.random() * (i + 1))
        ;[resArr[i], resArr[randIndex]] = [resArr[randIndex], resArr[i]]
      }
      return resArr
    },
  },
  computed: {
    shuffledWords() {
      return this.shuffleArray(this.words)
    },
  },
}
</script>

<style lang="css" scoped>
.words-list {
  border: 1px solid gray;
  padding: 0.5rem;
  margin-right: 1rem;
}
</style>
