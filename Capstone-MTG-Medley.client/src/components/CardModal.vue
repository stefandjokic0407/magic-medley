<template>
  <div class="card mb-3" style="max-width: 1100px;">
    <div class="row g-0">
      <div class="col-md-6">
        <img :src=card.image_uris.normal class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <p class="card-text"><small class="text-muted"></small></p>
        </div>
        <!-- NOTE MAKE SURE TO ADD AN ADD TO ACCOUNT BUTTON -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {
  props: { card: { type: Card, required: true } },
  setup(props) {
    async function getCardByOracle() {
      try {
        console.log('Getting Oracle Id', props.card.oracleId)
        await cardsService.getCardByOracle(props.card.oracleId)
    } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    }

    onMounted(() => getCardByOracle())

    return {
    };
  }
}


</script>

<style>
</style>