<template>
  <div class="item">
    <img :src="itemData.imgSrc" :title="itemData.title" />
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="css" scoped>
.item {
  cursor: pointer;
  & > img {
    height: 200px;
  }
}
</style>
