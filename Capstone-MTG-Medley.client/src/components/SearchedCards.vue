<template>

  <div  @click="getCardByOracle() && reset(card)"  type="button" data-bs-toggle="modal" :data-bs-target="'#cardModal' + card.id"
    class="mt-4 shadow">
    <div class="row">
      <div class="col-12">
        <img class="img-fluid shadow cardsBg" :src=card.image_uris.normal :alt="card.name">
        <!-- <div class="col-1">
        </div> -->
      </div>
    </div>
  </div>
  <Modal :id="'cardModal' + card.id">
        <CardModal :card="card" />
      </Modal>

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {
  props: { card: { type: Card, required: true } },


  setup(props) {
    
    return {
      activeCard: computed(() => AppState.activeCard),
      reset() {
              AppState.activeCard = props.card
            },
      async  getCardByOracle() {
            try {
                // console.log(" Id", props.card.oracleId);
                await cardsService.getCardByOracle(props.card.oracleId);
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

.cardsBg {
  border-radius:8px;
  border-color: black;
}

</style>