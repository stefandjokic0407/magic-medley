<template>

  <div class="row collectionPageBg collectionPageViewHeight">
    <div class="col-1">
      <CollectionPageNavbar />
    </div>
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

            <!-- SECTION CAROUSEL FOR DECK CARDS// DIDN'T THINK IT LOOKED GOOD BUT COMMENTED IT OUT FOR NOW  -->
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
        <div class="col-9 mx-auto">
          <div class="row ">
            <div class="myCollectionsBanner mx-auto col-12 col-lg-10 align-items-center d-flex mt-4">
              <div class="row mx-auto">
                <div class="col-12">
                  <h1 class="bannerFontSize text-center deckText">My Collection</h1>
                </div>
              </div>
            </div>
          </div>
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
    <div v-if="decks" class="d-none d-md-block col-md-2 myDecksSideBar px-0">
      <div class="row mx-auto">
        <div @click.prevent="noActive" v-if="activeDeck" class="deckImg col-11 mx-auto mt-1 selectable">
          <div class="row">
            <h5 class="deckText mb-0 col-12">{{ activeDeck.name }}</h5>
            <p v-if="activeDeck" class="col-12 deckText">Cards:{{ " " + deckCards.length }}</p>
          </div>
        </div>
        <div v-if="activeDeck" v-for="c in displayCards" :key="c.id" class="col-12 mx-auto position-relative">
          <DeckCardCanvas :card="c" />
        </div>
        <img v-if="!activeDeck" class="img-fluid" src="src/assets/img/fancy banner.png" alt="">
        <div v-if="decks.length && !activeDeck" class="row mx-auto">
          <div v-for="d in decks" :key="d.id" class="col-12 col-md-12 mx-auto my-2">
            <Deck :deck="d" />
          </div>
        </div>
      </div>
    </div>

    <div class="row fixed-bottom mx-auto justify-content-end px-0">
      <button v-if="!activeDeck" data-bs-toggle="modal" data-bs-target="#deck-form"
        class=" deckText  square col-2 createButton" @click.prevent="setEditable">CREATE</button>
      <button v-if="activeDeck" class="deckText square col-1 deleteButton" @click.prevent="deleteDeck">DELETE
      </button>
      <button v-if="activeDeck" data-bs-toggle="modal" data-bs-target="#deck-form"
        class="deckText square col-1 editButton">EDIT</button>
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
import CollectionPageNavbar from "../components/CollectionPageNavbar.vue";

export default {
  setup() {

    // async function getAccountCards() {
    //   try {
    //     await cardsService.getAccountCards()
    //   }
    //   catch (error) {
    //     logger.log("[getting all cards]", error);
    //     Pop.error(error);
    //   }
    // }
    // async function getAccountDecks() {
    //   try {
    //     const accountId = AppState.account.id
    //     await decksService.getAccountDecks(accountId)
    //   } catch (error) {
    //     logger.error('[getting account decks]', error);
    //     Pop.error(error);
    //   }
    // }

    onMounted(() => {
      // getAccountDecks();
      // getAccountCards();
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
          AppState.activeDeck = null
        } catch (error) {
          logger.error('[Deleting Deck]', error)
          Pop.toast(error.message, 'error')
        }
      },
      async getAccountCards() {
        try {
          await cardsService.getAccountCards()
        }
        catch (error) {
          logger.log("[getting all cards]", error);
          Pop.error(error);
        }
      },
      async getDecks() {
        try {
          const accountId = AppState.account.id
          await decksService.getAccountDecks(accountId)
        } catch (error) {
          logger.error('[Getting Decks]', error)
          Pop.toast(error.message, 'error')
        }
      },
    };
  },
  components: { SearchedCards, CollectionCard, DeckForm, Deck, DeckCard, DeckCardCanvas, CollectionPageNavbar }
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
  border-left: solid 5px rgba(0, 0, 0, 0.43);
  border-right: solid 5px rgba(0, 0, 0, 0.43);
  /* color: white; */
  height: 95VH;
  position: fixed;
  right: 0;
  overflow-y: auto;
}

.createButton {
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(4px);
  border-right: solid 5px rgba(0, 0, 0, 0.43);
  border-left: solid 5px rgba(0, 0, 0, 0.43);
  height: 5vh;
  border-top: 0px;
}

.editButton {
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(4px);
  border-right: solid 5px rgba(0, 0, 0, 0.43);
  border-left: 0px;
  border-top: 0px;
  height: 5vh;
}

.deleteButton {
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(4px);
  border-left: solid 5px rgba(0, 0, 0, 0.43);
  height: 5vh;
  border-top: 0px;
  border-right: 0px;
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
  background-color: #faea9b;
  background-image: url("https://giffiles.alphacoders.com/134/134977.gif");
  background-repeat: none;
  min-height: 100%;
  overflow-y: auto;
  min-width: 1024px;
  background-size: cover;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

.collectionPageViewHeight {
  height: 100%;
}

.myCollectionsBanner {
  background-image: url(src/assets/img/smaller_banner-removebg-preview.png);
  background-position: center;
  background-size: cover;
  height: 100%;
  width: auto;
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