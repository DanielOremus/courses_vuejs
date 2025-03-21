import "./assets/style/main.scss"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import pinia from "./stores/index"

const app = createApp(App)

app.use(router).use(pinia)

app.mount("#app")
