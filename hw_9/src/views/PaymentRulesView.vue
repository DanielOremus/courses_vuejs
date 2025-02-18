<template>
  <main-master-page>
    <div class="rules">
      При отриманні <br />
      Переказ на картку <br />
      Записати у зошит
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "PaymentRules",
  components: {
    MainMasterPage,
  },
}
</script>

<style lang="css" scoped>
.rules {
  margin: 1.5rem;
  font-size: 1.1rem;
}
</style>
