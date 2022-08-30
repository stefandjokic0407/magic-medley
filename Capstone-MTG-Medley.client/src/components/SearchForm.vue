<template>
  <div class="search-form">
    <form @submit.prevent="searchCards">
      <div class="input-group">
        <input class="form-control" type="text" required v-model="query" />
        <button class="btn btn-outline-success" type="submit">
          <i class="mdi mdi-magnify"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
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
    }
  };

  }
}
</script>

<style> 

</style>