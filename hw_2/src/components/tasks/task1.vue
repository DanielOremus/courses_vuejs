<template>
  <div class="condition-container">
    Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
    <ol>
      <li>якщо логін = Іван – колір повідомлення про помилку синій</li>
      <li>якщо хтось інший, то колір повідомлення червоний</li>
    </ol>
  </div>
  <div class="main">
    <label
      >Login:
      <input type="text" v-model.lazy="userLogin" />
    </label>
    <label
      >Password:
      <input type="text" v-model.lazy="userPassword" />
    </label>
    <img
      v-if="isLoginValid"
      width="200"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png"
      alt=""
    />
    <span v-else-if="!isLoginEmpty" :class="errorColorClass"
      >An error has occurred</span
    >
  </div>
</template>

<script>
const usersData = [
  {
    login: "petro",
    password: "hash2",
  },
  {
    login: "olga",
    password: "hash3",
  },
]
export default {
  name: "Task1",
  data() {
    return {
      userLogin: null,
      userPassword: null,
    }
  },
  computed: {
    isLoginEmpty() {
      return !this.userLogin
    },
    isLoginValid() {
      return (
        this.userLogin &&
        usersData.some((user) => user.login === this.userLogin.toLowerCase())
      )
    },
    errorColorClass() {
      if (this.userLogin.toLowerCase() === "ivan") return "blue"
      return "red"
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
.blue {
  color: blue;
}
.red {
  color: red;
}
</style>
