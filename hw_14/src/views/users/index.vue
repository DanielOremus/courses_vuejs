<template>
  <main-layout>
    <div class="wrapper my-20 grid gap-10 justify-center">
      <div>
        <h1 class="text-2xl text-center mb-8">Власноруч повторені списки</h1>
        <div class="flex gap-8">
          <paginated-list list-title="Список працівників" :items="usersList" />
          <paginated-exp-list
            list-title="Стаж працівників"
            :items="usersList"
          />
          <paginated-total-list :items="usersList" />
        </div>
      </div>
      <div>
        <h1 class="text-2xl text-center mb-8">
          Динамічний список через "режим"
        </h1>
        <div class="flex gap-8">
          <paginated-dynamic-list
            list-title="Список працівників"
            :pagination-mode="2"
            :items="usersList"
          />
          <paginated-dynamic-list
            :list-title="`Всього - ${usersList.length} ос.`"
            :items="usersList"
          />
          <paginated-dynamic-list
            list-title="Стаж працівників"
            :list-mode="2"
            :pagination-mode="2"
            :items="usersList"
          />
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import { useUsersStore } from "@/stores/users"
import { mapState } from "pinia"
import PaginatedList from "@/components/general/PaginatedList/index.vue"
import PaginatedExpList from "@/components/general/PaginatedList/PaginatedExpList.vue"
import PaginatedTotalList from "@/components/general/PaginatedList/PaginatedTotalList.vue"
import PaginatedDynamicList from "@/components/general/PaginatedDynamicList/index.vue"
export default {
  name: "UsersView",
  components: {
    PaginatedList,
    PaginatedExpList,
    PaginatedTotalList,
    PaginatedDynamicList,
  },
  computed: {
    ...mapState(useUsersStore, ["usersList"]),
  },
}
</script>

<style lang="scss" scoped></style>
