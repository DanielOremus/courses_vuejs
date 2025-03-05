<template>
  <div class="login-form__wrapper">
    <form class="login-form" @submit.prevent="onSubmit">
      <h1 class="login-form__title">Вхід</h1>
      <label class="label">
        Ім'я користувача:
        <m-input v-model="username" />
      </label>
      <label class="label">
        Пароль:
        <m-input type="password" v-model="password" />
      </label>
      <div class="login-form__actions">
        <button
          type="submit"
          class="login-btn"
          :disabled="!isDataValid"
          @click="onLogin"
        >
          Ввійти
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth"
import { mapActions } from "pinia"
export default {
  name: "LoginForm",
  computed: {
    isDataValid() {
      return this.username && this.password
    },
  },
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    onLogin() {
      this.login({ username: this.username, password: this.password })
      this.$router.push(this.$route.query.redirect)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/auth/login_form.scss";
</style>
