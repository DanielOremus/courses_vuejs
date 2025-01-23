<template>
  <div class="condition-container">
    Елемент тренажера англійської. Виводимо зображення елемента і слово.
    Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре.
    Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо
    фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).
  </div>
  <div class="main">
    <div class="card" :class="cardClass">
      <img :src="currentWord.imgSrc" />
      <span>{{ currentWord.en }}</span>
      <span> Your translate </span>
      <input type="text" v-model.trim="userAns" />
      <button :disabled="isUserAnsEmpty" @click="onCheck">Check</button>
    </div>
    <span>{{ message }}</span>
  </div>
</template>

<script>
const words = [
  {
    id: 1,
    en: "table",
    ua: "стіл",
    imgSrc:
      "https://www.garpa.ch/images/product/588/gartentisch-teak-massiv-colchester-beistelltisch-quadratisch-54x54cm-niedrig-hochwertig-frontansicht_550x550.jpg",
  },
  {
    id: 2,
    en: "juice",
    ua: "сік",
    imgSrc:
      "https://pizzavirtuoso.com.ua/wp-content/uploads/2024/04/600x580_0_f9a18c75151350f3b0b31e99513a31e3@800x773_0x59f91261_3098860101394186829-600x580-1.jpeg",
  },
  {
    id: 3,
    en: "donut",
    ua: "пончик",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/6402/6402298.png",
  },
  {
    id: 4,
    en: "coffee",
    ua: "кава",
    imgSrc:
      "https://coffee365.com.ua/wp-content/uploads/2021/05/hero-002-free-img-1.png",
  },
]
const correctWordsIds = []
export default {
  name: "Task3",
  data() {
    return {
      currentWord: null,
      userAns: null,
      cardClass: null,
      message: null,
    }
  },
  computed: {
    isUserAnsEmpty() {
      return !this.userAns
    },
    isAllCorrect() {
      return correctWordsIds.length === words.length
    },
  },
  methods: {
    getRandomWord() {
      let randomIndex
      do {
        randomIndex = Math.floor(Math.random() * words.length)
      } while (correctWordsIds.includes(words[randomIndex].id))
      return words[randomIndex]
    },
    onCheck() {
      const isCorrect = this.checkAnswer()
      if (isCorrect) {
        correctWordsIds.push(this.currentWord.id)
        this.message = "Excellent!"
        this.cardClass = "correct"
      } else {
        this.message = "Incorrect, try again!"
        this.cardClass = "incorrect"
      }
      this.userAns = null
      this.resetAfterDelay(3000)
    },
    checkAnswer() {
      return this.userAns.toLowerCase() === this.currentWord.ua
    },
    resetAfterDelay(delay) {
      setTimeout(() => {
        this.cardClass = null
        if (this.isAllCorrect) {
          this.message = "Game is over"
        } else {
          this.message = null
          this.currentWord = this.getRandomWord()
        }
      }, delay)
    },
  },
  created() {
    this.currentWord = this.getRandomWord()
  },
}
</script>

<style lang="css" scoped>
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
.card {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 200px;
  align-items: center;
  border: 2px solid transparent;
  img {
    width: 80%;
    height: 150px;
    object-fit: contain;
  }
  input {
    width: 100%;
  }
  button {
    width: 100%;
    font-size: 1.1rem;
    padding: 0.5em 1em;
    cursor: pointer;
  }
}
.correct {
  border-color: green;
}
.incorrect {
  border-color: red;
}
</style>
