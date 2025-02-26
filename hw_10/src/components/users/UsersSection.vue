<template>
  <div class="users-table-wrapper">
    <users-table />
    <router-link :to="{ name: 'userEdit' }"
      ><span class="new-user-caption"
        >Створити нового користувача</span
      ></router-link
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
.new-user-caption {
  font-size: 1.1rem;
}
</style>
