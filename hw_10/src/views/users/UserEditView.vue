<template>
  <main-master-page>
    <loading-overlay v-if="fetchLoading" />
    <div class="user-form-wrapper">
      <h1 class="form-title">
        {{ formTitle }}
      </h1>
      <user-edit-form
        :user-init-data="currentItem"
        :action-loading="actionLoading"
        @edit-save="onEdit"
        @edit-cancel="returnToList"
      />
    </div>
  </main-master-page>
</template>

<script>
import { useUsersStore } from "@/stores/users"
import { mapActions, mapState } from "pinia"
import UserEditForm from "@/components/users/UserEditForm.vue"
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import LoadingOverlay from "@/components/general/LoadingOverlay.vue"
export default {
  name: "UserEditView",
  components: {
    MainMasterPage,
    UserEditForm,
    LoadingOverlay,
  },
  computed: {
    ...mapState(useUsersStore, [
      "currentItem",
      "responseError",
      "actionLoading",
      "fetchLoading",
    ]),
    userId() {
      return this.$route.params.id
    },
    formTitle() {
      return this.userId ? "Редагування" : "Створення"
    },
  },
  methods: {
    ...mapActions(useUsersStore, [
      "fetchItemById",
      "clearCurrentItem",
      "updateItemById",
      "addItem",
    ]),
    async onEdit(userData) {
      if (this.userId) await this.updateItemById({ ...userData })
      else await this.addItem({ ...userData })
      if (this.responseError) alert(this.responseError)
      else this.returnToList()
    },
    returnToList() {
      this.$router.push({ name: "users" })
    },
  },
  mounted() {
    if (this.userId) this.fetchItemById(this.userId)
  },
  beforeRouteLeave() {
    const usersStore = useUsersStore()
    usersStore.clearCurrentItem()
  },
}
</script>

<style lang="scss" scoped>
.user-form-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  min-width: 40rem;
  padding: 2rem;
  background-color: var(--card-background);
  border-radius: 15px;
}
.form-title {
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
