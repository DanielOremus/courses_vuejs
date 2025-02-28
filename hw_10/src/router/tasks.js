export default [
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("@/views/tasks/TasksListView.vue"),
  },
  {
    path: "/tasks/manager",
    name: "tasksManager",
    component: () => import("@/views/tasks/TaskManagerView.vue"),
  },
  {
    path: "/tasks/edit/:id?",
    name: "taskEdit",
    component: () => import("@/views/tasks/TaskEditView.vue"),
  },
]
