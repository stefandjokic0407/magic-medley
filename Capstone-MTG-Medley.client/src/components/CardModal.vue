<template>
  <div class="card mb-3" style="max-width: 1100px;">
    <div class="row g-0">
      <div class="col-md-6">
        <img :src=card.image_uris.normal class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body" v-for="c in oracleCards" :key="c.id">
          <OracleCard :oracleCard="c" />
        </div>
        <!-- NOTE MAKE SURE TO ADD AN ADD TO ACCOUNT BUTTON -->
      </div>
    </div>
  </div>


</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
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
        onMounted(() => getCardByOracle());
        return {
            oracleCards: computed(() => AppState.oracleCard)
        };
    },
    components: { OracleCard }
}


</script>

<style>
</style>