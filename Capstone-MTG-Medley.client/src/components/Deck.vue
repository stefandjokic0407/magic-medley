<template>

  <div>
    <button class="btn add-to-deck" @click="setActiveDeck(deck.deckId)">
    <div>
      <p>{{d.name}}</p>
      <img class="img-fluid position-relative shadow cardsBg" :src=deck.picture>
    </div>
    </button>
  </div>

</template>
<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  props: { deck: { type: Object, required: true } },

  setup() {
    return {
      decks: computed(() => AppState.decks)
    }
  }
}
</script>

<style>
.add-to-deck {
  position: absolute;
}

.position-relative {
  position: relative;
}
</style>