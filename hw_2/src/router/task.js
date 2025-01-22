import TasksView from "@/views/TasksView.vue"
import SpecificTask from "@/views/SpecificTask.vue"
export default [
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
    meta: {
      pageTitle: "Tasks View",
    },
  },
  {
    path: "/tasks/:id",
    name: "task",
    component: SpecificTask,
    meta: {
      pageTitle: "Task View",
    },
  },
]
