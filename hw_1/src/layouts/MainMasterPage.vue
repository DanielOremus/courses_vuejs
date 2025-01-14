<template>
  <div>
    <div class="nav">
      <h1 class="page-title">Now at: {{ $route.meta.pageTitle }}</h1>
      <a v-if="!isHome"
        ><span class="home-link" @click="$router.push({ name: 'home' })"
          >Go Home</span
        ></a
      >
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
  computed: {
    isHome() {
      return this.$route.name === "home"
    },
  },
}
</script>

<style lang="css" scoped>
.nav {
  margin-bottom: 1.5rem;
}
.page-title {
  font-size: 2rem;
}
.home-link {
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
