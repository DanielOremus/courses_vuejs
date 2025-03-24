import { createRouter, createWebHistory } from "vue-router"
import { mainRoutes } from "./main"
import { productsRoutes } from "./products"
import { authRoutes } from "./auth"
const routes = [
  ...mainRoutes,
  ...productsRoutes,
  ...authRoutes,
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
