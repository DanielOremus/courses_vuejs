import "./assets/style/main.scss"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import pinia from "./stores/index"
import importUiComponents from "../helpers/importUiComponents"

const app = createApp(App)

app.use(router).use(pinia)
importUiComponents(app)

app.mount("#app")
