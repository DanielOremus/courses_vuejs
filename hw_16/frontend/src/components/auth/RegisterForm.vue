<template>
  <Form
    v-slot="$credentials"
    class="flex flex-col gap-4"
    :validate-on-submit="true"
    :validate-on-value-update="false"
    @submit="onSubmit"
  >
    <Divider :pt="{ content: 'bg-[var(--form-background-color)]' }">
      <h1 class="text-3xl text-center font-semibold text-slate-200">
        {{ $t(`pages.register.title.form`) }}
      </h1>
    </Divider>
    <div class="flex flex-col gap-1">
      <InputText name="email" placeholder="Ел. пошта" size="large" fluid />
      <Message
        v-if="$credentials.email?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $credentials.email.error?.message }}</Message
      >
    </div>
    <div class="flex flex-col gap-1">
      <InputText name="name" placeholder="Ім'я" size="large" fluid />
      <Message
        v-if="$credentials.name?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $credentials.name.error?.message }}</Message
      >
    </div>
    <div class="flex flex-col gap-1">
      <InputText name="password" placeholder="Пароль" size="large" fluid />
      <Message
        v-if="$credentials.password?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $credentials.password.error?.message }}</Message
      >
      <router-link class="login-link" :to="{ name: 'login' }"
        >Вже маєте обліковий запис?</router-link
      >
    </div>

    <Button type="submit">
      {{ $t(`pages.register.buttons.signin`) }}
    </Button>
  </Form>
</template>

<script>
export default {
  name: "LoginForm",
  methods: {
    onSubmit(form) {
      console.log(form)
    },
  },
}
</script>

<style lang="css" scoped>
.login-link {
  @apply text-slate-400 text-sm hover:underline hover:cursor-pointer w-fit;
}
</style>
