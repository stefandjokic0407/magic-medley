<template>

  <div class="row mx-1">
    <button class="noBorder btn p-0" @click="setActiveDeck(deck.id)">
      <div class="col-12 rotated text-light ">
        <h6 class="">{{ deck.name }}</h6>
        <img v-if="deck.picture" class="img-fluid" :src=deck.picture :title="deck.name">
        <!-- NOTE INPUT BUTTON FOR DELETING DECK -->
        <img v-if="!deck.picture" :title="deck.name" class="img-fluid shadow cardsBg"
          src='https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712'>
      </div>
    </button>
    <div class="col-12">
      <button @click="deleteDeck" class="btn btn-outline-light mx-0 mt-3">
        <p>Delete</p>
      </button>
    </div>
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
    deck: { type: Object, required: true }
  },

  setup(props) {
    return {
      decks: computed(() => AppState.decks),
      activeDeck: computed(() => AppState.activeDeck),
      deckCards: computed(() => AppState.deckCards),

      async setActiveDeck(deckId) {
        try {
          await decksService.setActiveDeck(deckId)
          await deckCardsService.getDeckCards(deckId)
        } catch (error) {
          logger.error('[setting active deck]', error);
          Pop.error(error);
        }
      },
      async deleteDeck() {
        try {
          const yes = await Pop.confirm("Remove Deck?");
          if (!yes) {
            return;
          }
          const deckId = props.deck.id
          console.log('Deck Id:', deckId)
          await decksService.deleteDeck(deckId)
        } catch (error) {
          logger.error('[Deleting Deck]', error)
          Pop.toast(error.message, 'error')
        }
      },
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

.deck-image {
  position: relative;
  float: left;
  margin: 5px;
}

.deck-image:hover img {
  opacity: 0.5;
}

.deck-image:hover input {
  display: block;
}

.deck-image input {
  position: absolute;
  display: none;
}

.deck-image input.update {
  top: 0;
  left: 0;
}

.deck-image input.delete {
  top: 0;
  left: 0;
}

.noBorder {
  border: none;
}
</style>