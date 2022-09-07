<template>

  <div class="row align-items-end">
    <button class="noBorder btn p-0" @click="setActiveDeck(deck.id)">
      <div class="col-12 rotated text-light">
        <div v-if="deck.picture" class="deckImg d-flex align-items-end">
          <h5 class="deckText text-start mb-0">{{ deck.name }}</h5>
          <p v-if="activeDeck" class="m-0 p-0 text-center col-12">Cards:{{ " " + deckCards.length }}</p>
          <!-- <button @click="deleteDeck" class="btn btn-outline-light mx-0 mt-3">
        <p>Delete</p>
      </button> -->
        </div>

        <!-- NOTE INPUT BUTTON FOR DELETING DECK -->
        <img v-if="!deck.picture" :title="deck.name" class="img-fluid shadow cardsBg"
          src='https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712'>
      </div>
    </button>
    <!-- <div class="col-12">
      <button @click="deleteDeck" class="btn btn-outline-light mx-0 mt-3">
        <p>Delete</p>
      </button>
    </div> -->
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
      cover: computed(() => `url(${props.deck.picture})`),

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

.deckImg {

  aspect-ratio: 4 / 1;
  background-image: v-bind(cover) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  outline: 3px solid rgba(255, 255, 255, 0.44);
}

.deckText {
  -webkit-text-stroke: .5px black;
  color: white;
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.deckHeight {
  height: 10VH;
}
</style>