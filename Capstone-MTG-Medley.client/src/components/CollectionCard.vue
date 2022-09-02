<template>
  <div class="row align-items-center justify-content-between">
    <button v-if="activeDeck" class="btn col-2" @click="createDeckCard(card.cardId)"><i title="add to deck"
        class="mdi mdi-plus-circle"></i></button>
    <p class="col-3"><i class="mdi mdi-close-thick"></i><b>{{ card.count }}</b></p>
  </div>
  <div @click="getCardByOracle() && reset(card)" type="button" data-bs-toggle="modal"
    :data-bs-target="'#collectionCardModal' + card.cardId" class="mt-4 shadow rotated">
    <div v-if="card.image_uris?.normal">
      <img class="img-fluid position-relative shadow cardsBg" :src=card.image_uris?.normal>
    </div>
    <div v-else>
      <img class="img-fluid shadow cardsBg"
        src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
    </div>

  </div>
  <Modal :id="'collectionCardModal' + card.id">
    <CardModal :card="card" />
  </Modal>


  <!-- <div  @click="getCardByOracle() && reset(card)"  type="button" data-bs-toggle="modal" :data-bs-target="'#cardModal' + card.id"
class="mt-4 shadow rotated">
<div class="row">
  <div v-if="card.image_uris.normal" class="col-12 ">
    <img class="img-fluid shadow cardsBg" :src=card.image_uris.normal>
  </div>
  <div v-else class="col-12">
    <img class="img-fluid shadow cardsBg"
      src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
  </div>
</div>
</div>
<Modal :id="'cardModal' + card.id">
<CardModal :card="card" />
</Modal> -->

</template>
<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Card } from '../models/Card.js';
import { cardsService } from "../services/CardsService";
import { deckCardsService } from "../services/DeckCardsService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  props: { card: { type: Card, required: true } },


  setup(props) {
    return {
      cards: computed(() => AppState.collection),
      activeDeck: computed(() => AppState.activeDeck),
      user: computed(()=> AppState.account),
      reset() {
        AppState.activeCard = props.card
        console.log('Active Card:', props.card)
      },
      async getCardByOracle() {
        try {
          console.log(" Id", props.card.oracleId);
          await cardsService.getCardByOracle(props.card.oracle_id);
        }
        catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      async createDeckCard(cardId) {
        try {
          const deckId = AppState.activeDeck.id
          const DeckCard = {}
          DeckCard.cardId = cardId
          DeckCard.deckId = deckId
          DeckCard.accountId = AppState.user.id
          await deckCardsService.createDeckCard(DeckCard)
        } catch (error) {
          logger.log("[creating deck card]", error);
          Pop.error(error);
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

.addPosition {
  position: absolute;
  right: 180px;
  top: -32px;
  border-radius: 50%;
  color: rgba(43, 0, 255, 0.649);
  font-size: 2em;
  border: none;
}
</style>