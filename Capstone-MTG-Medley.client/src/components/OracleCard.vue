<template>

<!-- <div>
    <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      Hover me to show the message!
    </span>
    <span v-if="hover">This is a secret message.</span>
  </div> -->

    <div class="col-12 magicCard text-start border p-2" @mouseover="hover = true" @mouseleave="hover = false">
      {{ oracleCard.set_name }}
      <span v-if="oracleCard.prices.usd"><a :href="oracleCard.purchase_uris.tcgplayer">${{ oracleCard.prices.usd }}</a></span>
      <span v-else>{{oracleCard.prices.usd}}</span>
    </div>
    <div class="col-1" v-if="hover">
      <img :src="oracleCard.image_uris.small" alt="">
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
}

</style>