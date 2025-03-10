import HomeView from "../views/static/HomeView.vue"

export const mainRoutes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/views/static/ContactsView.vue"),
  },
  {
    path: "/shopping-rules",
    name: "shoppingRules",
    component: () => import("@/views/static/ShoppingRulesView.vue"),
  },
]
