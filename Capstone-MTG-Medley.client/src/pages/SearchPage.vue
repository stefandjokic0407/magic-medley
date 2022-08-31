<template>
  <header>
    <Navbar />
  </header>
  <section class="row">
    <div class="col-md-3 search-bar py-5">
      <SearchFilters />
    </div>
    <div class="col-md-9">
      <div class="row">
        <div v-for="c in searchedCards" :key="c.id" class="col-md-2">
          <SearchedCards :card="c" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-3">
          <button @click="changePage(previousPage)" class="btn btn-outline-dark w-50">Previous</button>
        </div>
        <div class="col-3">
          <button @click="changePage(nextPage)" class="btn btn-outline-dark w-50">Next</button>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import SearchFilters from '../components/SearchFilters.vue';
import SearchForm from '../components/SearchForm.vue';
import SearchedCards from '../components/SearchedCards.vue';
import { AppState } from '../AppState';
import { computed } from '@vue/reactivity';
import { logger } from '../utils/Logger.js';
import { cardsService } from '../services/CardsService.js';
export default {
  setup() {
    return {
      card: computed(() => AppState.card),
      searchedCards: computed(() => AppState.searchedCards),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      async changePage(url) {
        try {
          await cardsService.changePage(url)
        } catch (error) {
          logger.log(error)
        }
      },

    };
  },
  components: { SearchFilters, SearchForm, SearchedCards }
};
</script>



<style>
/* .search-bar {
  background-color: beige;
  height: 100vh;
} */
</style>