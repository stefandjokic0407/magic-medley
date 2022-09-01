<template>
  <div @blur="reset()" class="card" style="max-width: 1100px;">
    <div class="row g-0">
      <!-- SECTION MODALS ACTIVE CARD PHOTO -->
      <div v-if="activeCard" class="col-md-6 ">
        <img :src='activeCard.image_uris?.normal' class="cardBg img-fluid cardBorder" alt="...">
      </div>
      <div v-else class="col-md-6 cardBorder ">
        <img :src='card.image_uris.normal' class="cardBg img-fluid" alt="...">
      </div>
      <!-- SECTION THE ORACLE CARD INFORMATION DIV -->
      <div class="col-md-6 cardOverflow">
        <div class="row justify-content-center align-items-center d-flex">
          <div class="printsBg text-dark my-1 sticky-top col-10 rounded">
            <h5 class="text-center my-2">PRINTS</h5>
          </div>
          <div class="card-body magicCard p-0 col-12" v-for="c in oracleCards" :key="c.id">
            <OracleCard :oracleCard="c" />
          </div>
          <!-- NOTE IF CARD IS PART OF RESERVED LIST -->
        <div class="row">
          <div></div>
        </div>
          <!-- NOTE  IF LEGAL/BANNED/RESTRICT BOXES-->

          <!-- NOTE MAKE SURE TO ADD AN ADD TO ACCOUNT BUTTON -->
          <button @click.prevent="createCard()" class="btn">
            <p>Add To Collection</p>
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
          console.log(AppState.activeCard)
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
  border-color: black;
}

.printsBg {
  background-color: rgba(0, 0, 0, 0.192);
}
</style>