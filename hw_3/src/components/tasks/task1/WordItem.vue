<template>
  <div class="word-item" :class="{ [selected]: !isWrong, wrong: isWrong }">
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
    isSelected: {
      type: Boolean,
      default: false,
    },
    isWrong: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selected() {
      return this.isSelected ? "selected" : "not-selected"
    },
  },
}
</script>

<style lang="css" scoped>
.word-item {
  min-width: 100px;
  text-align: center;
  cursor: pointer;
}
.selected {
  border: 1px solid rgb(0, 119, 255);
}
.not-selected {
  border: 1px solid grey;
}
.wrong {
  border: 1px solid red;
}
</style>
