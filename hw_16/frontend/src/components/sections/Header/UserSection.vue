<template>
  <div>
    <span v-if="isAuthenticated"
      >{{ user.name }}
      <i class="pi pi-sign-out" />
    </span>
    <router-link v-else :to="{ name: 'login' }">Вхід</router-link>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth"
import { mapState } from "pinia"
export default {
  name: "UserSection",
  computed: {
    ...mapState(useAuthStore, ["user", "isAuthenticated"]),
  },
}
</script>

<style lang="scss" scoped></style>
