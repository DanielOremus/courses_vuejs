import { useDefaultModuleObj } from "./helpers/defaultModuleObj"
import { defineStore } from "pinia"

export const usePresentsStore = defineStore("presents", () => {
  const template = useDefaultModuleObj("presents")

  return {
    ...template,
  }
})
