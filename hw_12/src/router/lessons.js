export const lessonsRoutes = [
  {
    path: "/lessons",
    component: () => import("@/views/lessons/index.vue"),
    redirect: { name: "lessonsSelect" },
    name: "lessons",
    children: [
      {
        path: "select",
        component: () => import("@/views/lessons/LessonsSelectView.vue"),
        name: "lessonsSelect",
        meta: { requiresAuth: true },
      },
      {
        path: ":lessonIds+",
        component: () => import("@/views/lessons/TeachersSelectView.vue"),
        name: "teachersSelect",
        meta: { requiresAuth: true },
        beforeEnter: (to, from, next) => {
          if (!from.params.lessonIds.length) next({ name: "select" })
        },
      },
    ],
  },
]
