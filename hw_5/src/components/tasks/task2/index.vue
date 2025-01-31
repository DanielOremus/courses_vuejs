<template>
  <div class="condition-container">
    Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення
    і ставити лайки.
  </div>
  <div class="main">
    <messenger-section></messenger-section>
  </div>
</template>

<script>
import MessengerSection from "./MessengerSection/index.vue"
export default {
  name: "Task1",
  components: {
    MessengerSection,
  },
  computed: {},
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
