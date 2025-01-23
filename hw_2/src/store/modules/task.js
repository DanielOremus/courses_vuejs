export default {
  namespaced: true,
  state: () => ({
    tasksList: [
      {
        id: "1",
        component: () => import("@/components/tasks/task1.vue"),
      },
      {
        id: "2",
        component: () => import("@/components/tasks/task2.vue"),
      },
      {
        id: "3",
        component: () => import("@/components/tasks/task3.vue"),
      },
      {
        id: "4",
        component: () => import("@/components/tasks/task4.vue"),
      },
      {
        id: "5",
        component: () => import("@/components/tasks/task5.vue"),
      },
      {
        id: "6",
        component: () => import("@/components/tasks/task6.vue"),
      },
    ],
  }),
  getters: {
    tasksList(state) {
      return state.tasksList
    },
    getTaskById: (state) => (id) => {
      return state.tasksList.find((task) => task.id === id)
    },
  },
}
