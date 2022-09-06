<template>
  <header class="row sticky-top">
    <Navbar />
  </header>
  <div class="row">
    <div class="col-10 px-0">
      <div class="row align-items-center">
        <!-- add deck component -->
        <!-- <h3 class="col-4 col-md-12">My Deck
        </h3> -->
        <!-- <div v-if="activeDeck" class="col-12 col-md-2 ms-2">
          <div v-if="activeDeck" class="row">
            <h4 class="m-0 p-0 text-center col-12 my-2">{{ activeDeck?.name }}</h4>
            <h5 v-if="deckCards.length" class="m-0 p-0 text-center col-12">Cards:{{ " " + deckCards.length }}</h5>
            <button v-if="activeDeck" class="btn btn-outline col-6 mx-auto" data-bs-toggle="modal"
              :data-bs-target="'#deck-form'">Edit
              Deck</button>
            <button v-if="activeDeck" class="btn btn-outline col-6 mx-auto" data-bs-toggle="modal"
              :data-bs-target="'#deck-form'">Delete</button>
          </div>
        </div> -->
        <!-- <div v-if="activeDeck" class="col-12 col-md-4">
          <div class="row">
            <img class="img-fluid col-3" :src="activeDeck?.picture" alt="" :title="activeDeck?.name" srcset="">
            <p class="col-9">{{ activeDeck?.description }}</p>
          </div>
        </div> -->
        <div class="col-12">
          <div class="row">

            <!-- SECTION CAROUSEL FOR DECK CARDS// DIDN'T THINK IT LOOKED GOOD BUT COMMENTED IT OUT FOR NOW -->
            <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="c in displayCards" :key="c.id" class="carousel-item active">
              <DeckCard :card="c" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> -->

            <!-- 
            <div v-if="activeDeck" v-for="c in displayCards" :key="c.id" class="col-2 col-md-1 mx-1 my-3">
              <DeckCard :card="c" />
            </div> -->
          </div>
        </div>
        <div>
          <h3>My Collection</h3>
          <div class="row">
            <div v-for="c in cards" :key="c.id" class="col-4 col-md-2">
              <CollectionCard :card="c" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- SECTION THE OFFCANVAS FOR THE DECKS -->
    <!-- <div class="col-2 p-3 text-end">
      <button class="btn btn-outline-dark img-text deckCanvas" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasExample" data-bs-scroll="true">
        Your Decks
      </button>
    </div> -->
    <div class="col-2 myDecksSideBar px-0">
      <div class="row mx-auto">
        <div @click.prevent="noActive" v-if="activeDeck"
          class="d-flex align-items-end deckImg col-11 mx-auto mt-1 selectable">
          <h5 class="deckText text-start mb-0">{{ activeDeck.name }}</h5>
        </div>
        <div v-if="activeDeck" v-for="c in displayCards" :key="c.id" class="col-12 mx-auto">
          <DeckCardCanvas :card="c" />
        </div>
        <img v-if="!activeDeck" class="img-fluid" src="src/assets/img/fancy banner.png" alt="">
        <div v-if="decks.length && !activeDeck" class="row mx-auto">
          <div v-for="d in decks" :key="d.id" class="col-12 col-md-10 mx-auto my-2">
            <Deck :deck="d" />
          </div>
        </div>
        <div class="row fixed-bottom mx-auto">
          <button v-if="!activeDeck" data-bs-toggle="modal" data-bs-target="#deck-form"
            class="btn btn-outline deckText selectable  col-12" @click.prevent="setEditable()">Create
            Deck</button>
          <button v-if="activeDeck" class="btn deckText selectable text-uppercase square col-12"
            @click="deleteDeck()">Delete</button>
        </div>
      </div>
    </div>
  </div>



  <DeckForm />
</template>



<script>

import { computed } from '@vue/reactivity';
import { onMounted, ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { cardsService } from '../services/CardsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import SearchedCards from '../components/SearchedCards.vue';
import CollectionCard from '../components/CollectionCard.vue';
import DeckForm from "../components/DeckForm.vue";
import { decksService } from "../services/DecksService.js";
import Deck from "../components/Deck.vue";
import DeckCard from "../components/DeckCard.vue";
import DeckCardCanvas from "../components/DeckCardCanvas.vue";

export default {
  setup() {

    async function getAccountCards() {
      try {
        await cardsService.getAccountCards()
      }
      catch (error) {
        logger.log("[getting all cards]", error);
        Pop.error(error);
      }
    }
    async function getAccountDecks() {
      try {
        const accountId = AppState.account.id
        await decksService.getAccountDecks(accountId)
      } catch (error) {
        logger.error('[getting account decks]', error);
        Pop.error(error);
      }
    }

    onMounted(() => {
      getAccountDecks();
      getAccountCards();
    });

    return {
      cards: computed(() => AppState.collection),
      decks: computed(() => AppState.decks),
      activeDeck: computed(() => AppState.activeDeck),
      deckCards: computed(() => AppState.deckCards),
      cover: computed(() => `url(${AppState.activeDeck?.picture})`),
      activeCards: computed(() => AppState.activeProfile),
      displayCards: computed(() => {
        let newArray = [...AppState.deckCards]
        for (let i = 0; i < newArray.length; i++) {
          const firstCard = newArray[i];
          firstCard.quantity = 1
          for (let j = i + 1; j < newArray.length; j++) {
            const secondCard = newArray[j];
            if (firstCard.cardId == secondCard.cardId) {
              firstCard.quantity++
              newArray.splice(j, 1)
              j--
            }
          }
        }
        return newArray
      }),

      setEditable() {
        AppState.activeDeck = {}
      },

      async removeFromCollection() {
        try {

        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      async removeFromDeck() {
        try {

        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      noActive() {
        AppState.activeDeck = null
      },

      async deleteDeck() {
        try {
          const yes = await Pop.confirm("Remove Deck?");
          if (!yes) {
            return;
          }
          const deckId = AppState.activeDeck.id
          console.log('Deck Id:', deckId)
          await decksService.deleteDeck(deckId)
          await AppState.activeDeck == null
        } catch (error) {
          logger.error('[Deleting Deck]', error)
          Pop.toast(error.message, 'error')
        }
      },

    };
  },
  components: { SearchedCards, CollectionCard, DeckForm, Deck, DeckCard, DeckCardCanvas }
}
</script>


<style scoped>
.deckCanvas {
  position: fixed;
  right: 0px;
  top: 70px;
}

.myDecksSideBar {
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(4px);
  border: solid 5px rgba(0, 0, 0, 0.43);
  /* color: white; */
  height: 90VH;
  position: fixed;
  right: 0;
}

.myDeckSize {
  max-height: 10VH;
  max-width: 100VW;
}

.offCanvasBorder {
  border: solid black 10px
}

.deckImg {
  aspect-ratio: 4 / 1;
  background-image: v-bind(cover) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  outline: 3px solid #d4af37c3;
}
</style>