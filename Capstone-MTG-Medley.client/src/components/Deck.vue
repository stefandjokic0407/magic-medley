<template>

  <div>
    <button class="btn add-to-deck" @click="setActiveDeck(deck.id)">
      <div>
        <p>{{ deck.name }}</p>
        <img class="img-fluid position-relative shadow cardsBg" :src=deck.picture>
      </div>
    </button>
  </div>

</template>
<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { decksService } from "../services/DecksService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: { deck: { type: Object, required: true } },

  setup() {
    return {
      decks: computed(() => AppState.decks),
      async setActiveDeck(deckId){
      try {
        await decksService.setActiveDeck(deckId)
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
</style>