import { useAuthStore } from "@/stores/auth"

const redirectIfHasToken = (to, from) => {
  if (!!useAuthStore().jwtToken) {
    return { name: "home" }
  }
}

export const authRoutes = [
  {
    path: "/auth",
    redirect: { name: "login" },
    component: () => import("@/views/auth/index.vue"),

    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/components/auth/LoginForm.vue"),
        beforeEnter: redirectIfHasToken,
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/components/auth/RegisterForm.vue"),
        beforeEnter: redirectIfHasToken,
      },
    ],
  },
]
