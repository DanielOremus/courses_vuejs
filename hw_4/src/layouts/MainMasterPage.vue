<template>
  <div>
    <div class="nav">
      <h1 class="page-title">Now at: {{ $route.meta.pageTitle }}</h1>
      <div class="links-container">
        <a v-if="!isHome"
          ><span class="home-link" @click="$router.push({ name: 'home' })"
            >Go Home</span
          ></a
        >
        <a v-if="!isTasks"
          ><span class="tasks-link" @click="$router.push({ name: 'tasks' })"
            >Go to Tasks</span
          ></a
        >
      </div>
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
    isTasks() {
      return this.$route.name === "tasks"
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
.links-container {
  display: flex;
  column-gap: 0.5rem;
}
.home-link,
.tasks-link {
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
