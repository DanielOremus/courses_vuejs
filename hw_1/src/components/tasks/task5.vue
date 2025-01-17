<template>
  <div>
    <h2>Task {{ $route.params.id }}</h2>
    <div class="condition-container">
      Додаток містить масив об’єктів (логін, пароль) -- інсуючі логіни і паролі.
      Користувач вводить логін і пароль, а програма повідомляє чи може
      користувач бути авторизованим (чи є він одним з масиву).
    </div>
    <div class="main">
      <label
        >Login:
        <input type="text" v-model="userLogin" />
      </label>
      <label
        >Password:
        <input type="text" v-model="userPassword" />
      </label>
      <button class="login-btn" @click="onLogin">Login</button>
    </div>
  </div>
</template>

<script>
const users = [
  {
    login: "Ivan",
    password: "hash1",
  },
  {
    login: "Petro",
    password: "hash2",
  },
  {
    login: "Stepan",
    password: "hash3",
  },
]
export default {
  name: "Task5",
  data() {
    return {
      userLogin: "",
      userPassword: "",
    }
  },
  methods: {
    onLogin() {
      const user = users.find(
        ({ login, password }) =>
          login === this.userLogin && password === this.userPassword
      )

      if (!user) {
        alert("Incorrect login or password!")
      } else {
        alert("You've successfully logged in")
      }
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
.login-btn {
  width: fit-content;
  font-size: 1.2rem;
  padding: 0.2em 0.5em;
  margin-top: 0.5rem;
}
</style>
