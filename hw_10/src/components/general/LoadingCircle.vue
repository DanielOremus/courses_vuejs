<template>
  <div class="loading-circle"></div>
</template>

<script>
export default {
  name: "LoadingCircle",
}
</script>

<style lang="scss" scoped>
.loading-circle {
  width: 25px;
  aspect-ratio: 1/1;
  border: 3px solid rgb(78, 78, 78);
  border-left: 3px solid white;
  border-radius: 50%;
  animation: spinning 1s linear infinite;
}
@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
