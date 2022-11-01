<template>
  <!-- <button @click="removeCardFromDeck()" class="btn-outline btn xsFont">Remove from Deck</button> -->
  <div class="row my-2" :title="card.card?.name">
    <div v-if="card" class="col-11 mx-auto deckCardCanvas d-flex align-items-end justify-content-between">
      <!-- <img class="img-fluid shadow cardsBg childElement deleteCard" :src=card.card?.image_uris?.small
        :title="card.card?.name"> -->
      <div class="col-12">
        <div class="selectable minusButton" @click="removeCardFromDeck"><i class="mdi  mdi-minus-circle-outline"></i>
        </div>
        <div class="row align-items-center justify-content-between">
          <div class="col-8 ">
            <h5 class="deckText text-start mb-0">{{ card.card.name }}</h5>
          </div>
          <div class="col-1 mx-3 my-2">
            <h5 class="deckText my-1">{{ card.quantity }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <img class="img-fluid shadow cardsBg deckCardCanvas"
        src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013">
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
cle"></span></p>
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
    // }
    // NOTE TRYING TO FIGURE OUT MOUSEOVER ISSUE
    //   var removeButton = new Vue({
    //   el: '#removeButton',

    //   data: {
    //     removeButton: false
    //   },
    //   methods: {
    //     removeButton: function() {
    //       this.removehover = !this.removehover;
    //     }
    //   }
    // });
    return {
      activeCard: computed(() => AppState.activeCard),
      cover: computed(() => `url(${props.card.card?.image_uris.art_crop})`),
      deckCard: computed(() => AppState.deckCards),
      reset() {
        AppState.activeCard = props.card;
      },
      async getCardByOracle() {
        try {

          await cardsService.getCardByOracle(props.card.oracle_id);
        }
        catch (error) {
          logger.error('[Getting Card By Oracle]', error);
          Pop.toast(error.message, "error");
        }
      },
      async removeCardFromDeck() {
        try {
          // const yes = await Pop.confirm("Remove Card?");
          // if (!yes) {
          //   return;
          // }
          const cardId = props.card.id;
          await deckCardsService.removeCard(cardId);
        }
        catch (error) {
          logger.error('[Removing Card From Deck:]', error);
          Pop.toast(error.message, "error");
        }
      }
      // mounted() {
      //   const childElements = document.querySelectorAll('.childElement');
      //   childElements.forEach(childElement => {
      //     // create button for each childElement
      //     const deleteButton = document.createElement('button');
      //     deleteButton.setAttribute('hidden', '');
      //     deleteButton.innerText = "Click to delete";
      //     // append button to the childElement
      //     childElement.appendChild(deleteButton);
      //     // add event listeners
      //     childElement.addEventListener('mouseenter', event => {
      //       deleteButton.removeAttribute('hidden');
      //     });
      //     childElement.addEventListener('mouseleave', event => {
      //       deleteButton.setAttribute('hidden', '');
      //     });
      //     deleteButton.addEventListener('click', event => {
      //       childElement.setAttribute('hidden', '');
      //     });
      //   });
      // },
    };
  },
  components: { Modal }
}

</script>

<style scoped lang="scss">
.deleteCard:hover img {
  opacity: 50;
}

.quantityBorder {
  border: solid 1px black
}

.deckCardCanvas {
  aspect-ratio: 6 / 1;
  background-image: v-bind(cover) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  outline: 2px solid rgba(255, 255, 255, 0.44);
  margin: 0;
  padding: 0;
}

.countDiv {
  background-color: rgba(0, 0, 0, 0.546);
  border-radius: 50%;
  height: 2em;
  width: auto;
}

.minusButton {
  position: absolute;
  left: 70%;
  top: 5%;
  font-size: 2.5em;
  -webkit-text-stroke: .5px black;
  color: white;
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>