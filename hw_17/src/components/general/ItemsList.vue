<template>
  <div class="items-list">
    <h1 class="text-xl mb-8 font-medium">{{ listTitle }}</h1>
    <div class="flex flex-col gap-4">
      <slot :items="items">
        <item-card
          v-if="items.length"
          v-for="item in items"
          :item="item"
          @delete-item="emit('delete-item', item.id)"
        />
      </slot>
      <slot name="empty">
        <span v-if="!items.length" class="text-lg text-slate-300 text-center"
          >Список порожній</span
        >
      </slot>
    </div>
  </div>
</template>

<script setup>
import ItemCard from "@/components/general/ItemCard.vue"

const emit = defineEmits(["delete-item"])
const props = defineProps({
  items: {
    type: Array,
    default(rawProps) {
      return []
    },
  },
  listTitle: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
