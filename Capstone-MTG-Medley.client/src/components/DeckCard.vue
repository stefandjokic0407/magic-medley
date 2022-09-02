<template>

  <div @click="getCardByOracle() && reset(card)" type="button" data-bs-toggle="modal"
    :data-bs-target="'#deckCardModal' + card.id" class="mt-4 shadow rotated col-12">
    <div v-if="card">
      <img class="img-fluid shadow cardsBg" :src=card.card.image_uris?.normal>
    </div>
    <div v-else>
      <img class="img-fluid shadow cardsBg"
        src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
    </div>

  </div>
  <!-- <Modal :id="'deckCardModal' + card.id">
    <CardModal :card="card" />
  </Modal> -->

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {
  props: { card: { type: Object, required: true } },
  setup(props) {


    return {
      activeCard: computed(() => AppState.activeCard),
      deckCard: computed(() => AppState.deckCards),
      reset() {
        AppState.activeCard = props.card
        console.log('Active Card:', props.card)
      },
      async getCardByOracle() {
        try {
          // console.log(" Id", props.card.oracleId);
          await cardsService.getCardByOracle(props.card.oracle_id);
        }
        catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      }
    };

  }
}
</script>

<style>
</style>