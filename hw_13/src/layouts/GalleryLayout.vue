<template>
  <div class="gallery-layout flex-grow flex flex-col">
    <Header>
      <div class="flex items-center text-xl">
        <router-link :to="{ name: 'home' }">
          <span>На головну</span>
        </router-link>
      </div>
    </Header>
    <div class="content flex-grow">
      <slot></slot>
    </div>
    <GalleryFooter />
  </div>
</template>

<script>
import Header from "@/components/sections/Header.vue"
import GalleryFooter from "@/components/sections/GalleryFooter.vue"
export default {
  name: "GalleryLayout",
  components: {
    Header,
    GalleryFooter,
  },
}
</script>

<style lang="scss" scoped></style>
