import TaskView from "@/views/TaskView.vue"

export default [
  {
    path: "/tasks/:id",
    name: "task",
    component: TaskView,
    meta: {
      pageTitle: "Task View",
    },
  },
]
