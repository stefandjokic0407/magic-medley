<template>

    <div class="row">
      <div v-if="card.image_uris?.normal" class="col-12">
        <img class="img-fluid shadow cardsBg" :src=card.image_uris?.normal>
      </div>
      <div v-else class="col-12">
        <img class="img-fluid shadow cardsBg" src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
      </div>
    </div>





</template>
<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Card } from '../models/Card.js';

export default {
props: { card: { type: Card, required: true } },

setup() {
  return {
    cards: computed(()=> AppState.collection)
  }
}
}
</script>
<style>
</style>