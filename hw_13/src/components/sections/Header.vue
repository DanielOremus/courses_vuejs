<template>
  <header class="header sticky top-0 z-10">
    <div class="navigation-wrapper">
      <div class="navigation-container">
        <slot>
          <router-link :to="{ name: 'home' }">
            <div class="homework-data">
              <span class="homework-number">Homework 13</span>
              <span class="author text-primary">by Daniel Oremus</span>
            </div>
          </router-link>
          <nav class="main-navigation grow text-xl">
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
        </slot>
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
          routeName: "products",
          activeClass: "active",
          title: "Продукти",
        },
        {
          routeName: "suppliers",
          activeClass: "active",
          title: "Постачальники",
        },
        {
          routeName: "contacts",
          activeClass: "active",
          title: "Контакти",
        },
        {
          routeName: "shoppingRules",
          activeClass: "active",
          title: "Правила купівлі",
        },
        {
          routeName: "productsSelector",
          activeClass: "active",
          title: "Фільтрування",
        },
        {
          routeName: "productsEditor",
          activeClass: "active",
          title: "Створення",
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.navigation-container {
  @apply flex justify-between px-40 border-b-2 border-b-primary bg-surface-900 whitespace-nowrap;
  height: var(--header-height);
}
.homework-data {
  @apply h-full flex flex-col justify-center text-center;
}
.homework-number {
  @apply text-2xl leading-4 font-medium text-surface-300;
}
.nav-links {
  @apply h-full flex list-none justify-end gap-6 items-center;
}
</style>
