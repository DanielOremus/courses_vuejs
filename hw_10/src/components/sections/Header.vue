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

<style lang="css" scoped>
.navigation-container {
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding-inline: 8rem;
  border-bottom: 2px solid hsla(160, 100%, 37%, 1);
  background-color: rgb(15, 15, 15);
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
  color: var(--color-text);
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
