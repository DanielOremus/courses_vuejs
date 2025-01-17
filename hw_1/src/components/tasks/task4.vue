<template>
  <div>
    <h2>Task {{ $route.params.id }}</h2>
    <div class="condition-container">
      Condition: “Рахунок у банку”. Вимоги:
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
      При зміні суми :
      <ul class="condition-todo">
        <li>якщо було зняття, то суму відоражати червоним</li>
        <li>якщо було зарахування, то суму відображати зеленим</li>
        <li>
          якщо сума валюти менша за 100 то відображати червоним кольором, інакше
          - зеленим
        </li>
      </ul>
    </div>
    <div class="main">
      <span>
        Current balance:
        <span :class="[operationClass]">{{ currentBalance }}₴</span>
      </span>
      <div>
        <label
          >Deposit:
          <input type="number" v-model.number="depositValue" />
        </label>
        <button @click="onDeposit">Deposit</button>
      </div>
      <div>
        <label
          >Withdraw:
          <input type="number" v-model.number="withdrawValue" />
        </label>

        <button @click="onWithdraw">Withdraw</button>
        + {{ withdrawCommission.toFixed(2) }}₴ commission
      </div>
      <span>Commission for service: {{ lastOperationCommission }}₴</span>
      <hr class="separator" />
      <span :class="[dollarClassColor]"
        >Sum in dollars: {{ sumInDollars.toFixed(2) }}$</span
      >
      <span :class="[euroClassColor]"
        >Sum in euro: {{ sumInEuro.toFixed(2) }}€</span
      >
      <span v-if="errorMessage.length > 0" class="error"
        >Error: {{ errorMessage }}</span
      >
    </div>
  </div>
</template>

<script>
const dollarRate = 42.32
const euroRate = 43.34
export default {
  name: "Tas4",
  data() {
    return {
      currentBalance: 0,
      depositValue: 0,
      withdrawValue: 0,
      errorMessage: "",
      operationTax: 0.03,
      operationClass: null,
      lastOperationCommission: 0,
    }
  },
  computed: {
    sumInEuro() {
      return this.convert(euroRate)
    },
    sumInDollars() {
      return this.convert(dollarRate)
    },
    depositCommission() {
      return this.depositValue * this.operationTax
    },
    withdrawCommission() {
      return this.withdrawValue * this.operationTax
    },
    euroClassColor() {
      if (this.sumInEuro < 100) return "red"
      return "green"
    },
    dollarClassColor() {
      if (this.sumInDollars < 100) return "red"
      return "green"
    },
  },
  methods: {
    convert(currencyRate) {
      return this.currentBalance / currencyRate
    },
    onDeposit() {
      const errorMsg = this.validateValue(1, this.depositValue)
      if (errorMsg) {
        this.setErrorMessage(errorMsg)
        return
      }

      this.currentBalance += this.depositValue - this.depositCommission
      this.operationClass = "deposit"
      this.lastOperationType = 1
      this.lastOperationCommission = this.depositCommission
      this.depositValue = 0
    },
    onWithdraw() {
      const valueWithCommission = this.withdrawValue + this.withdrawCommission
      const errorMsg = this.validateValue(0, valueWithCommission)
      if (errorMsg) {
        this.setErrorMessage(errorMsg)
        return
      }
      this.currentBalance -= valueWithCommission
      this.operationClass = "withdraw"
      this.lastOperationType = 0
      this.lastOperationCommission = this.withdrawCommission
      this.withdrawValue = 0
    },
    validateValue(type, value) {
      //0-withdraw
      //1-deposit
      this.setErrorMessage("")
      let displayValueType
      switch (type) {
        case 0:
          displayValueType = "Withdraw"
          break
        case 1:
          displayValueType = "Deposit"
          break
        default:
          return "Something went wrong"
      }
      if (value <= 0) {
        return `${displayValueType} value must be a positive number`
      }
      if (type === 0) {
        if (this.currentBalance < value) {
          return `Not enough money on balance`
        }
      }
      return null
    },
    setErrorMessage(message) {
      this.errorMessage = message
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
.separator {
  margin-block: 1rem;
}
.error {
  color: rgb(167, 0, 0);
}
.withdraw,
.red {
  color: red;
}
.deposit,
.green {
  color: green;
}
</style>
