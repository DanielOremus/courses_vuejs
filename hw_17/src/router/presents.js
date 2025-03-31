export const presentRoutes = [
  {
    path: "/presents",
    children: [
      {
        path: "",
        name: "presents",
        component: () => import("@/views/presents/PresentsListView.vue"),
        meta: {
          useInMenu: true,
          menuTitle: "Подарунки",
        },
      },
      {
        path: "assignment",
        name: "presentsAssignment",
        component: () => import("@/views/presents/PresentsAssignmentView.vue"),
        meta: {
          useInMenu: true,
          menuTitle: "Призначення подарунків",
        },
      },
    ],
  },
]
