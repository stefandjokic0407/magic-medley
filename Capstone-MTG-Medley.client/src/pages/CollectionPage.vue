<template>
  <header class="row">
    <Navbar />
  </header>
  <div class="row">
    <!-- add deck component -->
    <h3 class="col-12">My Decks <button data-bs-toggle="modal" data-bs-target="#deck-form"
        class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">Create Deck</button>
    </h3>

    <h4 class="col-1 text-center">{{ activeDeck?.name }}</h4>
    <h5 class="col-1">Cards:{{ " "+deckCards.length }}</h5>
    <img class="img-fluid col-1" :src="activeDeck?.picture" alt="" srcset="">
    <div class="col-12">
      <div class="row">
        <div v-for="c in deckCards" :key="c.id" class="col-1 mx-1 my-3">
          <DeckCard :card="c" />
        </div>
      </div>
    </div>
    <div>
      <h3>My Collection</h3>
      <div class="row">
        <div v-for="c in cards" :key="c.id" class="col-2 mx-4 my-3">
          <CollectionCard :card="c" />
        </div>
      </div>
    </div>
    <DeckForm />


    <!-- SECTION THE OFFCANVAS FOR THE DECKS -->
    <div class="col-2 p-3 text-end">
      <button class="btn btn-outline-dark img-text deckCanvas" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasExample">
        Your Decks
      </button>
    </div>

    <div class="offcanvas offcanvas-end offcanvas-style text-center" tabindex="-1" id="offcanvasRight"
      aria-labelledby="offcanvasExampleLabel">
      <h1>Your Decks:</h1>
      <div v-if="decks.length" class="row">
        <div v-for="d in decks" :key="d.id" class="col-3">
          <Deck :deck="d" />
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
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

    };
  },
  components: { SearchedCards, CollectionCard, DeckForm, Deck, DeckCard }
}
</script>


<style>
.deckCanvas {
  position: absolute;
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
  width: 30vw;
  height: 100vh;
}
</style>