<template>
  <div>
    <span v-if="isAuthenticated"
      >{{ user?.name }}
      <i class="logout-icon pi pi-sign-out" @click="onLogout" />
    </span>
    <router-link v-else :to="{ name: 'login' }" active-class="active">{{
      $t("buttons.login")
    }}</router-link>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth"
import { mapState, mapActions } from "pinia"
import { isAuthenticated } from "@/router/helpers"
export default {
  name: "UserSection",
  computed: {
    ...mapState(useAuthStore, ["user"]),
    isAuthenticated: () => isAuthenticated(),
  },
  methods: {
    ...mapActions(useAuthStore, ["signIn", "logout"]),
    onLogin() {
      this.signIn({
        email: "steven@gmail.com",
        password: "steven",
        type: "login",
      })
    },
    onLogout() {
      this.logout()
      this.$router.push({ name: "login" })
    },
  },
}
</script>

<style lang="css" scoped>
.logout-icon {
  @apply ml-3 text-red-800 font-black text-xl hover:text-red-500 hover:cursor-pointer;
}
</style>
