<template>
  <div class="item-card">
    <div class="content">
      <slot>
        <span class="text-lg">{{ item.name }}</span>
      </slot>
    </div>

    <div class="actions">
      <slot name="actions">
        <Button @click="onDelete(item.id)" severity="danger">Видалити</Button>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(["deleteItem"])

function onDelete(id) {
  emit("deleteItem", id)
}
</script>

<style lang="css" scoped>
.item-card {
  @apply flex justify-between items-center bg-zinc-900 p-3 rounded-lg;
}
</style>
