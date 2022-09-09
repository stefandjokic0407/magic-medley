<template>
  <header class="fixed-top img-text">
    <Navbar />
  </header>

  <section v-if="searchedCards" class="row">
    <SearchFilters />
    <!-- <div class="col-md-12 bg-search"> -->
    <div class="card-grid bg-search">
      <div v-for="c in searchedCards" :key="c.id" class="grid-item">
        <SearchedCards :card="c" />
      </div>
    </div>
    <div v-if="nextPage" class="row justify-content-center py-3">
      <button
        @click="changePage(nextPage, page + 1)"
        class="btn btn-outline-light w-50"
      >
        More Results
      </button>
    </div>
    <!-- </div> -->
  </section>

  <!-- FIXME maybe need to set a time for this to show while the page is loading? -->
  <section v-else>
    <div>Loading ...</div>
  </section>
</template>

<script>
import SearchFilters from "../components/SearchFilters.vue";
import SearchForm from "../components/SearchForm.vue";
import SearchedCards from "../components/SearchedCards.vue";
import { AppState } from "../AppState";
import { computed, ref } from "@vue/reactivity";
import { logger } from "../utils/Logger.js";
import { cardsService } from "../services/CardsService.js";
import ClearNavBar from "../components/ClearNavBar.vue";
import Navbar from "../components/Navbar.vue";
export default {
  setup() {
    const page = ref(1);

    return {
      page,
      card: computed(() => AppState.card),
      searchedCards: computed(() =>
        AppState.searchedCards.slice(page.value - 1, 175 * page.value - 1)
      ),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      async changePage(url, num) {
        try {
          await cardsService.changePage(url);
          page.value = num;
        } catch (error) {
          logger.log(error);
        }
      },
    };
  },
  components: { SearchFilters, SearchForm, SearchedCards, ClearNavBar, Navbar },
};
</script>

<style lang="scss" scoped>
.card-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.4em;

  .grid-item {
    align-self: stretch;
    justify-self: stretch;
  }
}

.img-text {
  color: whitesmoke !important;
  text-shadow: 1px 1px 3px black;
}

.bg-search {
  background-color: rgba(6, 19, 32, 255);
}
</style>
