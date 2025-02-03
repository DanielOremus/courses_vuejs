<template>
  <div class="condition-container">
    Створити компонент - форму для вводу даних кредитної карти (на зразок
    поданого прикладу). При вводі “EXPIRY DATE” розділювач “/” додається
    автоматично.
  </div>
  <div class="main">
    <bank-card
      v-model:cardNumber="cardNumber"
      v-model:expiryDate="expiryDate"
      v-model:secureCode="secureCode"
    ></bank-card>
  </div>
</template>

<script>
import BankCard from "./BankCard/index.vue"
export default {
  name: "Task6",
  components: {
    BankCard,
  },
  data() {
    return {
      cardNumber: "",
      expiryDate: "",
      secureCode: "",
    }
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
</style>
