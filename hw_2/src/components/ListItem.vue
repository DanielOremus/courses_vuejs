<template>
  <div class="item">
    <div>
      <h4>{{ item.site }}</h4>
      <a :href="item.url">{{ item.url }}</a>
    </div>
    <div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>
<!-- {
    title: "Tutorial",
    site: "Vue.js",
    url: "https://vuejs.org",
    description:
      "Welcome to the Vue tutorial! The goal of this tutorial is to quickly give you an experience of what it feels like to work with Vue, right in the browser.",
  }, -->
<script>
export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.item {
  background: rgb(69, 69, 69);
  padding: 1.5rem;
  border-radius: 10px;
}

a {
  padding: 0;
  background: none;
}
a:hover {
  text-decoration: underline;
}
</style>
