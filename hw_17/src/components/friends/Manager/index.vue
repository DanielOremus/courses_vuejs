<template>
  <div>
    <friends-list :friends="friendsList" @delete-friend="onDelete" />
    <Divider />
    <div class="flex gap-8 items-center mt-3">
      <span class="text-lg">Новий друг:</span>
      <InputText placeholder="Ім'я" v-model="friendName" />
      <Button @click="onCreate">Додати</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import FriendsList from "../List/index.vue"
import { useFriendsStore } from "@/stores/friends"
import { storeToRefs } from "pinia"

const friendsStore = useFriendsStore()
const { friendsList } = storeToRefs(friendsStore)
const friendName = ref(null)

function onCreate() {
  friendsStore.create({ name: friendName.value })
  friendName.value = null
}
function onDelete(id) {
  friendsStore.delete(id)
}
</script>

<style lang="css" scoped></style>
