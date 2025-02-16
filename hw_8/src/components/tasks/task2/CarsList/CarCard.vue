<template>
  <div>
    {{ carData }}
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: {
    carData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
