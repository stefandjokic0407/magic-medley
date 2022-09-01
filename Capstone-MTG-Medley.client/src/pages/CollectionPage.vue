<template>
  <header class="row">
    <Navbar />
  </header>
  <div class="">
    <!-- add deck component -->
    <h3 class="col-12">My Decks <button data-bs-toggle="modal" data-bs-target="#deck-form"
        class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">Create Deck</button> </h3>
  </div>
  <div class="row">
    <h3 class="col-12">My Collection</h3>
    <div v-for="c in cards" :key="c.id">
      <div class="col-2 card selectable">
        <CollectionCard :card="c"/>
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

    onMounted(() => {
      getAccountCards();
    });
    return {
      cards: computed(() => AppState.collection),
      decks: computed(() => AppState.decks)
    };
  },
  components: { SearchedCards, CollectionCard, DeckForm }
}
</script>

<style>
</style>