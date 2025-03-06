<template>
  <div class="education-plan__list">
    <div v-for="(subject, i) in list" :key="i">
      {{ subject.lesson.name }} - {{ subject.teacher.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationPlanList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
