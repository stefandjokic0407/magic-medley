<template>

  <div @click="getCardByOracle() && reset(card)" type="button" data-bs-toggle="modal"
    :data-bs-target="'#collectionCardModal' + card.id" class="mt-4 shadow rotated">
    <div v-if="card.image_uris?.normal">
      <img class="img-fluid position-relative shadow cardsBg" :src=card.image_uris?.normal>
    </div>
    <div v-else>
      <img class="img-fluid shadow cardsBg"
        src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
    </div>
    <button v-if="activeDeck" class="btn addPosition" @click="createDeckCard(card.cardId)"><i title="add to deck"
        class="mdi mdi-plus-circle"></i></button>
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
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  props: { card: { type: Card, required: true } },


  setup(props) {
    return {
      cards: computed(() => AppState.collection),
      activeDeck: computed(() => AppState.activeDeck),
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