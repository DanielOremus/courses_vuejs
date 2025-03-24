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
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/components/auth/RegisterForm.vue"),
      },
    ],
  },
]
