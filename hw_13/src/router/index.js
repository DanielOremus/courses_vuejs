import { createRouter, createWebHistory } from "vue-router"
import { mainRoutes } from "./main"
import { productsRoutes } from "./products"
import { suppliersRoutes } from "./suppliers"
const routes = [...mainRoutes, ...productsRoutes, ...suppliersRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
