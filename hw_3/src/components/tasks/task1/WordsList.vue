<template>
  <table class="words-list">
    <tr v-for="word in getShuffledWords(words)" :key="word.id">
      <td>
        <word-item
          :word="word"
          :display-lang="displayLang"
          @click="onWordSelect(word)"
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
    displayLang: {
      type: String,
      required: true,
    },
  },

  methods: {
    getShuffledWords(words) {
      const resArr = [...words]
      for (let i = words.length - 1; i > 0; i--) {
        const randIndex = Math.floor(Math.random() * (i + 1))
        ;[resArr[i], resArr[randIndex]] = [resArr[randIndex], resArr[i]]
      }
      return resArr
    },
    onWordSelect(word) {
      this.$emit("select", word)
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
