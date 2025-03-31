import { createRouter, createWebHistory } from "vue-router"
import { mainRoutes } from "./main"
import { friendRoutes } from "./friends"
import { presentRoutes } from "./presents"
const routes = [
  ...mainRoutes,
  ...friendRoutes,
  ...presentRoutes,
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

export { router, routes }
