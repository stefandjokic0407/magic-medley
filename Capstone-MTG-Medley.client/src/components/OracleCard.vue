<template>

<!-- NOTE Make the cursor at the top left. Mouse move. On event move track
  STRETCH GOAL -->

  <div class="row position-relative">
    <div class="col-1 position-absolute cardPosition" v-if="hover">
      <img :src="oracleCard.image_uris.small" alt="">
    </div>
    <div class="col-10 offset-1 magicCard text-start border p-2 mt-1 rounded " @mouseover="hover = true"
      @mouseleave="hover = false">
      {{ oracleCard.set_name }}
      <span class="magicCard" :title="oracleCard.set_name + ' ' + oracleCard.name" v-if="oracleCard.prices.usd"><a
          :href="oracleCard.purchase_uris.tcgplayer">${{ oracleCard.prices.usd }}</a></span>
      <span v-else>{{ oracleCard.prices.usd }}</span>
    </div>
  </div>

</template>

<script>
import { Card } from "../models/Card";


export default {
  props: { oracleCard: { type: Card, required: true } },
  data() {
    return {
      hover: false,
    };
  },

  setup() {

    return {};

  }
}
</script>

<style>
.magicCard {
  font-size: small;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.321);
}

.cardPosition {
  z-index: 1;
  right: 350px;
  top: auto;
}

a {
  background-color: transparent;
}

a:hover {
  text-decoration: none !important;
}
</style>