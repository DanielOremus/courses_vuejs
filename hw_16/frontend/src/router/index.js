import { createRouter, createWebHistory } from "vue-router"
import { mainRoutes } from "./main"
import { productsRoutes } from "./products"
import { authRoutes } from "./auth"
import { isAuthenticated, isRouteAvailable } from "./helpers"
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

router.beforeEach((to) => {
  if (to.meta?.requiresAuth) {
    if (!isAuthenticated()) return { name: "login" }
    if (!isRouteAvailable(to)) return { name: "notFound" }
  }
})

export { router, routes }
