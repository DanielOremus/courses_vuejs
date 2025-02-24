<template>
  <RouterView />
</template>

<script>
import { useUsersStore } from "./stores/users"
import { mapState } from "pinia"
export default {
  computed: {
    ...mapState(useUsersStore, ["fetchItems"]),
  },
  mounted() {
    this.fetchItems()
  },
}
</script>

<style scoped></style>
