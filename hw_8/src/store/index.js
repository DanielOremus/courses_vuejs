import { createStore } from "vuex"
import taskModule from "./modules/task.js"
import category from "./modules/category.js"
import product from "./modules/product.js"
const store = createStore({
  modules: {
    task: taskModule,
    product,
    category,
  },
})

export default store
