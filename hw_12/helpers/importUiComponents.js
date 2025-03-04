import MyInput from "@/components/ui/MyInput.vue"
import MyTextarea from "@/components/ui/MyTextarea.vue"
import MySelector from "@/components/ui/MySelector.vue"
export default (app) => {
  app.component("m-input", MyInput)
  app.component("m-textarea", MyTextarea)
  app.component("m-select", MySelector)
}
