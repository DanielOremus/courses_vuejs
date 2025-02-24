<template>
  <main-master-page>
    <users-section />
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import UsersSection from "@/components/users/UsersSection.vue"
export default {
  name: "UsersView",
  components: {
    MainMasterPage,
    UsersSection,
  },
}
</script>

<style lang="scss" scoped></style>
