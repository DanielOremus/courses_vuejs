<template>
  <input
    type="text"
    placeholder="Type a URL to js file"
    :class="{ incorrect: !isUrlCorrect }"
    v-model="url"
  />
</template>

<script>
export default {
  name: "UrlInput",
  props: {
    modelValue: {
      type: String,
    },
    modelModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isUrlCorrect: true,
    }
  },
  computed: {
    url: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        if (this.modelModifiers.checkPath)
          this.isUrlCorrect = this.checkUrl(newValue)
        this.$emit("update:modelValue", newValue)
      },
    },
  },
  methods: {
    checkUrl(newValue) {
      return newValue === "" || /^([\w\-\/]+\/)*[\w\-]+\.js$/.test(newValue)
    },
  },
}
</script>

<style lang="css" scoped>
input {
  width: fit-content;
  font-size: 1.2rem;
  padding: 0.3em 0.8em;
  border-radius: 8px;
  outline: none;
  border: 3px transparent solid;
  background-color: rgb(54, 54, 54);
  color: var(--color-text);
}
input:focus {
  border: 3px hsla(160, 100%, 37%, 1) solid;
}
.incorrect {
  background-color: rgb(173, 0, 0);
}
</style>
