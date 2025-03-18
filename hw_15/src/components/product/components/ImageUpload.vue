<template>
  <FileUpload
    :name="name"
    @upload="onUpload($event)"
    accept="image/*"
    :maxFileSize="5 * 1024 * 1024"
    auto
    choose-label="Вибрати"
    :show-upload-button="false"
    cancel-label="Відмінити"
    :file-limit="1"
  >
    <template #empty>
      <span class="text-lg"> {{ caption }} </span>
    </template>
  </FileUpload>
</template>

<script>
export default {
  name: "ImageUpload",
  props: {
    name: {
      type: String,
      default: "image",
    },
    caption: {
      type: String,
      default: "Перетягніть і відпустіть зображення, щоб його завантажити",
    },
  },
  methods: {
    onUpload(event) {
      this.$emit("file-upload", event)
    },
  },
}
</script>

<style lang="scss" scoped></style>
