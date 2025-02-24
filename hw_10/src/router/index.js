import { createRouter, createWebHistory } from "vue-router"
import mainRoutes from "./main"
import usersRoutes from "./users"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...mainRoutes, ...usersRoutes],
})

export default router
