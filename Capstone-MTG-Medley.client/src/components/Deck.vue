<template>

  <div class="row">
    <button class="btn" @click="setActiveDeck(deck.id)">
      <div class="col-12 rotated text-light">
        <p class="deckFont">{{ deck.name }}</p>
        <img v-if="deck.picture" class="img-fluid shadow cardsBg" :src=deck.picture>
        <img v-if="!deck.picture" class="img-fluid shadow cardsBg"
          src='https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712'>
      </div>
    </button>
  </div>



</template>
<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { deckCardsService } from "../services/DeckCardsService.js";
import { decksService } from "../services/DecksService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: { 
    deck: { type: Object, required: true } },

  setup() {
    return {
      decks: computed(() => AppState.decks),
      activeDeck: computed(() => AppState.activeDeck),
      deckCards: computed(()=> AppState.deckCards),

      async setActiveDeck(deckId) {
        try {
          await decksService.setActiveDeck(deckId)
          await deckCardsService.getDeckCards(deckId)
        } catch (error) {
          logger.error('[setting active deck]', error);
          Pop.error(error);
        }
      }
    }
  }
}
</script>

<style>
.add-to-deck {
  position: absolute;
}

.position-relative {
  position: relative;
}

.deckFont {
  font-size: x-small;
}



</style>