<template>
  <ul class="nav-links">
    <li v-for="link in navLinks" :key="link">
      <router-link exact-active-class="active" :to="{ name: link.name }">
        {{ link.meta?.menuTitle ?? link.name }}</router-link
      >
    </li>
  </ul>
</template>

<script setup>
import { routes } from "@/router"
import { computed } from "vue"

const navLinks = computed(() => {
  const menuRoutes = []
  checkRoutesList(routes, menuRoutes)
  return menuRoutes
})

function checkRoutesList(routeItems, menuRoutes) {
  for (const routeItem of routeItems) {
    if (routeItem.children) {
      checkRoutesList(routeItem.children, menuRoutes)
    } else if (routeItem.meta?.useInMenu) {
      menuRoutes.push(routeItem)
    }
  }
}
</script>

<style lang="scss" scoped></style>
