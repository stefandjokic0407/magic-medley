<template>
  <div @blur="reset()" class="card" style="max-width: 1100px;">
    <div class="row g-0">
      <!-- SECTION MODALS ACTIVE CARD PHOTO -->
      <div v-if="activeCard" class="col-md-6 ">
        <img :src='activeCard.image_uris?.normal' class="cardBg img-fluid cardBorder" alt="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013">
      </div>
      <div v-else class="col-md-6 cardBorder ">
        <img :src='card.image_uris.normal' class="cardBg img-fluid" alt="...">
      </div>
      <!-- SECTION THE ORACLE CARD INFORMATION DIV -->
      <div class="col-md-6  ">
        <div class="cardOverflow">
          <div class="row justify-content-center align-items-center d-flex">
            <div class=" printsBg text-dark my-1 sticky-top col-10 rounded">
              <h5 class="text-center my-2">PRINTS</h5>
            </div>
            <div class="card-body magicCard p-0 col-12" v-for="c in oracleCards" :key="c.id">
              <OracleCard :oracleCard="c" />
            </div>
          </div>
        </div>

        <!-- NOTE IF CARD IS PART OF RESERVED LIST -->
        <div class="row align-items-center">
          <div class="col-10 offset-1 mx-auto text-center mt-3" v-if="activeCard.reserved = true">
            <p class="my-0">This card is Part of the Reserved List</p>
          </div>
          <div v-else></div>
        </div>
        <!-- NOTE  IF LEGAL/BANNED/RESTRICT BOXES-->
        
        <!-- NOTE MAKE SURE TO ADD AN ADD TO ACCOUNT BUTTON -->
        <div class="col-5 mx-auto py-0 my-0">
          <button @click.prevent="createCard()" class="btn">
            <p class="my-0">Add To Collection</p>
          </button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, watchEffect } from "vue";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState"
import OracleCard from "./OracleCard.vue";


export default {
  props: { card: { type: Card, required: true } },
  // props: { oracleCard: { type: Card, required: true }},
  setup(props) {
    async function getCardByOracle() {
      try {
        // console.log(" Id", props.card.oracleId);
        await cardsService.getCardByOracle(props.card.oracleId);
      }
      catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    }
    // onMounted(() => getCardByOracle());
    return {
      oracleCards: computed(() => AppState.oracleCard),
      activeCard: computed(() => AppState.activeCard),


      async createCard() {
        try {
          console.log('Active Card:', AppState.activeCard)
          await cardsService.createCard(AppState.activeCard)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    };

  },
  components: { OracleCard }
}


</script>

<style>
.cardOverflow {
  overflow-y: scroll;
  max-height: 32vh;
  overflow-x: hidden;
}

.cardBorder {
  border-radius: 20%;
}

.cardBg {
  border-radius: 20px;
  border-color: rgb(142, 142, 142);
}

.printsBg {
  background-color: rgb(143, 143, 143);
}
</style>