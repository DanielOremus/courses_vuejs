import { computed, reactive } from "vue"
import { useDefaultModuleObj } from "./helpers/defaultModuleObj"
import { defineStore, storeToRefs } from "pinia"
import { usePresentsStore } from "./presents"

export const useFriendsStore = defineStore("friends", () => {
  const template = useDefaultModuleObj("friends")
  const presentsStore = usePresentsStore()
  const { groupedFriendsList } = template
  const { groupedPresentsList } = storeToRefs(presentsStore)

  let assignedPresents = reactive([])

  const populatedAssignedPresents = computed(() => {
    return assignedPresents.map((item) => ({
      friend: groupedFriendsList.value[item.friendId],
      present: groupedPresentsList.value[item.presentId],
    }))
  })

  function assignPresent({ friendId, presentId }) {
    const assignmentIndex = assignedPresents.findIndex(
      (item) => item.friendId === friendId
    )
    if (assignmentIndex > -1) {
      assignedPresents[assignmentIndex].presentId = presentId
    } else {
      assignedPresents.push({ friendId, presentId })
    }
  }

  function deleteFriend(id) {
    template.delete(id)
    assignedPresents = reactive(
      assignedPresents.filter((item) => item.friendId !== id)
    )
  }

  return {
    ...template,
    assignPresent,
    assignedPresents: populatedAssignedPresents,
    delete: deleteFriend,
  }
})
