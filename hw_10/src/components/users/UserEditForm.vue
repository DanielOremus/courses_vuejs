<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label>
        <span>Ім'я</span>
        <input type="text" v-model="user.name" />
      </label>
      <label>
        <span>Рік народження</span>
        <input type="text" v-model.number="user.yearOfBirth" />
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserEditForm",
  props: {
    userInitData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      user: null,
    }
  },
  created() {
    this.user = { ...this.userInitData }
  },
}
</script>

<style lang="scss" scoped></style>
