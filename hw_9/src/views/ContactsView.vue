<template>
  <main-master-page>
    <div class="info">
      Нас дуже легко знайти:
      <ol>
        <li>Потягом до ужгорода</li>
        <li>Шукаєте бабу Галю (вона покаже дорогу)</li>
      </ol>
      До зустрічі!!!
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
export default {
  name: "ContactsView",
  components: {
    MainMasterPage,
  },
}
</script>

<style lang="css" scoped>
.info {
  margin: 1.5rem;
  font-size: 1.1rem;
}
ol {
  list-style-position: inside;
}
</style>
