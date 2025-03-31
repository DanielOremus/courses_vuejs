export const friendRoutes = [
  {
    path: "/friends",
    name: "friends",
    component: () => import("@/views/friends/FriendsListView.vue"),
    meta: {
      useInMenu: true,
      menuTitle: "Друзі",
    },
  },
]
