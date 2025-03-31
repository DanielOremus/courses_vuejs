<template>
  <div class="assignments-list">
    <items-list list-title="Розподілювач подарунків" :items="assignedPresents">
      <div
        v-if="assignedPresents.length"
        v-for="assignment in assignedPresents"
        class="text-lg"
      >
        {{ assignment.friend.name }} - {{ assignment.present.name }}
      </div>
    </items-list>
    <Divider />
    <div class="flex gap-4 items-center mt-3">
      <Select
        :options="friendsList"
        placeholder="Виберіть друга"
        option-label="name"
        option-value="id"
        class="w-1/3"
        v-model="selectedFriend"
      />
      <Select
        :options="presentsList"
        placeholder="Виберіть подарунок"
        option-label="name"
        option-value="id"
        class="w-1/3"
        v-model="selectedPresent"
      />
      <Button @click="onAssign" :disabled="!isDataValid">Подарувати</Button>
    </div>
  </div>
</template>

<script setup>
import ItemsList from "@/components/general/ItemsList.vue"
import { useFriendsStore } from "@/stores/friends"
import { usePresentsStore } from "@/stores/presents"
import { storeToRefs } from "pinia"
import { computed, ref } from "vue"

const friendsStore = useFriendsStore()
const presentsStore = usePresentsStore()

const selectedFriend = ref(null)
const selectedPresent = ref(null)

const { friendsList, assignedPresents } = storeToRefs(friendsStore)
const { presentsList } = storeToRefs(presentsStore)

const isDataValid = computed(() => {
  return selectedFriend.value && selectedPresent.value
})

function onAssign() {
  friendsStore.assignPresent({
    friendId: selectedFriend.value,
    presentId: selectedPresent.value,
  })
  selectedFriend.value = null
  selectedPresent.value = null
}
</script>

<style lang="scss" scoped></style>
