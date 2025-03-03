<template>
  <tr class="user">
    <td class="name">{{ user.name }}</td>
    <td class="age">{{ getUserAge(user.yearOfBirth) }}</td>
    <td>
      <div class="actions">
        <button class="action-btn edit-btn" @click="onEdit">Редагувати</button>
        <button class="action-btn delete-btn" @click="onDelete">
          Видалити
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "UserRow",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getUserAge(yearOfBirth) {
      return new Date().getFullYear() - yearOfBirth
    },
    onEdit() {
      this.$emit("user-edit")
    },
    onDelete() {
      this.$emit("user-delete")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/users/user_row.scss";
</style>
