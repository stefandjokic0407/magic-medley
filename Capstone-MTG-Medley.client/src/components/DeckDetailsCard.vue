<template>
  <div class="">
    <div v-if="card" class="">
      <img class="img-fluid shadow cardsBg childElement deleteCard deck-details-card rounded"
        :src=card.card?.image_uris?.normal :title="card.card?.name">
    </div>
    <div v-else>
      <img class="img-fluid shadow cardsBg rounded"
        src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
    </div>
  </div>
  <!-- NOTE CARD QUANTITY -->
  <!-- <p>{{ card.quantity }}</p> -->
  <!-- <div v-if="card.quantity == 1">
        <p class="text-center"><span class="mdi mdi-checkbox-blank-circle"></span><span
            class="mdi mdi-checkbox-blank-circle-outline"></span><span
                class="mdi mdi-checkbox-blank-circle-outline"></span><span
                class="mdi mdi-checkbox-blank-circle-outline"></span></p>
    </div>
    <div v-if="card.quantity == 2">
        <p class="text-center"><span class="mdi mdi-checkbox-blank-circle"></span><span
                class="mdi mdi-checkbox-blank-circle"></span><span
                class="mdi mdi-checkbox-blank-circle-outline"></span><span
                class="mdi mdi-checkbox-blank-circle-outline"></span></p>
    </div>
    <div v-if="card.quantity == 3">
        <p class="text-center"><span class="mdi mdi-checkbox-blank-circle"></span><span
                class="mdi mdi-checkbox-blank-circle"></span><span class="mdi mdi-checkbox-blank-circle"></span><span
                class="mdi mdi-checkbox-blank-circle-outline"></span></p>
    </div>
    <div v-if="card.quantity >= 4">
        <p class="text-center"><span class="mdi mdi-checkbox-blank-circle"></span><span
                class="mdi mdi-checkbox-blank-circle"></span><span class="mdi mdi-checkbox-blank-circle"></span><span
                class="mdi mdi-checkbox-blank-circle"></span></p>
    </div> -->
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { deckCardsService } from "../services/DeckCardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import Modal from "./Modal.vue";


export default {
  props: { card: { type: Object, required: true } },
  setup(props) {
    // onMounted(() => {
    //   mounted();
    // })
    return {
      activeCard: computed(() => AppState.activeCard),
      deckCard: computed(() => AppState.deckCards),
      collectionCards: computed(() => AppState.collection),
      duplicateCards: computed(() => AppState.duplicates),
      // this makes an array of cards that exist both in the user's collection and the activeDeck

      reset() {
        AppState.activeCard = props.card;
      },
      async getCardByOracle() {
        try {
          // console.log(" Id", props.card.oracleId);
          await cardsService.getCardByOracle(props.card.oracle_id);
        }
        catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      async removeCardFromDeck() {
        try {
          const yes = await Pop.confirm("Remove Card?");
          if (!yes) {
            return;
          }
          const cardId = props.card.id;
          await deckCardsService.removeCard(cardId);
        }
        catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      }
    };
  },
  components: { Modal }
}

</script>

<style>
.deleteCard:hover img {
  opacity: 50;
}

.deck-details-card {
  width: 100%;
}

.quantityBorder {
  border: solid 1px black
}
</style>