export default {
  namespaced: true,
  state: () => ({
    tasksList: [
      // {
      //   id: "practice",
      //   component: () => import("@/components/tasks/practice/index.vue"),
      // },
      {
        id: "1",
        component: () => import("@/components/tasks/task1/index.vue"),
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
