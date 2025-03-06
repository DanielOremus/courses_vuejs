import "./assets/style/main.scss"

import { useAuthStore } from "./stores/auth"
import { createApp } from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import App from "./App.vue"
import router from "./router"
import pinia from "./stores/index"
import importUiComponents from "../helpers/importUiComponents"
import MainMasterPage from "./layouts/MainMasterPage.vue"

const app = createApp(App)

library.add(fas, fab, far)

app.use(router).use(pinia)

importUiComponents(app)
app.component("main-master-page", MainMasterPage)
useAuthStore().syncAuthData()

app.mount("#app")
