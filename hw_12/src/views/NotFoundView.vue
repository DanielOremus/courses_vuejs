<template>
  <main-master-page>
    <div class="container">
      <span class="error-code">404</span>
      <span class="error-message"
        >Опаньки, ми не змогли знайти заданий ресурс</span
      >
      <button class="home-btn" @click="pushToHome">На головну</button>
    </div>
  </main-master-page>
</template>

<script>
export default {
  name: "NotFoundView",
  methods: {
    pushToHome() {
      this.$router.push({ name: "home" })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  left: 50%;
  top: 25%;
  translate: -50%;
  white-space: nowrap;
  display: grid;
  justify-items: center;
}
.error-code {
  font-size: 2.5rem;
  font-weight: 500;
}
.error-message {
  font-size: 1.35rem;
}
.home-btn {
  margin-top: 1rem;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  color: rgb(15, 15, 15);
  transition: background 0.2s ease;
  background-color: hsl(160, 99%, 41%);
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.home-btn:hover {
  background-color: hsl(160, 100%, 50%);
}
</style>
