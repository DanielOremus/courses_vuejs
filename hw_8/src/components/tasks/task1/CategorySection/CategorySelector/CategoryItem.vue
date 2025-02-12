<template>
  <div class="category-item">
    <div
      class="category-item__image-container"
      :class="{ selected: isSelected }"
      @click="onSelect"
    >
      <img
        :src="category.imgSrc"
        alt="category-image"
        class="category-item__image"
        :draggable="false"
      />
    </div>
    <span class="category-item__title">{{ category.title }}</span>
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
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onSelect() {
      this.$emit("selectCategory", this.category.id)
    },
  },
}
</script>

<style lang="css" scoped>
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.category-item__image-container {
  display: flex;
  justify-content: center;
  background-color: rgb(61, 61, 61);
  border-radius: 50%;
  border: 3px solid transparent;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.569);
  width: 250px;
  height: 250px;
  cursor: pointer;
  padding: 2rem;
}
.category-item__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.category-item__title {
  font-size: 1.4rem;
}
.selected {
  border: 3px solid red;
}
</style>
