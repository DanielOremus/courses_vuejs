<template>
  <main-master-page>
    <div class="content">
      Цей магазин належить програмісту на фрілансі. <br />
      Тому:
      <ul>
        <li>магазин процює коли хоче</li>
        <li>товари відсилає швидко</li>
        <li>на запитання відповідає коли висипається</li>
      </ul>
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "HomeView",
  components: {
    MainMasterPage,
  },
}
</script>

<style lang="css" scoped>
.content {
  margin: 1.5rem;
  font-size: 1.1rem;
}
ul {
  list-style: circle inside;
}
</style>
