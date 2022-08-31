<template>
  <form @submit.prevent="searchCardsTwo">
  <div class="input-group">
    <input class="form-control" type="text" required v-model="query" />
    <button class="btn btn-outline-dark" type="submit">
      <i class="mdi mdi-magnify"></i>
    </button>
  </div>
</form>
</template>

<script>
import { ref } from "vue";
import { router } from "../router";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {



  setup() {

    const query = ref('')

    return {
      query,
      async searchCards() {
        try {
          await cardsService.getCardsBySearch(query.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async searchCardsTwo() {
        try {
          await cardsService.searchBarGet(query.value)
          router.push({ name: 'Search'})
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    };

  }
}
</script>

<style>
 input {
   outline: black !important;
   border: black;
 }
</style>