<template>
  <div class="condition-container">
    З випадаючого списку вибираємо клас квитка у літаку. Якщо
    <ol>
      <li>
        бізнес - виводимо елементи для вибору газети та коньяку (якщо вибрано
        коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес
        кают
      </li>
      <li>
        економ – виводимо елементи для вибору типу пива і чипсів, на фоні
        хмарки.
      </li>
    </ol>
  </div>
  <div class="main">
    <label>
      Ticket class:
      <select v-model="selectedTicketClass">
        <option v-for="ticket in tickedClasses" :value="ticket.value">
          {{ ticket.title }}
        </option>
      </select>
    </label>
    <div>
      <template v-if="selectedTicketClass === 'business'">
        <label>
          Newspaper
          <input
            type="checkbox"
            v-model="selectedAdditions.business.newspaper"
          />
        </label>
        <label>
          Cognac
          <input type="checkbox" v-model="selectedAdditions.business.cognac" />
        </label>
        <br />
        <label v-if="isCognacSelected">
          Do you want some snacks:
          <input type="checkbox" />
        </label>
      </template>
      <template v-else-if="selectedTicketClass === 'economy'">
        <label>
          Beer:
          <select v-model="selectedAdditions.economy.beerType">
            <option v-for="type in beerTypes" :value="type">
              {{ type }}
            </option>
          </select>
        </label>
        <label>
          Crisps:
          <select v-model="selectedAdditions.economy.crispsType">
            <option v-for="type in crispsTypes" :value="type">
              {{ type }}
            </option>
          </select>
        </label>
      </template>
    </div>
    <img :src="backgroundImgSrc" />
  </div>
</template>

<script>
const tickedClasses = [
  {
    title: "Choose ticket class",
    value: null,
  },
  {
    title: "Business",
    imgSrc:
      "https://png.pngtree.com/thumb_back/fw800/background/20240402/pngtree-beautiful-view-from-business-class-of-aircraft-image_15648573.jpg",
    value: "business",
  },
  {
    title: "Economy",
    imgSrc:
      " https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg",
    value: "economy",
  },
]
const beerTypes = ["Lager", "Ale", "Hybrid"]
const crispsTypes = ["Lays", "Pringles", "Chio"]
export default {
  name: "Task2",
  data() {
    return {
      selectedTicketClass: null,
      selectedAdditions: {
        business: {
          newspaper: false,
          cognac: false,
        },
        economy: {
          beerType: null,
          crispsType: null,
        },
      },
    }
  },
  computed: {
    isCognacSelected() {
      return this.selectedAdditions.business.cognac
    },
    tickedClasses() {
      return tickedClasses
    },
    beerTypes() {
      return beerTypes
    },
    crispsTypes() {
      return crispsTypes
    },
    backgroundImgSrc() {
      const ticketClass = tickedClasses.find(
        (ticket) => ticket.value === this.selectedTicketClass
      )
      return ticketClass.imgSrc ?? null
    },
  },
}
</script>

<style lang="css" scoped>
.condition-container {
  ol {
    list-style-position: inside;
  }
}
.main {
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
}
</style>
