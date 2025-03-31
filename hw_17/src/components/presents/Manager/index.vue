<template>
  <div>
    <presents-list :presents="presentsList" @delete-present="onDelete" />
    <Divider />
    <div class="flex gap-8 items-center mt-3">
      <span class="text-lg">Новий подарунок:</span>
      <InputText placeholder="Ім'я" v-model="presentName" />
      <Button @click="onCreate">Додати</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import PresentsList from "../List/index.vue"
import { usePresentsStore } from "@/stores/presents"
import { storeToRefs } from "pinia"

const presentsStore = usePresentsStore()
const { presentsList } = storeToRefs(presentsStore)
const presentName = ref(null)

function onCreate() {
  presentsStore.create({ name: presentName.value })
  presentName.value = null
}
function onDelete(id) {
  presentsStore.delete(id)
}
</script>

<style lang="css" scoped></style>
