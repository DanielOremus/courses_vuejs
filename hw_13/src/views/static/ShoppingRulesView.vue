<template>
  <gallery-layout>
    <div class="my-32 text-2xl flex justify-center">
      <div>
        <h1 class="mb-2">Правила купівлі:</h1>
        <ul class="rules-list text-xl list-inside">
          <li>Купуємо багато</li>
          <li>Платимо швидко</li>
          <li>Насолоджуємося товаром</li>
        </ul>
      </div>
    </div>
  </gallery-layout>
</template>

<script>
export default {
  name: "ShoppingRulesView",
}
</script>

<style lang="css" scoped>
.rules-list {
  list-style-type: disc;
}
</style>
