export default [
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/users/UsersListView.vue"),
  },
  {
    path: "/user/:id",
    name: "userDetails",
    component: () => import("@/views/users/UserDetailsView.vue"),
  },
  {
    path: "/users/edit/:id?",
    name: "userEdit",
    component: () => import("@/views/users/UserEditView.vue"),
  },
]
