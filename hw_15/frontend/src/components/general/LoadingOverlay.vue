<template>
  <div class="loading-overlay">
    <progress-spinner
      :style="{ width: spinner.width, aspectRation: 1 / 1 }"
      :animation-duration="spinner.animationDuration"
      :stroke-width="spinner.strokeWidth"
    />
  </div>
</template>

<script>
export default {
  name: "LoadingOverlay",
  props: {
    spinner: {
      type: Object,
      default: () => ({
        width: "40px",
        animationDuration: ".8s",
        strokeWidth: "5",
      }),
    },
  },
}
</script>

<style lang="css" scoped>
.loading-overlay {
  @apply fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.55)] flex justify-center items-center z-50;
}
</style>
