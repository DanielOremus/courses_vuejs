<template>
  <div
    class="overlay-background"
    :style="{ backgroundColor: `rgba(${bgColorRGBA})` }"
  >
    <loading-circle />
  </div>
</template>

<script>
import LoadingCircle from "./LoadingCircle.vue"
export default {
  name: "LoadingOverlay",
  components: {
    LoadingCircle,
  },
  props: {
    bgColorRGBA: {
      type: String,
      default: "0, 0, 0, 0.4",
    },
  },
}
</script>

<style lang="scss" scoped></style>
