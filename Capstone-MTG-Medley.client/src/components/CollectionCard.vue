<template>

  <div class="row align-items-center">
    <button v-if="activeDeck" class="btn col-2 text-start addCard" @click="createDeckCard(card.cardId)"><i
        title="add to deck" class="mdi mdi-plus-circle "></i></button>
  </div>
  <div class="row align-items-center selectable justify-content-center mx-1">
    <div @click="getCardByOracle() && reset(card)" type="button" data-bs-toggle="modal"
      :data-bs-target="'#collectionCardModal' + card.cardId" class="mt-4 col-12 px-0 shadow cardCollection-image">
      <div v-if="card.image_uris?.normal">
        <img class="img-fluid position-relative shadow cardsBg"
          :class="deckCard?.find(d => d.cardId == card.cardId) ? 'card-border' : ''" :src=card.image_uris?.normal
          :title="card.name">
        <!-- <p class="xsFont">{{deckCard}}</p> -->
      </div>

      <div v-else>
        <img class="img-fluid shadow cardsBg"
          src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
      </div>
      <div class="cardCount">
        <p class="col-12 mx-2 mt-1"><i class="mdi mdi-card-multiple-outline"></i>&nbsp<b> {{
            card.count
        }}</b></p>
      </div>
    </div>
    <!-- <p v-if="activeDeck" class="col-10 text-end cardCount"><i class="mdi mdi-card-multiple-outline"></i>&nbsp
      &nbsp<b>{{
          (card.count)
      }}</b>
    </p> -->
    <button @click.prevent="removeCard" class="btn-outline btn mt-4 xsFont" value="Delete" type="button">Remove from
      Collection</button>
  </div>

  <Modal :id="'collectionCardModal' + card.cardId">
    <CardModal :card="card" />
  </Modal>

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
      deckCard: computed(() => AppState.deckCards),
      profileCard: computed(() => AppState.activeProfile),
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
          // if()
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
.xsFont {
  font-size: x-small;
}

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

.deckToolTip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.deckToolTip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the deckToolTip */
  position: absolute;
  z-index: 1 !important;
  top: -10px;
  left: 105%;
}

.card-border {
  border: 3px solid whitesmoke;
}

.deckToolTip:hover .tooltiptext {
  visibility: visible;
}

.cardCount {
  z-index: 1;
  position: absolute;
  bottom: 60px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.601);
  color: white;
  border-radius: 10%;
  width: 50px;
  height: 30px;
  border: solid rgba(255, 255, 255, 0.435) 1px;
}

.addCard {
  z-index: 1;
  position: relative;
  top: 45px;
  left: 0px;
  color: rgb(0, 0, 0);
}
</style>