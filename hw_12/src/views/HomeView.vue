<template>
  <main-master-page>
    <p class="caption">
      Вітаємо на сайті школи <br />У нашій школі учень сам вибирає уроки та
      вчителів<br />
      Увійдіть для повноціного використання
    </p>
  </main-master-page>
</template>

<script>
export default {
  name: "HomeView",
}
</script>

<style lang="scss" scoped>
.caption {
  font-size: 1.2rem;
  position: absolute;
  top: 25%;
  left: 50%;
  translate: -50%;
}
</style>
