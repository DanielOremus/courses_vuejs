<template>
  <div class="card">
    <div>
      <span class="card__input-title">Card Number</span>
      <input
        class="card__input"
        type="text"
        maxlength="19"
        v-model="numberValue"
      />
    </div>
    <div>
      <div>
        <span class="card__input-title">Expiry Date</span>
        <input
          class="card__input"
          type="text"
          maxlength="5"
          v-model="dateValue"
        />
      </div>
      <div>
        <span class="card__input-title">Secure Code</span>
        <input
          class="card__input"
          type="text"
          maxlength="3"
          v-model="secureCodeValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankCard",
  props: {
    cardNumber: {
      type: String,
    },
    expiryDate: {
      type: String,
    },
    secureCode: {
      type: String,
    },
  },
  computed: {
    numberValue: {
      get() {
        return this.getFormattedCardNumber(this.cardNumber)
      },
      set(newValue) {
        newValue = newValue.replace(/\D/g, "")
        this.$emit("update:cardNumber", newValue)
      },
    },
    dateValue: {
      get() {
        return this.getFormattedDate(this.expiryDate)
      },
      set(newValue) {
        newValue = newValue.replace(/\D/g, "")
        this.$emit("update:expiryDate", newValue)
      },
    },
    secureCodeValue: {
      get() {
        return this.secureCode
      },
      set(newValue) {
        newValue = newValue.replace(/\D/g, "")
        this.$emit("update:secureCode", newValue)
      },
    },
  },
  methods: {
    getFormattedCardNumber(number) {
      return number
        .toString()
        .replace(/(\d{4})/g, "$1 ")
        .trim()
    },
    getFormattedDate(date) {
      return date.toString().replace(/(\d{2})(\d{0,2})/, "$1/$2")
    },
  },
}
</script>

<style lang="css" scoped>
.card {
  background-color: rgb(40, 41, 42);
  width: 450px;
  padding: 1rem;
}
.card > div:last-child {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}
.card__input-title {
  text-transform: uppercase;
  font-size: 1.25rem;
}
.card__input {
  width: 100%;
  outline: none;
  border: none;
  font-size: 1.4rem;
  margin-top: 0.5rem;
  padding: 0.5em 1em;
  border-radius: 5px;
}
</style>
