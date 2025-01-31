<template>
  <div class="item">
    <img class="item__image" :src="berry.imgSrc" alt="berryImg" />
    <div class="item__shop-section">
      <span>{{ berry.shopName }}</span>
      <span class="item__availability-text" :class="berryAvailabilityColor">{{
        berryAvailabilityText
      }}</span>
    </div>
    <div>
      {{ berry.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BerryCard",
  props: {
    berry: {
      type: Object,
      requred: true,
    },
  },
  computed: {
    berryAvailabilityColor() {
      return this.berry.isAvailable ? "available" : "not-available"
    },
    berryAvailabilityText() {
      return this.berry.isAvailable ? "В наявності" : "Нема в наявності"
    },
  },
}
</script>

<style lang="css" scoped>
.item {
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  flex-basis: 250px;
  font-size: 1.2rem;
}
.item__image {
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
.item__shop-section {
  font-size: 1rem;
  display: flex;
  gap: 1rem;
}
.item__availability-text::before {
  content: "• ";
}
.available {
  color: rgb(0, 173, 0);
}
.not-available {
  color: red;
}
</style>
