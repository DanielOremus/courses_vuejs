import { createRouter, createWebHistory } from "vue-router"
import { mainRoutes } from "./main"
import { productsRoutes } from "./products"
const routes = [
  ...mainRoutes,
  ...productsRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/static/NotFoundView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
