<template>
  <div class="education-plan__container">
    <h2 class="education-plan__title">Навчальний план</h2>
    <education-plan-list
      class="education-plan__list"
      :list="getPopulatedEducationList(educationList)"
    />
  </div>
</template>

<script>
import { parseLessonsTeachersPairs } from "@/stores/helpers/lessons"
import { mapState } from "pinia"
import { useLessonsStore } from "@/stores/lessons"
import EducationPlanList from "@/components/lessons/EducationPlanList.vue"
export default {
  name: "EducationPlanView",
  components: {
    EducationPlanList,
  },
  computed: {
    ...mapState(useLessonsStore, ["getPopulatedEducationList"]),
    educationList() {
      const pairs = this.$route.params.lessonTeacherIds
      return parseLessonsTeachersPairs(pairs)
    },
  },
}
</script>

<style lang="scss" scoped>
.education-plan__container {
  font-size: 1.15rem;
  margin: 0 auto;
  margin-top: 5rem;
  width: fit-content;
  padding-inline: clamp(1rem, 5vw, 8rem);
  padding-block: 3rem;
  background-color: rgb(0, 0, 0);
  border-radius: 15px;
}
.education-plan__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1rem;
}
.education-plan__title {
  margin-bottom: 2rem;
  text-align: center;
}
</style>
