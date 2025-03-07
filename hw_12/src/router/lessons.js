import { parseLessonsTeachersPairs } from "@/stores/helpers/lessons"
import { useLessonsStore } from "@/stores/lessons"
import { useTeachersStore } from "@/stores/teachers"
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
        path: ":lessonsIds(\\d+)+",
        component: () => import("@/views/teachers/TeachersSelectView.vue"),
        name: "teachersSelect",
        meta: { requiresAuth: true },
        beforeEnter: (to, from) => {
          if (from.name !== "lessonsSelect") return { name: "lessonsSelect" }
          // if (!to.params.lessonIds.length) return { name: "lessonsSelect" }
        },
      },
      {
        path: ":lessonTeacherIds(\\d+-\\d+)+",
        component: () => import("@/views/lessons/EducationPlanView.vue"),
        name: "educationPlan",
        meta: { requiredAuth: false },
        beforeEnter: (to) => {
          const teachersObjList = useTeachersStore().teachersListObj
          const lessonsObjList = useLessonsStore().lessonsListObj
          const parsedPairs = parseLessonsTeachersPairs(
            to.params.lessonTeacherIds
          )

          const exists = parsedPairs.every(
            (pair) =>
              lessonsObjList[pair.lesson] && teachersObjList[pair.teacher]
          )
          if (!exists) return { name: "notFound" }
        },
      },
    ],
  },
]
