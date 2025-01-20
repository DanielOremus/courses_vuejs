import TaskView from "@/views/TaskView.vue"
import Task from "@/components/tasks/index.vue"
export default [
  {
    path: "/tasks",
    name: "tasks",
    component: TaskView,
    meta: {
      pageTitle: "Task View",
    },
    children: [
      {
        path: ":id",
        name: "task",
        component: Task,
      },
    ],
  },
]
