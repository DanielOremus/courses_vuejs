<template>
  <div class="login-form__wrapper">
    <form class="login-form" @submit.prevent="onSubmit">
      <h1 class="login-form__title">Вхід</h1>
      <label class="label">
        Ім'я користувача:
        <m-input />
      </label>
      <label class="label">
        Пароль:
        <m-input type="password" />
      </label>
      <div class="login-form__actions">
        <button type="submit" class="login-btn">Ввійти</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/auth/login_form.scss";
</style>
