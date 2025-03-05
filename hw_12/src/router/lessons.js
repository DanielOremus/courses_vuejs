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
        path: ":lessonsIds(\\d+)*",
        component: () => import("@/views/lessons/TeachersSelectView.vue"),
        name: "teachersSelect",
        meta: { requiresAuth: true },
        beforeEnter: (to, from) => {
          if (from.name !== "lessonsSelect") return { name: "lessonsSelect" }
          // if (!to.params.lessonIds.length) return { name: "lessonsSelect" }
        },
      },
      {
        path: ":lessonTeacherIds(\\d+-\\d+)+",
      },
    ],
  },
]
