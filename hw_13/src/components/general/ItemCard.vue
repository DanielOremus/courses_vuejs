<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <Image
          :pt="{
            image: 'w-40 object-contain h-48 mx-auto',
          }"
          :src="item.imgSrc"
        />
      </slot>
    </div>
    <div class="card-content">
      <slot>
        <div class="flex flex-col text-lg">
          <span>{{ item.name }}</span>
          <span class="font-bold">{{ item.price }} грн.</span>
        </div>
      </slot>
    </div>
    <div class="card-footer">
      <slot name="footer">
        <Button
          fluid
          :pt="{
            root: 'text-lg py-1',
          }"
          >Купити</Button
        >
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.card {
  @apply p-4 flex flex-col gap-2 bg-zinc-800 rounded-xl;
}
</style>
