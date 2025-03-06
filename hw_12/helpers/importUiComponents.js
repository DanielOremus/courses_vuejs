import MyInput from "@/components/ui/MyInput.vue"
import MyTextarea from "@/components/ui/MyTextarea.vue"
import MySelector from "@/components/ui/MySelector.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
export default (app) => {
  app.component("m-input", MyInput)
  app.component("m-textarea", MyTextarea)
  app.component("m-select", MySelector)
  app.component("fa-icon", FontAwesomeIcon)
}
