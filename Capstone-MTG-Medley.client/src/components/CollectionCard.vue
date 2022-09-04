<template>
  <div class="row align-items-center justify-content-between">
    <button v-if="activeDeck" class="btn col-2" @click="createDeckCard(card.cardId)"><i title="add to deck"
        class="mdi mdi-plus-circle"></i></button>
    <p class="col-3"><i class="mdi mdi-close-thick"></i><b>{{ card.count }}</b></p>
  </div>
  <div class="row ">
    <div @click="getCardByOracle() && reset(card)" type="button" data-bs-toggle="modal"
      :data-bs-target="'#collectionCardModal' + card.cardId" class="mt-4 col-11 shadow rotated cardCollection-image">
      <div v-if="card.image_uris?.normal">
        <img class="img-fluid position-relative shadow cardsBg" :src=card.image_uris?.normal :title="card.name">
      </div>

      <div v-else>
        <img class="img-fluid shadow cardsBg"
          src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
      </div>
    </div>
    <button @click.prevent="removeCard" class="btn-outline btn mt-4" value="Delete" type="button">Remove from
      Collection</button>
      
    </div>
    <div class="tooltip text-dark">
      <h1>Hover over me</h1>
      <span class="tooltiptext">Tooltip text</span>
    </div>
  <Modal :id="'collectionCardModal' + card.cardId">
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
      user: computed(() => AppState.account),
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
      async removeCard() {
        try {
          let cardId = props.card.cardId
          console.log('Removed Card Id:', cardId)
          await cardsService.removeCard(cardId)
        } catch (error) {
          logger.error('[Removing Card from Collection]', error)
          Pop.toast(error.message, 'error')
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

.addPosition {
  position: absolute;
  right: 180px;
  top: -32px;
  border-radius: 50%;
  color: rgba(43, 0, 255, 0.649);
  font-size: 2em;
  border: none;
}

.collectionCard-image {
  position: relative;
  float: left;
  margin: 5px;
}

.collectionCard-image:hover img {
  opacity: 0.5;
}

.collectionCard-image:hover input {
  display: block;
}

.collectionCard-image input {
  position: absolute;
  display: none;
}

.collectionCard-image input.update {
  top: 0;
  left: 0;
}

.collectionCard-image input.delete {
  top: 0;
  left: 0;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 105%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}



</style>