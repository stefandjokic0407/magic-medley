<template>
  <div class="hero-img">
    <!-- TODO fix padding issues -->
    <div class="row">
      <h1 class="col-12 text-center py-3"> My Magic Medley</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 text-center">
      </div>

    </div>
    <div class="sticky-bottom">
      <FooterNav />
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
import FooterNav from "../components/FooterNav.vue";


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
  components: { SearchedCards, FooterNav }
}
</script>

<style scoped>
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

.hero-img {
  background-image: url('https://i.etsystatic.com/17561722/r/il/c0c7fb/2782343489/il_fullxfull.2782343489_l201.jpg');
  background-position: top;
  background-size: cover;
  height: 100vh;
}
</style>