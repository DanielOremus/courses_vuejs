<template>
  <div>
    <h2>Task {{ $route.params.id }}</h2>
    <div class="condition-container">
      Condition: “Рахунок у банку” <br />
      Вимоги:
      <ol class="condition-todo">
        <li>
          Спочатку сума дорівнює 0грн. Змінити суму у гривнях можна або
          зарахуванням на рахунок, або зняттям.
        </li>
        <li>
          Сума автоматично переводиться у долари та євро (фіксований курс
          задається у data).
        </li>
        <li>
          можливість зарахувати суму (контролювати, щоб не була від’ємною)
        </li>
        <li>можливість зняти (щоб не можна зняти більше ніж є на рахунку)</li>
        <li>
          при виконанні зняття і зарахування коштів вираховувати 3% від суми
          (відображати кількість відсотків автоматично)
        </li>
      </ol>
    </div>
    <div class="main">
      Current balance {{ currentBalance }}₴
      <div>
        <label
          >Deposit:
          <input type="number" v-model="depositValue" />
        </label>
        <button @click="onDeposit">Deposit</button>
      </div>
      <div>
        <label
          >Withdraw:
          <input type="number" v-model="withdrawValue" />
        </label>
        <button @click="onWithdraw">Withdraw</button>
      </div>
      <span>Percantage for serice: {{}}₴</span>
      <hr />
      <span>Sum in dollars: {{ sumInDollars.toFixed(4) }}$</span>
      <span>Sum in euro: {{ sumInEuro.toFixed(4) }}€</span>
      <span v-if="errorMessage.length > 0">Error: {{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
const
export default {
  name: "Task3",
  data() {
    return {
      currentBalance: 87,
      depositValue: 0,
      withdrawValue: 0,
      dollarRate: 42.32,
      euroRate: 43.34,
      errorMessage: "",
      taxPercentage = 0.03
    }
  },
  computed: {
    sumInEuro() {
      return this.convertToOtherCurrency(this.euroRate)
    },
    sumInDollars() {
      return this.convertToOtherCurrency(this.dollarRate)
    },
    sumWithoutTax()
      return this
    }
  },
  methods: {
    convertToOtherCurrency(rate) {
      return this.currentBalance / rate
    },
    onDeposit() {
      const isValid = this.validateValue("deposit", this.depositValue)
      if (isValid)
        this.currentBalance += this.getSumWithoutTax(this.depositValue)
    },
    onWithdraw() {
      const isValid = this.validateValue("withdraw", this.withdrawValue)
      if (isValid)
        this.currentBalance -= this.getSumWithoutTax(this.withdrawValue)
    },
    validateValue(type, value) {
      if (value <= 0) {
        this.setErrorMessage("Value must be a positive number")
        return false
      }
      if (type === "withdraw") {
        if (this.currentBalance < value) {
          this.setErrorMessage("Value must be lte current balance")
          return false
        }
      }
      this.setErrorMessage("")
      return true
    },
    setErrorMessage(message) {
      this.errorMessage = message
    },
    getSumWithoutTax(sum) {
      return sum * (1 - taxPercentage)
    },
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
button {
  width: fit-content;
  font-size: 1.2rem;
}
</style>
