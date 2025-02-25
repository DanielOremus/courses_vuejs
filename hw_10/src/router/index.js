import { createRouter, createWebHistory } from "vue-router"
import mainRoutes from "./main"
import usersRoutes from "./users"
import tasksRoutes from "./tasks"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...mainRoutes, ...usersRoutes, ...tasksRoutes],
})

export default router
