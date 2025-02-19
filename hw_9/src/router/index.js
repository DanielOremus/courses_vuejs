import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("@/views/ContactsView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("@/views/ShopView/index.vue"),
    },
    {
      path: "/shop/:categoryId",
      name: "products",
      component: () => import("@/views/ShopView/CategoryProductsView.vue"),
    },
    {
      path: "/payment",
      name: "paymentRules",
      component: () => import("@/views/PaymentRulesView.vue"),
    },
  ],
})

export default router
