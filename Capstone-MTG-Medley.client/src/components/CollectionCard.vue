<!-- <draggable
v-model="myArray" 
group="people" 
@start="drag=true" 
@end="drag=false" 
item-key="id"> -->
<template>
  <div class="row align-items-center justify-content-center mx-1 position-relative">
    <div @click="getCardByOracle() && reset(card)" type="button" data-bs-toggle="modal"
      :data-bs-target="'#collectionCardModal' + card.cardId" class="mt-4 col-12 px-0 cardCollection-image">
      <div v-if="card.image_uris?.normal">
        <img class="img-fluid borderRadius shadow cardsBg"
          :class="!activeDeck || deckCard?.find(d => d.cardId == card.cardId) ? '' : 'card-in-deck'"
          :src=card.image_uris?.normal :title="card.name">
        <!-- <p class="xsFont">{{deckCard}}</p> -->
      </div>

      <div v-else>
        <img class="img-fluid shadow cardsBg"
          src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
      </div>


      <!-- <i v-if="activeDeck && deckCard?.find(d => d.cardId == card.cardId)" title="remove from deck"
        @click="removeCardFromDeck(card.cardId)"
        class="mdi mdi-minus-circle mdi-36px remove-button btn remove-from-deck"></i> -->

      <div class="cardCount">
        <p class=" mx-2 mb-1"><i class="mdi mdi-card-multiple-outline"></i>&nbsp<b> {{
        card.count
        }}</b></p>
      </div>
    </div>
    <i v-if="activeDeck" @click="createDeckCard(card.cardId)" title="Add to Deck"
      class="deckText  mdi mdi-plus-circle mdi add-button"></i>

    <!-- <p v-if="activeDeck" class="col-10 text-end cardCount"><i class="mdi mdi-card-multiple-outline"></i>&nbsp
      &nbsp<b>{{
          (card.count)
      }}</b>
    </p> -->
    <button @click.prevent="removeCard() && getAccountCards()" class="btn-outline btn mt-4 xsFont" value="Delete"
      type="button">Remove from
      Collection</button>
  </div>

  <Modal :id="'collectionCardModal' + card.cardId">
    <CardModal :card="card" />
  </Modal>

</template>
<!-- </draggable> -->
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
          event.stopPropagation()
          event.stopImmediatePropagation()
          const deckId = AppState.activeDeck.id
          const DeckCard = {}
          DeckCard.cardId = cardId
          DeckCard.deckId = deckId
          DeckCard.accountId = AppState.user.id
          // if ()
          await deckCardsService.createDeckCard(DeckCard)
        } catch (error) {
          logger.log("[creating deck card]", error);
          Pop.error(error);
        }
      },
      async removeCardFromDeck() {
        try {
          const yes = await Pop.confirm("Remove Card?");
          if (!yes) {
            return;
          }
          // NOTE this prop      VVVV     was misspelled as deckcard.id 
          const cardId = props.deckCard.id;
          await deckCardsService.removeCard(cardId);
        }
        catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      async removeCard() {
        try {
          let cardId = props.card.cardId

          console.log('Removed Card Id:', cardId)
          await cardsService.removeCard(cardId, props.card.name)
        } catch (error) {
          logger.error('[Removing Card from Collection]', error)
          Pop.toast(error.message, 'error')
        }
      },
      async getAccountCards() {
        try {
          await cardsService.getAccountCards()
        }
        catch (error) {
          logger.log("[getting all cards]", error);
          Pop.error(error);
        }
      },
    }
  }
}
</script>

<style scoped lang="scss">
.xsFont {
  font-size: x-small;
}

// .remove-button {
//   position: absolute;
//   color: goldenrod;
//   left: 200px;
//   bottom: 100px;
// }

// .remove-button:hover {
//   color: whitesmoke;
//   transition: 0.3s;
// }

.position-relative {
  position: relative;
}

.deckToolTip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.add-button {
  position: absolute;
  color: goldenrod;
  left: 40px;
  bottom: 47px;
  font-size: 1.5vw;
}

.add-button:hover {
  color: whitesmoke;
  transition: 0.3s;
}

.card-in-deck {
  // outline: 5px solid rgb(155, 200, 232);
  opacity: .5;
}

.deckToolTip:hover .tooltiptext {
  visibility: visible;
}

.cardCount {
  z-index: 1;
  bottom: 35px;
  left: 8px;
  background-color: rgba(0, 0, 0, 0.601);
  color: white;
  border-radius: 10%;
  width: 50px;
  height: 30px;
  border: solid rgba(255, 255, 255, 0.435) 1px;
}

// .addCard {
//   z-index: 1;
//   position: relative;
//   top: 45px;
//   left: 0px;
//   color: rgb(0, 0, 0);
//   border: none;
// }

.deckText {
  -webkit-text-stroke: .5px black;
  color: rgba(255, 255, 255, 0.88);
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.borderRadius {
  border-radius: 7%;
}
</style>