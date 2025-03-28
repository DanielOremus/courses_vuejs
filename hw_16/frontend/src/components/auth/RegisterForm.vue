<template>
  <Form
    v-slot="$credentials"
    class="flex flex-col gap-4"
    :validate-on-submit="true"
    :validate-on-value-update="false"
    :resolver="validator"
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
    <Message v-if="error" size="small" variant="simple" severity="error">
      {{ errorMessage }}
    </Message>
    <Button type="submit">
      {{ $t(`pages.register.buttons.signin`) }}
    </Button>
  </Form>
</template>

<script>
import { useAuthStore } from "@/stores/auth"
import { mapActions, mapState } from "pinia"
import { yupResolver } from "@primevue/forms/resolvers/yup"
import { registerFormSchema } from "@/validators/auth"
export default {
  name: "LoginForm",
  data() {
    return {
      validator: yupResolver(registerFormSchema),
    }
  },
  computed: {
    ...mapState(useAuthStore, ["error"]),
    errorMessage() {
      const errorStatus = this.error?.response.request.status
      if (!this.error || errorStatus !== 400) return null
      const resMsg = this.error?.response.data.msg
      if (typeof resMsg !== "string") {
        return Array.isArray(resMsg) ? resMsg[0].msg : resMsg.msg
      }
      return this.error?.response.data.msg
    },
  },
  methods: {
    ...mapActions(useAuthStore, ["signIn"]),
    async onSubmit(form) {
      if (!form.valid) return
      await this.signIn({ ...form.values, type: "register" })
      if (!this.error) this.$router.push({ name: "home" })

      //TODO: add error render
    },
  },
}
</script>

<style lang="css" scoped>
.login-link {
  @apply text-slate-400 text-sm hover:underline hover:cursor-pointer w-fit;
}
</style>
