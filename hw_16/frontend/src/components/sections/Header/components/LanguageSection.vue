<template>
  <div>
    <SelectButton
      v-model="selectedLocale"
      :options="availableLocales"
      option-label="name"
      option-value="value"
      :allow-empty="false"
    />
  </div>
</template>

<script>
import { useLocales } from "@/moduleHelpers/i18n"
import { locales } from "./setting"
export default {
  name: "LanguageSection",
  data() {
    return {
      selectedLocale: useLocales().locale,
      localesHelper: null,
    }
  },
  computed: {
    availableLocales: () => locales,
  },
  watch: {
    selectedLocale(newValue) {
      this.localesHelper.setLocale(newValue)
    },
  },
  created() {
    this.localesHelper = useLocales()
  },
}
</script>

<style lang="scss" scoped></style>
