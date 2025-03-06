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
            <li class="nav-item">
              <div class="user-section">
                <template v-if="isAuthenticated">
                  Вітаємо, {{ username }}
                  <fa-icon
                    class="logout-icon"
                    :icon="['fas', 'right-from-bracket']"
                    @click="onLogout"
                  />
                </template>
                <router-link
                  v-else
                  exact-active-class="active"
                  :to="{ name: 'login' }"
                >
                  Вхід
                </router-link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapState } from "pinia"
import { useAuthStore } from "@/stores/auth"
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
          routeName: "lessonsSelect",
          activeClass: "active",
          title: "Уроки",
        },
        {
          routeName: "teachers",
          activeClass: "active",
          title: "Вчителі",
        },
      ],
    }
  },
  computed: {
    ...mapState(useAuthStore, ["isAuthenticated", "username"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["logout"]),
    onLogout() {
      this.logout()
      this.$router.push({ name: "login" })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/components/sections/header.scss";
</style>
