<template>
  <MainMasterPage>
    <Task :task="getTaskById(this.$route.params.id)" />
  </MainMasterPage>
</template>

<script>
import MainMasterPage from "@/layouts/MainMasterPage.vue"
import { mapGetters } from "vuex"
import Task from "@/components/tasks/index.vue"
export default {
  name: "SpecificTask",
  components: {
    Task,
    MainMasterPage,
  },
  methods: {},
  computed: {
    ...mapGetters("task", ["tasksList", "getTaskById"]),
  },
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
