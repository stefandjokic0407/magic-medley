<template>

  <div>
    <div v-if="card.image_uris?.normal">
      <img class="img-fluid position-relative shadow cardsBg" :src=card.image_uris?.normal>
    </div>
    <div v-else>
      <img class="img-fluid shadow cardsBg"
        src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
    </div>
    <!-- TODO v-if activeDeck -->
    <button class="btn add-to-deck" @click="createDeckCard(card.cardId)"><i title="add to deck" class="mdi mdi-plus-circle"></i></button>
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
      cards: computed(() => AppState.collection)
    }
  }
}
</script>

<style>
  .add-to-deck{
    position: absolute;
  }

  .position-relative{
    position: relative;
  }

</style>