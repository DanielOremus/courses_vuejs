<template>
  <div class="main-layout flex-grow flex flex-col">
    <Header />
    <div class="content flex-grow">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/sections/Header.vue"
import Footer from "@/components/sections/Footer.vue"
export default {
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped></style>
