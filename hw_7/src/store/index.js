import { createStore } from "vuex"
import taskModule from "./modules/task.js"
import productModule from "./modules/product.js"
const store = createStore({
  modules: {
    task: taskModule,
    product: productModule,
  },
})

export default store
