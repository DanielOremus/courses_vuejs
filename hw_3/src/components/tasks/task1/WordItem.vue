<template>
  <div class="word-item">
    <span>{{ word[displayLang] }}</span>
  </div>
</template>

<script>
export default {
  name: "WordItem",
  props: {
    word: {
      type: Object,
      required: true,
    },
    displayLang: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.word-item {
  min-width: 100px;
  text-align: center;
  border: 1px solid grey;
}
</style>
