import { isAuthenticated } from "./helpers"
const redirectIfAuthenticated = () => {
  if (isAuthenticated()) return { name: "home" }
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
        beforeEnter: redirectIfAuthenticated,
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/components/auth/RegisterForm.vue"),
        beforeEnter: redirectIfAuthenticated,
      },
    ],
  },
]
