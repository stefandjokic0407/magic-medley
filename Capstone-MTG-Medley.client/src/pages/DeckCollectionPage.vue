<template>


  <section class="container-fluid pageBg collectionPageViewHeight">

    <header class="row">
      <ClearNavBar />
    </header>

    <div class="row my-3">
      <div class="col-12 text-center">
        <h1>{{activeDeck.name}}</h1>
        <h4>Deck Rating: {{(activeDeck?.avgRating/activeDeck.rating?.length).toFixed(1)}}/5<i class="mdi mdi-star"></i>
        </h4>
        <div class="row">
          <div class="col-3 m-0 p-0">
            <button @click="rateDeck(1)" class="btn m-0 p-0">
              <i class="mdi mdi-star-outline mdi-36px"></i>
            </button>
            <button @click="rateDeck(2)" class="btn m-0 p-0">
              <i class="mdi mdi-star-outline mdi-36px"></i>
            </button>
            <button @click="rateDeck(3)" class="btn m-0 p-0">
              <i class="mdi mdi-star-outline mdi-36px"></i>
            </button>
            <button @click="rateDeck(4)" class="btn m-0 p-0">
              <i class="mdi mdi-star-outline mdi-36px"></i>
            </button>
            <button @click="rateDeck(5)" class="btn m-0 p-0">
              <i class="mdi mdi-star-outline mdi-36px"></i>
            </button>
          </div>
          <button class="btn col-2 offset-4" @click="cloneDeck">Copy Deck to My Collection</button>
        </div>
      </div>
    </div>
    <div class="row scroll justify-content-around d-flex">
      <div class=" py-3 col-2" v-for="c in deckCards" :key="c.id">
        <DeckDetailsCard :card="c" />
      </div>
    </div>


  </section>


</template>



<script>

import { useRoute } from 'vue-router';
import { decksService } from '../services/DecksService.js';
import { computed } from '@vue/reactivity';
import { onMounted, ref, watchEffect, } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { deckCardsService } from '../services/DeckCardsService.js';
import DeckCard from '../components/DeckCard.vue';
import DeckDetailsCard from '../components/DeckDetailsCard.vue';


export default {
  setup() {
    const route = useRoute();


    async function setActiveDeck() {
      try {
        await decksService.setActiveDeck(route.params.deckId);
        await deckCardsService.getDeckCards(route.params.deckId);
      }
      catch (error) {
        console.log(error);
        Pop.error("[setting active deck]", error);
      }
    }
    onMounted(() => {
      setActiveDeck();
    });
    return {
      activeDeck: computed(() => AppState.activeDeck),
      deckCards: computed(() => AppState.deckCards),
      collectionCards: computed(() => AppState.collection),
      cover: computed(() => `url(${AppState.activeDeck?.picture})`),
      async rateDeck(num) {
        try {
          const accountId = this.activeDeck.accountId
          const deckId = this.activeDeck.id
          await decksService.rateDeck({ value: num }, deckId, accountId)
        } catch (error) {
          Pop.error(error)
        }
      },
      async cloneDeck() {

      }
    };
  },
  components: { DeckCard, DeckDetailsCard }
};
</script>


<style scoped lang="scss">
.pageBg {
  background-color: #faea9b;
  background-image: url("https://img.freepik.com/free-photo/vintage-textured-watercolor-paper-background_53876-103939.jpg?w=2000");
  background-repeat: none;
  min-height: 100%;
  overflow-y: auto;
  min-width: 1024px;
  background-size: cover;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

.scroll {
  overflow-y: scroll;
}



.deckCanvas {
  position: fixed;
  right: 0px;
  top: 70px;
}

.myDecksSideBar {
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(4px);
  border: solid 5px rgba(0, 0, 0, 0.43);
  /* color: white; */
  height: 90VH;
  position: fixed;
  right: 0;
}

.myDeckSize {
  max-height: 10VH;
  max-width: 100VW;
}

.offCanvasBorder {
  border: solid black 10px
}

.deckImg {
  aspect-ratio: 4 / 1;
  background-image: v-bind(cover) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  outline: 3px solid #d4af37c3;
}

.collectionPageViewHeight {
  height: 100%;
}

.deckText {
  -webkit-text-stroke: .5px black;
  color: rgba(255, 255, 255, 0.88);
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>