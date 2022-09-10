<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="shopping-cart-modal" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title border-bottom" id="offcanvasExampleLabel">Cards you need:</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div v-if="missingCards.length" class="parent">
      <p>These are the cards from <b>{{activeDeck.name}}</b> that you do not already have in your collection. Click any card below to purchase the card from an external site.</p>
    </div>
    <div v-else>
      <p>You have all the cards necessary to make <b>{{activeDeck.name}}!</b> </p>
    </div>
    <div class="mt-3 row" v-for="m in missingCards" :key="m.id">
      <img class="col-12 missing-card-image" type="button" :src="m.card.image_uris.normal">
    </div>
  </div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";


export default {
  setup() {
    return {
      activeDeck: computed(() => AppState.activeDeck),
      missingCards: computed(() => AppState.missingCards),
    }
  }
}
</script>

<style lang="scss" scoped>

.parent{
  position: relative;
  }
.missing-card-image {
  position: absolute;
  transform: translateY(10px);
}
</style>