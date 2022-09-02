<template>
  <header>
    <Navbar />
  </header>
  <section class="row">

    <button class="btn col-md-2 offset-md-5 d-flex align-items-center justify-content-center" type="button"
      data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      <i class="mdi mdi-chevron-double-down fs-3"></i> Search <i class="mdi mdi-chevron-double-down fs-3"></i>
    </button>
    <div class="col-md-12">
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <SearchFilters />
        </div>
      </div>
    </div>
    <!-- <div class="col-md-3 search-bar py-5">
      <SearchFilters />
    </div> -->
    <div class="col-md-12">
      <div class="row">
        <div v-for="c in searchedCards" :key="c.id" class="col-md-2">
          <SearchedCards :card="c" />
        </div>
      </div>
      <div v-if="nextPage" class="row justify-content-center py-3">
        <button @click="changePage(nextPage, page + 1)" class="btn btn-outline-dark w-50">More Results</button>
      </div>
    </div>
  </section>
</template>



<script>
import SearchFilters from '../components/SearchFilters.vue';
import SearchForm from '../components/SearchForm.vue';
import SearchedCards from '../components/SearchedCards.vue';
import { AppState } from '../AppState';
import { computed, ref } from '@vue/reactivity';
import { logger } from '../utils/Logger.js';
import { cardsService } from '../services/CardsService.js';
export default {
  setup() {
    const page = ref(1)

    return {
      page,
      card: computed(() => AppState.card),
      searchedCards: computed(() => AppState.searchedCards.slice(page.value - 1, (175 * page.value) - 1)),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      async changePage(url, num) {
        try {
          await cardsService.changePage(url)
          page.value = num
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