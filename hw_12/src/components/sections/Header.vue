<template>
  <header class="header">
    <div class="navigation-wrapper">
      <div class="navigation-container">
        <router-link :to="{ name: 'home' }">
          <div class="homework-data">
            <span class="homework-number">Homework 12</span>
            <span class="author">by Daniel Oremus</span>
          </div>
        </router-link>
        <nav class="main-navigation">
          <ul class="nav-links">
            <li class="nav-item" v-for="(item, i) in navItems" :key="i">
              <router-link
                :exact-active-class="item.activeClass"
                :to="{ name: item.routeName }"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navItems: [
        {
          routeName: "home",
          activeClass: "active",
          title: "Головна",
        },
        {
          routeName: "lessons",
          activeClass: "active",
          title: "Уроки",
        },
        // {
        //   routeName: "teachers",
        //   activeClass: "active",
        //   title: "Вчителі",
        // },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/sections/header.scss";
</style>
