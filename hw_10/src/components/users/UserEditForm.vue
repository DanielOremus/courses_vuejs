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
        <loading-circle v-if="actionLoading" />
        <span v-else>
          {{ btnTitle }}
        </span>
      </button>
    </div>
  </form>
</template>

<script>
import MyInput from "../ui/MyInput.vue"
import LoadingCircle from "../general/LoadingCircle.vue"
export default {
  name: "UserEditForm",
  components: {
    MyInput,
    LoadingCircle,
  },
  props: {
    userInitData: {
      type: Object,
      default: null,
    },
    actionLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: {
        name: "",
        yearOfBirth: null,
      },
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
@import "@/assets/style/components/users/user_form.scss";
</style>
