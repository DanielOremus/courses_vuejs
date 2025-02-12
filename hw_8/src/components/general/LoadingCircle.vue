<template>
  <div class="circle"></div>
</template>

<script>
export default {
  name: "LoadingCircle",
}
</script>

<style lang="css" scoped>
.circle {
  width: 30px;
  height: 30px;
  border: rgb(227, 227, 227) 4px solid;
  border-top: rgb(73, 73, 73) 4px solid;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: auto;
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
