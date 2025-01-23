<template>
  <div class="dish-item">
    <span>{{ dish.name }}</span>
    <button @click="actionBtn.clickCallback(dish.id)">
      {{ actionBtn.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "DishItem",
  props: {
    dish: {
      type: Object,
      required: true,
    },
    actionBtn: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.dish-item {
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  button {
    font-size: 1.1rem;
    padding: 0.2em 0.5em;
    cursor: pointer;
  }
}
</style>
