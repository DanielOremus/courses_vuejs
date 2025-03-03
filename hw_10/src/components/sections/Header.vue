<template>
  <header class="header">
    <div class="navigation-wrapper">
      <div class="navigation-container">
        <router-link :to="{ name: 'home' }">
          <div class="homework-data">
            <span class="homework-number">Homework 10</span>
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
          routeName: "tasksManager",
          activeClass: "active",
          title: "Розподілювач завдань",
        },
        {
          routeName: "users",
          activeClass: "active",
          title: "Користувачі",
        },
        {
          routeName: "tasks",
          activeClass: "active",
          title: "Завдання",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/sections/header.scss";
</style>
