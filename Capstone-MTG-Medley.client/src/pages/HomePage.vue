<template>
<img :src="card.image_uris.normal">
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { cardsService } from "../services/CardsService"
import { onMounted } from "vue";


export default {



setup() {
  
  async function getRandomCard() {
    try {
      await cardsService.getRandomCard()
    } 
    catch (error) {
      logger.error('[Getting Random Card]', error)
      Pop.toast(error.message, 'error')
    }
  }

  onMounted(() => {
    getRandomCard();
  })

  return {
    card: computed(() => AppState.card)
  };

  }
}
</script>

<style> 

</style>