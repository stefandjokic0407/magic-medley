<template>
  <header class="row sticky-top">
    <Navbar />
  </header>
  <div class="row collectionPageViewHeight">
    <div class="col-10 px-0">
          <div class="row align-items-center ">
            <div class="myCollectionsBanner mx-auto col-12 col-lg-7 align-items-center d-flex mt-4">
              <div class="row mx-auto">
                <div class="col-12">
                  <h1 class="bannerFontSize text-center deckText">{{activeDeck?.name}}</h1>
                </div>
                <div class="col-3">
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




</template>



<script>

import { useRoute } from 'vue-router';
import { decksService } from '../services/DecksService.js';
import { computed } from '@vue/reactivity';
import { onMounted, ref, watchEffect, } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { deckCardsService } from '../services/DeckCardsService.js';
import DeckCard from '../components/DeckCard.vue';


export default {
    setup() {
        const route = useRoute();
        // async function getDeckCards(deckId) {
        //   try {
        //   await deckCardsService.getDeckCards(deckId)
        //   }
        //   catch (error) {
        //   Pop.error(error);
        //   console.log(error)
        //   }
        // }
        async function setActiveDeck() {
            try {
                await decksService.setActiveDeck(route.params.deckId);
                await deckCardsService.getDeckCards(route.params.deckId);
            }
            catch (error) {
                console.log(error);
                Pop.error("[setting active deck]", error);
            }
        }
        onMounted(() => {
            setActiveDeck();
        });
        return {
            decks: computed(() => AppState.decks),
            activeDeck: computed(() => AppState.activeDeck),
            deckCards: computed(() => AppState.deckCards),
            cover: computed(() => `url(${AppState.activeDeck?.picture})`),
            activeCards: computed(() => AppState.activeProfile),
        };
    },
    components: { DeckCard }
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
.collectionPageViewHeight {
  height: 100%;
}

.myCollectionsBanner {
  background-image: url(src/assets/img/smaller_banner-removebg-preview.png);
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