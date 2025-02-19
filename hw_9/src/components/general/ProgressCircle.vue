<template>
  <div class="progress-circle"></div>
</template>

<script>
export default {
  name: "ProgressCircle",
}
</script>

<style lang="css" scoped>
.progress-circle {
  width: 30px;
  aspect-ratio: 1/1;
  margin: 0 auto;
  border-radius: 50%;
  border: rgb(60, 60, 60) 4px solid;
  border-top: 3px solid white;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
