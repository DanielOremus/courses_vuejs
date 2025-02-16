import { createStore } from "vuex"
import taskModule from "./modules/task.js"
import category from "./modules/category.js"
import product from "./modules/product.js"
import carFilters from "./modules/car/filters.js"
import car from "./modules/car/index.js"
const store = createStore({
  modules: {
    task: taskModule,
    product,
    category,
    carFilters,
    car,
  },
})

export default store
