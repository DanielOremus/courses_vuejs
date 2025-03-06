import { createRouter, createWebHistory } from "vue-router"
import { mainRoutes } from "./main"
import { authRoutes } from "./auth"
import { lessonsRoutes } from "./lessons"
import { teachersRoutes } from "./teachers"

import { useAuthStore } from "@/stores/auth"

const routes = [
  ...mainRoutes,
  ...authRoutes,
  ...lessonsRoutes,
  ...teachersRoutes,
  {
    path: "/:pathMath(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFoundView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes,
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated)
    return { name: "login", query: { redirect: to.fullPath } }
})

export default router
