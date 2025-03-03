<template>
  <main-master-page>
    <div class="image-wrapper">
      <img src="@/assets/images/task-img.png?url" />
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

<style lang="scss" scoped>
.image-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
</style>
