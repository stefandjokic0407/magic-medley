<template>

  <div @click="getCardByOracle() && reset(card)" type="button" data-bs-toggle="modal"
    :data-bs-target="'#cardModal' + card.id" class="mt-4 shadow rotated">
    <div class="p-2">
      <div v-if="card.image_uris.normal" class="col-12 ">
        <img class="img-fluid shadow cardsBg" :src=card.image_uris.normal :title="card.name">
      </div>
      <div v-else class="">
        <img class="img-fluid shadow cardsBg"
          src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
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
.cardsBg {
  background-image: url(https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712);
  border-radius: 14px;
  border-color: black;
}

.rotated {
  background: transparent;

}

.rotated:hover img {
  transform: scale(1.1);
  transition: ease .1s;
}

input {
  border: black !important;
}
</style>