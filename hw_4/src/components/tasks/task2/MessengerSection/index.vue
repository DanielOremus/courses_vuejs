<template>
  <div>
    <messages-list
      :messages-list="messagesList"
      @likes-change="onLikesChange"
    ></messages-list>
    <div>
      <input
        type="text"
        placeholder="Type a new message"
        v-model="messageText"
      />
      <button :disabled="!isTextValid" @click="onSend">Send</button>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid"
import MessagesList from "./MessagesList/index.vue"
export default {
  name: "MessengerSection",
  components: {
    MessagesList,
  },
  data() {
    return {
      messageText: null,
      messagesList: [],
    }
  },
  computed: {
    isTextValid() {
      return this.messageText
    },
  },
  methods: {
    onSend() {
      this.messagesList.push({
        id: uuidv4(),
        text: this.messageText,
        likesCount: 0,
      })
      this.messageText = null
    },
    onLikesChange({ message, deltaValue }) {
      message.likesCount += deltaValue
    },
  },
}
</script>

<style lang="css" scoped>
button {
  font-size: 1rem;
  padding: 0.1em 0.5em;
}
button:not(:disabled) {
  cursor: pointer;
}
</style>
