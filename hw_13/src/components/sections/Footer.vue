<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="footer-container">
        <slot name="left-section">
          <div>Рейтинг магазину: 54449</div>
        </slot>
        <slot name="right-section">
          <div class="flex items-center gap-4">
            Власник: Баба Галя
            <Avatar :image="ownerImage" size="xlarge" shape="circle" />
          </div>
        </slot>
      </div>
    </div>
  </footer>
</template>

<script>
import ownerImage from "@/assets/images/owner-image.png"
export default {
  name: "Footer",
  data() {
    return {
      ownerImage,
    }
  },
}
</script>

<style lang="css" scoped>
.footer-container {
  @apply bg-surface-800 flex justify-around items-center text-xl py-5;
}
</style>
