export default {
  namespaced: true,
  state: () => ({
    tasksList: [
      {
        id: "1",
        component: () => import("@/components/tasks/task1.vue"),
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
