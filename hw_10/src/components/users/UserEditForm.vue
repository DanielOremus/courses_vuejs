<template>
  <form class="user-form" @submit.prevent="onSubmit">
    <label class="label">
      Ім'я:
      <my-input class="input" type="text" v-model="user.name" />
    </label>
    <label class="label">
      Рік народження:
      <my-input class="input" type="number" v-model.number="user.yearOfBirth" />
    </label>
  </form>
</template>

<script>
import MyInput from "../general/MyInput.vue"
export default {
  name: "UserEditForm",
  components: {
    MyInput,
  },
  props: {
    userInitData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      user: {},
    }
  },
  watch: {
    userInitData(newValue) {
      this.user = { ...newValue }
    },
  },
}
</script>

<style lang="scss" scoped>
.user-form {
  display: grid;
  gap: 1.8rem;
  font-size: 1.3rem;
}
.input {
  display: block;
  margin-top: 0.5rem;
  width: 100%;
}
</style>
