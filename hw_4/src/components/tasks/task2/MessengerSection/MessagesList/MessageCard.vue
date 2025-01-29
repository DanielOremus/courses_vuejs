<template>
  <div>
    {{ message.text }}
    <button @click="onLike">Like</button>
    <button @click="onDislike">Dislike</button>
    Likes: {{ message.likesCount }}
  </div>
</template>

<script>
export default {
  name: "MessageCard",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onLike() {
      this.emitLikesChange(this.message, 1)
    },
    onDislike() {
      this.emitLikesChange(this.message, -1)
    },
    emitLikesChange(message, deltaValue) {
      this.$emit("likesChange", { message, deltaValue })
    },
  },
}
</script>

<style lang="css" scoped>
button {
  font-size: 1rem;
  padding: 0.2em 0.5em;
  cursor: pointer;
}
</style>
