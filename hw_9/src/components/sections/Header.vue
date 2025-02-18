<template>
  <header class="header">
    <div class="navigation-wrapper">
      <div class="navigation-container">
        <div class="homework-data">
          <span class="homework-number">Homework 9</span>
          <span class="author">by Daniel Oremus</span>
        </div>
        <nav class="main-navigation">
          <ul class="nav-links">
            <li class="nav-item" v-for="(item, i) in navItems" :key="i">
              <router-link
                :active-class="item.activeClass"
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
          routeName: "shop",
          activeClass: "active",
          title: "Магазин",
        },
        {
          routeName: "paymentRules",
          activeClass: "active",
          title: "Правила оплати",
        },
        {
          routeName: "contacts",
          activeClass: "active",
          title: "Контакти",
        },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.navigation-container {
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding-inline: 8rem;
}
.navigation-wrapper {
  position: sticky;
}
.homework-data {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.homework-number {
  font-size: 1.5rem;
  line-height: 1em;
  font-weight: 500;
}
.author {
  color: hsla(160, 100%, 37%, 1);
}
.main-navigation {
  flex-basis: 60%;
  font-size: 1.25rem;
}
.nav-links {
  height: 100%;
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
}

@media only screen and (max-width: 960px) {
  .navigation-container {
    padding-inline: 4rem;
  }
}
</style>
