<template>
  <div v-for="item in currentItemsList" :key="item.id">
    {{ item.name }} - {{ item.experience }}
  </div>
</template>

<script>
export default {
  name: "ExperienceList",
  props: {
    currentItemsList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
