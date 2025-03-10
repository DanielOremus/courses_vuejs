import { createRouter, createWebHistory } from "vue-router"
import { mainRoutes } from "./main"
import { productsRoutes } from "./products"
const routes = [...mainRoutes, ...productsRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
