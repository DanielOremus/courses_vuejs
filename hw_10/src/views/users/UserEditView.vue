<template>
  <main-master-page>
    <user-edit-form :user-init-data="currentUser"></user-edit-form>
  </main-master-page>
</template>

<script>
import { useUsersStore } from "@/stores/users"
import { mapState } from "pinia"
import UserEditForm from "@/components/users/UserEditForm.vue"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "UserEditView",
  components: {
    MainMasterPage,
    UserEditForm,
  },
  computed: {
    ...mapState(useUsersStore, ["getUserById"]),
    currentUserId() {
      return this.$route.params.id
    },
    currentUser() {
      return !this.currentUserId ? null : this.getUserById(this.currentUserId)
    },
  },
}
</script>

<style lang="scss" scoped></style>
