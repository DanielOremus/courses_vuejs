import { createStore } from "vuex"
import taskModule from "./modules/task.js"
import productModule from "./modules/product.js"
import currencyModule from "./modules/currency.js"
import cartModule from "./modules/cart.js"
const store = createStore({
  modules: {
    task: taskModule,
    product: productModule,
    currency: currencyModule,
    cart: cartModule,
  },
})

export default store
