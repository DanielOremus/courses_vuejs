<template>
  <table class="users-table">
    <tr>
      <th>Ім'я</th>
      <th>Вік</th>
      <th>Дії</th>
    </tr>
    <tr v-if="isLoading">
      <td colspan="3">
        <loading-circle class="loading-circle" />
      </td>
    </tr>
    <tr v-else-if="responseError">
      <td colspan="3">{{ responseError }}</td>
    </tr>
    <user-row
      v-else
      v-for="(user, i) in itemsList"
      :key="user.id"
      :user="user"
      class="user"
      :class="colorClass(i)"
      @user-edit="onEdit(user.id)"
      @user-delete="onDelete(user.id)"
      @click.prevent="onDetails($event, user.id)"
    />
  </table>
</template>

<script>
import { useUsersStore } from "@/stores/users"
import { mapActions, mapState } from "pinia"
import LoadingCircle from "@/components/general/LoadingCircle.vue"
import UserRow from "./UserRow.vue"
import { useTasksStore } from "@/stores/tasks"
export default {
  name: "UsersTable",
  components: {
    UserRow,
    LoadingCircle,
  },
  computed: {
    ...mapState(useUsersStore, ["itemsList", "isLoading", "responseError"]),
  },
  methods: {
    ...mapActions(useUsersStore, ["fetchItems", "deleteItemById"]),
    // ...mapActions(useTasksStore, ["clearTasksResponsible"]),
    colorClass(index) {
      return index % 2 ? "light-grey" : "dark-grey"
    },
    onEdit(userId) {
      this.$router.push({ name: "userEdit", params: { id: userId } })
    },
    onDelete(userId) {
      // this.clearTasksResponsible(userId)
      this.deleteItemById(userId)
    },
    onDetails(event, userId) {
      if (event.target.tagName !== "BUTTON")
        this.$router.push({ name: "userDetails", params: { id: userId } })
    },
  },
  mounted() {
    this.fetchItems()
  },
}
</script>

<style lang="scss" scoped>
@import url(@/assets/style/components/users/users_table.scss);
</style>
