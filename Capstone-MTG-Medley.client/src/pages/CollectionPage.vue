<template>
  <header class="row">
    <Navbar />
  </header>
  <div class="row">
    <!-- add deck component -->
    <h3 class="col-12">My Decks <button @click="createDeck" class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">Create Deck</button> </h3>
  </div>
  <div class="row">
    <h3 class="col-12">My Collection</h3>
    <div v-for="c in cards" :key="c.id" :card="c">
      <div class="col-3 card selectable"></div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { cardsService } from '../services/CardsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';


export default {
  setup() {

    async function getAllCards(){
      try {
        await cardsService.getAllCards()
      } catch (error) {
        logger.log('[getting all cards]', error)
        Pop.error(error)
      }
    }

    async function createDeck(newDeck){
      try {
        await decksService.createDeck(newDeck)
      } catch (error) {
        logger.log('[Creating Deck]', error)  
        Pop.error(error)
      }
    }

    onMounted(() => {
      getAllCards();
    })

    return {
      cards: computed(() => AppState.card),
      decks: computed(()=> AppState.decks)
    };

  }
}
</script>

<style>
</style>