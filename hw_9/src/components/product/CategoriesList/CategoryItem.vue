<template>
  <div class="category" @click="$emit('category-select', category.id)">
    <div class="category__img-container">
      <img class="category__img" :src="category.imgSrc" alt="Category Image" />
    </div>
    <div class="category__name">
      {{ category.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.category {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(39, 39, 39);
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.1s ease;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.534);
}
.category:hover {
  background-color: rgb(56, 56, 56);
}
.category__img-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.category__img {
  width: 200px;
}
.category__name {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
