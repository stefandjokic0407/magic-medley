<template>
  <header class="row">
    <Navbar />
  </header>
  <div class="">
    <!-- add deck component -->
    <h3 class="col-12">My Decks <button data-bs-toggle="modal" data-bs-target="#deck-form"
        class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">Create Deck</button>
    </h3>
    <div v-if="decks.length" class="row">
      <div v-for="d in decks" :key="d.id" class="col-2">
        <Deck :deck="d" />
      </div>
    </div>
  </div>
  <div>
    <h3>My Collection</h3>
    <div class="row">
      <div v-for="c in cards" :key="c.id" class="col-2">
        <CollectionCard :card="c" />
      </div>
    </div>
  </div>
  <DeckForm />
  
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

export default {
  setup() {
    async function getAccountCards() {
      try {
        const accountId = AppState.account.id;
        await cardsService.getAccountCards(accountId);
      }
      catch (error) {
        logger.log("[getting all cards]", error);
        Pop.error(error);
      }
    }
    async function getAccountDecks() {
      try {
        // const accountId = AppState.account.id;
        await decksService.getAccountDecks()
      } catch (error) {
        logger.error('[getting account decks]', error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      getAccountCards();
      getAccountDecks()
    });
    return {
      cards: computed(() => AppState.collection),
      decks: computed(() => AppState.decks),

      async createDeckCard(cardId) {
        try {
          const deckId = AppState.activeDeck.id
          await decksService.createDeckCard(cardId, deckId)
        } catch (error) {
          logger.log("[creating deck card]", error);
          Pop.error(error);
        }
      },



    };
  },
  components: { SearchedCards, CollectionCard, DeckForm, Deck }
}
</script>


<style>
</style>