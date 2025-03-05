import "./assets/style/main.scss"

import { useAuthStore } from "./stores/auth"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import pinia from "./stores/index"
import importUiComponents from "../helpers/importUiComponents"
import MainMasterPage from "./layouts/MainMasterPage.vue"

const app = createApp(App)

app.use(router).use(pinia)

importUiComponents(app)
app.component("main-master-page", MainMasterPage)
useAuthStore().syncAuthData()

app.mount("#app")
