export const teachersRoutes = [
  {
    path: "/teachers",
    name: "teachers",
    component: () => import("@/views/teachers/index.vue"),
    meta: {
      requiresAuth: false,
    },
  },
]
