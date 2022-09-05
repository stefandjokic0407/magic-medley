<template>
  <!-- <button @click="removeCardFromDeck()" class="btn-outline btn xsFont">Remove from Deck</button> -->
  <div class="row my-2" :title="card.card.name">
    <div v-if="card" class="deleteCard col-11 mx-auto deckCardCanvas d-flex align-items-end">
      <!-- <img class="img-fluid shadow cardsBg childElement deleteCard" :src=card.card?.image_uris?.small
        :title="card.card?.name"> -->

      <p class="deckText text-start mb-0">{{ card.card.name }}</p>
      <h6 class="deckText mb-0 text-end">{{ card.quantity }}</h6>

    </div>
    <div v-else>
      <img class="img-fluid shadow cardsBg deckCardCanvas"
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
      cover: computed(() => `url(${props.card.card.image_uris.art_crop})`),
      deckCard: computed(() => AppState.deckCards),
      reset() {
        AppState.activeCard = props.card;
        console.log("Active Card:", props.card);
      },
      async getCardByOracle() {
        try {

          await cardsService.getCardByOracle(props.card.oracle_id);
        }
        catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      async removeCardFromDeck() {
        try {
          console.log(" Id", props.card.card.image_uris);
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

<style>
.deleteCard:hover img {
  opacity: 50;
}

.quantityBorder {
  border: solid 1px black
}

.deckCardCanvas {
  aspect-ratio: 7 / 1;
  background-image: v-bind(cover) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  outline: 2px solid rgba(255, 255, 255, 0.44);
  margin: 0;
  padding: 0;
}
</style>