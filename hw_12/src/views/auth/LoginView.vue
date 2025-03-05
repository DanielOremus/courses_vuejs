<template>
  <main-master-page>
    <div class="login-form__container">
      <login-form />
    </div>
  </main-master-page>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue"
export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
}
</script>

<style lang="scss" scoped>
.login-form__container {
  width: 650px;
  margin: 0 auto;
  margin-top: 5rem;
}
</style>
