<template>
  <header class="row">
    <Navbar />
  </header>
  <div class="row align-items-center">
    <!-- add deck component -->
    <!-- <h3 class="col-4 col-md-12">My Deck
    </h3> -->
    <div class="col-12 col-md-2 ms-2">
      <div v-if="activeDeck" class="row">
        <h4 class="m-0 p-0 text-center col-12 my-2">{{ activeDeck?.name }}</h4>
        <h5 v-if="deckCards.length" class="m-0 p-0 text-center col-12">Cards:{{ " " + deckCards.length }}</h5>
        <button v-if="activeDeck" class="btn btn-outline col-6 mx-auto" data-bs-toggle="modal"
          :data-bs-target="'#deck-form'">Edit
          Deck</button>
        <button v-if="activeDeck" class="btn btn-outline col-6 mx-auto" data-bs-toggle="modal"
          :data-bs-target="'#deck-form'">Delete</button>
      </div>
    </div>
    <img class="img-fluid col-6 col-md-1" :src="activeDeck?.picture" alt="" :title="activeDeck?.name" srcset="">
    <p class="col-6">{{ activeDeck?.description }}</p>
    <div class="col-12">
      <div class="row">

        <!-- SECTION CAROUSEL FOR DECK CARDS// DIDN'T THINK IT LOOKED GOOD BUT COMMENTED IT OUT FOR NOW -->
        <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="c in displayCards" :key="c.id" class="carousel-item active">
              <DeckCard :card="c" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> -->


        <div v-if="activeDeck" v-for="c in displayCards" :key="c.id" class="col-2 col-md-1 mx-1 my-3">
          <DeckCard :card="c" />
        </div>
      </div>
    </div>
    <div>
      <h3>My Collection</h3>
      <div class="row">
        <div v-for="c in cards" :key="c.id" class="col-4 col-md-2  my-3">
          <CollectionCard :card="c" />
        </div>
      </div>
    </div>
    <DeckForm />

    <!-- SECTION THE OFFCANVAS FOR THE DECKS -->
    <div class="col-2 p-3 text-end">
      <button class="btn btn-outline-dark img-text deckCanvas" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasExample" data-bs-scroll="true">
        Your Decks
      </button>
    </div>

    <div class="offcanvas offcanvas-end offcanvas-style text-center offCanvasBorder pt-2" tabindex="1"
      id="offcanvasRight" aria-labelledby="offcanvasExampleLabel" data-bs-scroll="true">
      <div class="col-12">
        <div class="row">
          <div @click.prevent="noActive" v-if="activeDeck" class="d-flex align-items-end deckImg col-11 mx-auto">
            <h5 class="deckText text-start mb-0">{{ activeDeck.name }}</h5>
          </div>
          <div v-if="activeDeck" v-for="c in displayCards" :key="c.id" class="col-12">
            <DeckCardCanvas :card="c" />
          </div>
        </div>
        <img v-if="!activeDeck" class="img-fluid" src="src/assets/img/fancy banner.png" alt="">
      </div>
      <div v-if="decks.length && !activeDeck" class="row">
        <div v-for="d in decks" :key="d.id" class="col-12 col-md-10 mx-auto my-2">
          <Deck :deck="d" />
        </div>
      </div>
      <div class="row fixed-bottom">
        <button data-bs-toggle="modal" data-bs-target="#deck-form"
          class="btn deckText selectable text-uppercase square col-11 mx-auto" @click="setEditable()">Create
          Deck</button>
      </div>
    </div>
  </div>
</template>



<script>

import { computed } from '@vue/reactivity';
import { onMounted, ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { cardsService } from '../services/CardsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import SearchedCards from '../components/SearchedCards.vue';
import CollectionCard from '../components/CollectionCard.vue';
import DeckForm from "../components/DeckForm.vue";
import { decksService } from "../services/DecksService.js";
import Deck from "../components/Deck.vue";
import DeckCard from "../components/DeckCard.vue";
import DeckCardCanvas from "../components/DeckCardCanvas.vue";

export default {
  setup() {

    async function getAccountCards() {
      try {
        await cardsService.getAccountCards()
      }
      catch (error) {
        logger.log("[getting all cards]", error);
        Pop.error(error);
      }
    }
    async function getAccountDecks() {
      try {
        const accountId = AppState.account.id
        await decksService.getAccountDecks(accountId)
      } catch (error) {
        logger.error('[getting account decks]', error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      getAccountDecks();
      getAccountCards();
    });
    return {
      cards: computed(() => AppState.collection),
      decks: computed(() => AppState.decks),
      activeDeck: computed(() => AppState.activeDeck),
      deckCards: computed(() => AppState.deckCards),
      cover: computed(() => `url(${AppState.activeDeck?.picture})`),
      activeCards: computed(() => AppState.activeProfile),
      displayCards: computed(() => {
        let newArray = [...AppState.deckCards]
        for (let i = 0; i < newArray.length; i++) {
          const firstCard = newArray[i];
          firstCard.quantity = 1
          for (let j = i + 1; j < newArray.length; j++) {
            const secondCard = newArray[j];
            if (firstCard.cardId == secondCard.cardId) {
              firstCard.quantity++
              newArray.splice(j, 1)
              j--
            }
          }
        }
        return newArray
      }),

      setEditable() {
        AppState.activeDeck = {}
      },

      async removeFromCollection() {
        try {

        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      async removeFromDeck() {
        try {

        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      noActive() {
        AppState.activeDeck = null
      }

    };
  },
  components: { SearchedCards, CollectionCard, DeckForm, Deck, DeckCard, DeckCardCanvas }
}
</script>


<style scoped>
.deckCanvas {
  position: fixed;
  right: 0px;
  top: 70px;
}

.offcanvas-style {
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(4px);
  border: solid #8d8b8b1f;
  color: white;
  border-radius: 8px;
  text-shadow: 5px 5px 5px black;
  padding: 0.5em;
  width: 20vw;
  height: 100vh;
}

.myDeckSize {
  max-height: 10VH;
  max-width: 80VW;
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
  outline: 3px solid rgba(255, 255, 255, 0.44);
}
</style>