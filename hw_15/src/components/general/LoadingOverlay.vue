<template>
  <div class="loading-overlay"></div>
</template>

<script>
export default {
  name: "LoadingOverlay",
}
</script>

<style lang="css" scoped>
.loading-overlay {
  @apply absolute w-[100vw] h-[100vh] top-0 left-0 bg-[rgba(0,0,0,0.4)] z-50;
}
</style>
