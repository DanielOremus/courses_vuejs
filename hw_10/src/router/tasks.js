export default [
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("@/views/tasks/TasksListView.vue"),
  },
  {
    path: "/tasks/edit/:id?",
    name: "taskEdit",
    component: () => import("@/views/tasks/TaskEditView.vue"),
  },
]
