<template>
  <div class="users-table-wrapper">
    <users-table />
    <router-link :to="{ name: 'userEdit' }"
      >Створити нового користувача</router-link
    >
  </div>
</template>

<script>
import UsersTable from "./UsersTable/index.vue"
export default {
  name: "UsersSection",
  components: {
    UsersTable,
  },
  methods: {
    onCreate() {
      this.$router.push({ name: "userEdit" })
    },
  },
}
</script>

<style lang="scss" scoped>
.users-table-wrapper {
  width: fit-content;
  margin: 0 auto;
  margin-top: 3rem;
}
</style>
