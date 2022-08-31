<template>
  <div @blur="reset()" class="card" style="max-width: 1100px;">
    <div class="row g-0">
      <div v-if="activeCard" class="col-md-6 cardBorder">
        <img :src='activeCard.image_uris?.normal' class="img-fluid cardBorder rounded-start" alt="...">
      </div>
      <div v-else class="col-md-6 cardBorder">
        <img :src='card.image_uris.normal' class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-6 cardOverflow">
        <div class="bg-dark text-light sticky-top"><h5>PRINTS</h5></div>
        <div class="card-body magicCard p-0 " v-for="c in oracleCards" :key="c.id">
          <OracleCard :oracleCard="c" />
        </div>
        <!-- NOTE MAKE SURE TO ADD AN ADD TO ACCOUNT BUTTON -->
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
            reset() {
              AppState.activeCard.reset()
            },
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

.cardBorder{
  border-radius: 20%;
}

</style>