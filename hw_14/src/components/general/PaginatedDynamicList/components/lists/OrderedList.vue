<template>
  <ol :start="startIndex + 1" class="items-list list-inside list-decimal">
    <li v-for="item in currentItemsList" :key="item.id">
      {{ item.name }}
    </li>
  </ol>
</template>

<script>
export default {
  name: "OrderedList",
  props: {
    currentItemsList: {
      type: Array,
      default: () => [],
    },
    startIndex: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style lang="scss" scoped></style>
