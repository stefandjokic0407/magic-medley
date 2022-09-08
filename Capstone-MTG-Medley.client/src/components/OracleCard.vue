<template>

  <!-- NOTE Make the cursor at the top left. Mouse move. On event move track
  STRETCH GOAL -->


  <div class="col-1 position-absolute cardPosition" v-if="hover">

    <img :src="oracleCard.image_uris.small" alt="">
  </div>
  <div @click="getCardById" class="row position-relative">
    <div class="col-10 offset-1 magicCard text-start border p-2 mt-1 rounded " @mouseover="hover = true"
      @mouseleave="hover = false">
      <!-- <span class="star position-absolute "><i class="mdi display-none  mdi-star"></i></span> -->
      {{ oracleCard.set_name }}
      <span class="magicCard" :title="oracleCard.set_name + ' ' + oracleCard.name" v-if="oracleCard.prices.usd"><a
          target="_blank" rel="noopener noreferrer" :href="oracleCard.purchase_uris.tcgplayer">${{ oracleCard.prices.usd
          }}</a></span>
      <span v-else>{{ oracleCard.prices.usd }}</span>
    </div>

  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {
  props: { oracleCard: { type: Card, required: true } },
  data() {
    return {
      hover: false,
    };
  },

  setup(props) {

    return {
      activeCard: computed(() => AppState.activeCard),
      async getCardById() {
        try {
          console.log('Props ID:', props.oracleCard)
          await cardsService.cardsById(props.oracleCard.cardId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    };

  }
}
</script>

<style scoped lang="scss">
.magicCard {
  font-size: small;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.321);
}

.cardPosition {
  z-index: 1;
  right: 100px;
  top: 33px;
}

a {
  background-color: transparent;
}

a:hover {
  text-decoration: none !important;
}

.star {
  color: rgb(210, 210, 25);
  border: rgba(0, 0, 0, 0.251) 1px solid;
  border-radius: 50%;
  right: 200px;
  top: 10px;
  font-size: larger;
}
</style>