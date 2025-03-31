<template>
  <items-list
    list-title="Список друзів"
    :items="friends"
    @delete-item="onDelete"
  />
</template>

<script setup>
import { defineEmits, defineProps } from "vue"
import ItemsList from "@/components/general/ItemsList.vue"

const emit = defineEmits(["delete-friend"])
const props = defineProps({
  friends: {
    type: Array,
    default(rawProps) {
      return []
    },
  },
})
function onDelete(friendId) {
  emit("delete-friend", friendId)
}
</script>

<style lang="scss" scoped></style>
