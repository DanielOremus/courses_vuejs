<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="footer-container">
        <h1 class="text-center mb-6 text-xl font-semibold">Галерея</h1>
        <div class="gallery-container">
          <Image
            v-for="img in gallery"
            image-class="rounded-xl mx-auto w-64"
            :src="img"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "GalleryFooter",
  data() {
    return {
      gallery: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnTGkIB2sH9g_DV--jgqqpUopKW0CgSegdzGWhHjeuwepZIai74Gyy9g3xL8-Vjdfam4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaVJLN_Gxyz3uN2VoAm40fCjXfeh6t7fpoQ&s",
        "https://ybis.ru/wp-content/uploads/2023/10/krasivyi-les-21.webp",
        "https://fasad.lviv.ua/wp-content/uploads/2018/08/ad0c54ec652553bffcd9096f27a7f5db.jpeg",
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.footer-container {
  @apply bg-surface-800 text-xl py-5;
}
.gallery-container {
  @apply grid grid-cols-2 lg:grid-cols-3 gap-y-8 xl:grid-cols-4 justify-around items-center;
}
</style>
