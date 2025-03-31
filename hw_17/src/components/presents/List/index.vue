<template>
  <items-list
    list-title="Список подарунків"
    :items="presents"
    @delete-item="onDelete"
  />
</template>

<script setup>
import { defineEmits, defineProps } from "vue"
import ItemsList from "@/components/general/ItemsList.vue"

const emit = defineEmits(["delete-present"])
const props = defineProps({
  presents: {
    type: Array,
    default(rawProps) {
      return []
    },
  },
})
function onDelete(presentId) {
  emit("delete-present", presentId)
}
</script>

<style lang="scss" scoped></style>
