import { createStore } from "vuex"
import taskModule from "./modules/task.js"
const store = createStore({
  modules: {
    task: taskModule,
  },
})

export default store
