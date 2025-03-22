<template>
  <Carousel
    :value="heroImages"
    :show-navigators="false"
    :num-visible="1"
    :num-scroll="1"
    circular
    :autoplay-interval="8000"
    :pt="{
      indicatorList: 'absolute left-1/2 bottom-2 -translate-x-1/2',
    }"
    class="carousel"
  >
    <template #item="slotProps">
      <Image :src="slotProps.data" image-class="hero-img" />
    </template>
  </Carousel>
</template>

<script>
import { heroImages } from "@/constants/carousel"
export default {
  name: "HeroCarousel",
  data() {
    return {
      heroImages,
    }
  },
}
</script>

<style lang="css" scoped>
:deep(.hero-img) {
  width: 100%;
  height: calc(100vh - var(--header-height));
  filter: brightness(50%);
  object-fit: cover;
}
</style>
