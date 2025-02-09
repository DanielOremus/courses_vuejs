import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import taskRoutes from "./task"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        pageTitle: "Home View",
      },
    },
    ...taskRoutes,
  ],
})

export default router
