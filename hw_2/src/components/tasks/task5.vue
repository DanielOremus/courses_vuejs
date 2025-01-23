<template>
  <div class="condition-container">
    Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого
    (дані не обов’язково повинні співпадати)
  </div>
  <div class="main">
    <list-item
      v-for="(item, i) in searchResults"
      :key="i"
      :item="item"
    ></list-item>
  </div>
</template>

<script>
const searchResults = [
  {
    title: "Tutorial",
    site: "Vue.js",
    url: "https://vuejs.org",
    description:
      "Welcome to the Vue tutorial! The goal of this tutorial is to quickly give you an experience of what it feels like to work with Vue, right in the browser.",
  },
  {
    title: "Getting started with Vue - Learn web development | MDN",
    site: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description:
      "In this article we'll look at a little bit of Vue background, learn how to install it and create a new project, study the high-level structure of the whole...",
  },
  {
    title: "Vue Tutorial",
    site: "W3Schools",
    url: "https://www.w3schools.com",
    description:
      "This tutorial is specially designed to help you learn Vue as quickly and efficiently as possible. First, you will learn the basics of Vue.",
  },
  {
    title: "Introduction — Vue.js",
    site: "Vue.js",
    url: "https://v2.vuejs.org",
    description:
      "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best...",
  },
]
import ListItem from "../ListItem.vue"
export default {
  name: "Task5",
  components: {
    ListItem,
  },
  computed: {
    searchResults() {
      return searchResults
    },
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
