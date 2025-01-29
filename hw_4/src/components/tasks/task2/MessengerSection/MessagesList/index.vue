<template>
  <div>
    <message-card
      v-for="message in messagesList"
      :key="message.id"
      :message="message"
      @likesChange="onLikesChange"
    ></message-card>
  </div>
</template>

<script>
import MessageCard from "./MessageCard.vue"
export default {
  name: "MessagesList",
  components: {
    MessageCard,
  },
  props: {
    messagesList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onLikesChange(payload) {
      this.$emit("likesChange", payload)
    },
  },
}
</script>

<style lang="scss" scoped></style>
