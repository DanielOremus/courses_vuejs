<template>
  <div>
    <span v-if="isAuthenticated"
      >{{ user.name }}
      <i class="pi pi-sign-out" />
    </span>
    <router-link v-else :to="{ name: 'login' }">Вхід</router-link>
    <Button @click="onLogin">Login</Button>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth"
import { mapState, mapActions } from "pinia"
export default {
  name: "UserSection",
  computed: {
    ...mapState(useAuthStore, ["user", "isAuthenticated"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["signIn"]),
    onLogin() {
      this.signIn({
        email: "steven@gmail.com",
        password: "steven",
        type: "login",
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
