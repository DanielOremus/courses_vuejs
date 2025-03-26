<template>
  <ul class="nav-links">
    <li v-for="routeItem in visibleRoutes" :key="routeItem.name">
      <router-link exact-active-class="active" :to="{ name: routeItem.name }">{{
        $t(`pages.${routeItem.name}.title.menu`)
      }}</router-link>
    </li>
  </ul>
</template>

<script>
import { routes } from "@/router"
import { isRouteAvailable } from "@/router/helpers"
export default {
  name: "NavLinks",
  computed: {
    visibleRoutes() {
      const menuRoutes = []
      this.checkRoutesList(routes, menuRoutes)
      return menuRoutes
    },
  },
  methods: {
    checkRoutesList(routeItems, menuRoutes) {
      for (const routeItem of routeItems) {
        if (routeItem.children)
          this.checkRoutesList(routeItem.children, menuRoutes)
        else if (routeItem.meta?.useInMenu && isRouteAvailable(routeItem))
          menuRoutes.push({
            name: routeItem.name,
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
