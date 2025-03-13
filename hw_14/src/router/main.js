import HomeView from "../views/static/HomeView.vue"
export const mainRoutes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/users/index.vue"),
  },
]
