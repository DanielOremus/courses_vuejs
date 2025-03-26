import Aura from "@primeuix/themes/aura"

export default {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
      darkModeSelector: ".dark",
    },
  },
  pt: {
    inputText: {
      root: "border-2",
    },
    button: {
      root: "text-lg py-1",
    },
    select: {
      root: "border-2",
    },
    multiselect: {
      root: "border-2",
    },
    textarea: {
      root: "border-2",
    },
  },
}
