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
    <div class="actions-container">
      <button class="action-btn cancel-btn" @click="onCancel">Відміна</button>
      <button class="action-btn save-btn" @click="onSave">
        {{ btnTitle }}
      </button>
    </div>
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
  computed: {
    btnTitle() {
      return this.userInitData ? "Зберегти" : "Створити"
    },
  },
  watch: {
    userInitData(newValue) {
      this.user = { ...newValue }
    },
  },
  methods: {
    onCancel() {
      this.$emit("edit-cancel")
    },
    onSave() {
      this.$emit("edit-save", this.user)
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
.actions-container {
  display: flex;
  gap: 1.5rem;
}
.actions-container .action-btn {
  flex-grow: 1;
}
</style>
