<template>
  <!-- <button @click="getRandomCard()">Click Me</button> -->
  <div class="row">
      <div v-for="c in searchedCards" :key="c.id" class="col-12 col-md-2">
        <SearchedCards :card="c" />
    </div>
  </div>
  <div>
    <div class="row mx-5">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <!-- <img class="img-fluid" :src="card.image_uris.normal" alt="Photo"> -->
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="row">
          <!-- <button class="col-7 btn text-start noDeco selectable"><a :href="card.purchase_uris.tcgplayer">Buy on
                TCGplayer ${{ card.prices.usd }}</a></button>
            <button class="col-7 btn text-start selectable"><a :href="card.purchase_uris.cardmarket">Buy foil on
                TCGplayer ${{ card.prices.usd_foil }}</a></button>
            <button class="col-7 btn text-start selectable"><a :href="card.purchase_uris.cardhoarder">Buy on Cardhoarder
                {{ card.prices.tix }}</a></button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { cardsService } from "../services/CardsService"
import { symbolsService } from "../services/SymbolsService"
import { onMounted } from "vue";
import SearchedCards from "../components/SearchedCards.vue";


export default {
  setup() {
    async function getRandomCard() {
      try {
        let card = await cardsService.getRandomCard();
      }
      catch (error) {
        logger.error("[Getting Random Card]", error);
        Pop.toast(error.message, "error");
      }
    }
    async function getSymbols() {
      try {
        await symbolsService.getSymbols();
      }
      catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    }
    onMounted(() => {
      getRandomCard();
      getSymbols();
    });
    return {
      card: computed(() => AppState.card),
      searchedCards: computed(() => AppState.searchedCards),
    };
  },
  components: { SearchedCards }
}
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>