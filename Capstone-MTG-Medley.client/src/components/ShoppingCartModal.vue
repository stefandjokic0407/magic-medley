<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="shopping-cart-modal" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title border-bottom" id="offcanvasExampleLabel">Cards you need:</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      These are the cards from <b>{{activeDeck.name}}</b> that you do not already have in your collection. Click each card below to purchase the card from an external site.
    </div>
    <div class="mt-3 row" v-for="m in missingCards" >
      <button class="col-10 btn" type="button">
      </button>
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>