<template>
  <header class="row sticky-top">
    <Navbar />
  </header>
  <div class="row collectionPageBg collectionPageViewHeight">
    <div class="col-10 px-0">
      <div class="row align-items-center">
        <div>
          <div class="row ">
            <div class="myCollectionsBanner mx-auto col-12 col-lg-7 align-items-center d-flex mt-4">
              <div class="row mx-auto">
                <div class="col-12">
                  <h1 class="bannerFontSize text-center deckText">{{activeDeck.name}}</h1>
                </div>
              </div>
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



  </div>

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


    onMounted(() => {
      getAccountCards();
    });

    return {
      decks: computed(() => AppState.decks),
      activeDeck: computed(() => AppState.activeDeck),
      deckCards: computed(() => AppState.deckCards),
      cover: computed(() => `url(${AppState.activeDeck?.picture})`),
      activeCards: computed(() => AppState.activeProfile),

    };
  }
};
</script>


<style scoped lang="scss">
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

.collectionPageBg {
  background-image: url('https://img.freepik.com/premium-photo/abstract-background-beige-brown-grunge-material-old-paper_213524-129.jpg?w=2000');
  background-size: cover;
  background-position: center;
}

.collectionPageViewHeight {
  height: 100%;
}

.myCollectionsBanner {
  background-image: url(src/assets/img/CollectionsBanner.png);
  background-position: center;
  background-size: cover;
  height: 20VH;
  font-family: MagicMedieval;
}

.bannerFontSize {
  font-size: 4vw;
  padding-bottom: 5.7%;
}

.deckText {
  -webkit-text-stroke: .5px black;
  color: rgba(255, 255, 255, 0.88);
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>