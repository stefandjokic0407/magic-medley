<template>
  <div class="input-group">
    <input class="form-control" type="text" required v-model="query" />
    <button @click="" class="btn btn-outline-dark" type="submit">
      <i class="mdi mdi-magnify"></i>
    </button>
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
 input {
   border: black;
 }
</style>