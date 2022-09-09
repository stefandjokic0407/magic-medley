<template>


  <section class="container-fluid pageBg collectionPageViewHeight">

    <header class="row">
      <ClearNavBar />
    </header>

    <div v-if="activeDeck.id" class="row my-3">
      <div class="col-12 text-center">
        <h1>{{activeDeck.name}}</h1>
        <h4 v-if="activeDeck?.avgRating">Deck Rating:
          {{(activeDeck?.avgRating/activeDeck.rating?.length).toFixed(1)}}/5<span class="mdi mdi-star mdi-24px"></span>
        </h4>
        <h4 v-else>Deck Rating: UNRATED<span class="mdi mdi-star mdi-24px"></span>
        </h4>
        <div class="row">
          <div class="col-3 m-1 p-0">
            <h5 v-if="activeRater">You rated this deck:</h5>
            <h5 v-else>Rate this deck:</h5>
            <button @click="rateDeck(1)" class="btn m-0 p-0 text-warning">
              <i v-if="!activeRater" class="mdi mdi-star-outline mdi-36px"></i>
              <i v-else class="mdi mdi-star mdi-36px"></i>
            </button>
            <button @click="rateDeck(2)" class="btn m-0 p-0 text-warning">
              <i v-if="activeRater?.value >= 2" class="mdi mdi-star mdi-36px"></i>
              <i v-else class="mdi mdi-star-outline mdi-36px"></i>
            </button>
            <button @click="rateDeck(3)" class="btn m-0 p-0 text-warning">
              <i v-if="activeRater?.value >= 3" class="mdi mdi-star mdi-36px text-warning"></i>
              <i v-else class="mdi mdi-star-outline mdi-36px"></i>
            </button>
            <button @click="rateDeck(4)" class="btn m-0 p-0 text-warning">
              <i v-if="activeRater?.value >= 4" class="mdi mdi-star mdi-36px"></i>
              <i v-else class="mdi mdi-star-outline mdi-36px"></i>
            </button>
            <button @click="rateDeck(5)" class="btn m-0 p-0 text-warning">
              <i v-if="activeRater?.value >= 5" class="mdi mdi-star mdi-36px"></i>
              <i v-else class="mdi mdi-star-outline mdi-36px"></i>
            </button>
          </div>
          <div class="col-3"></div>
          <button class="glass btn col-2 m-1" @click="cloneDeck">Copy Deck to My Collection</button>
          <button class="glass btn btn-outline col-2 m-1" @click="compareDeck">Compare to my collection</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row scroll justify-content-center">
        <div class="col-2 p-3" v-for="c in deckCards" :key="c.id">
          <DeckDetailsCard :card="c" />
        </div>
      </div>
    </div>


  </section>


</template>



<script>

import { useRoute } from 'vue-router';
import { decksService } from '../services/DecksService.js';
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { deckCardsService } from '../services/DeckCardsService.js';
import DeckCard from '../components/DeckCard.vue';
import DeckDetailsCard from '../components/DeckDetailsCard.vue';


export default {
  setup() {
    const route = useRoute();


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
      // compareDeckCards();
    });
    return {
      activeDeck: computed(() => AppState.activeDeck),
      activeRater: computed(() => AppState.activeDeck?.rating.find(r => r.creatorId == AppState.account.id)),
      deckCards: computed(() => AppState.deckCards),
      collectionCards: computed(() => AppState.collection),
      cover: computed(() => `url(${AppState.activeDeck?.picture})`),
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

      compareDeck() {
        AppState.deckCards.forEach(dc => {
          if (AppState.collection.find(c => c.name == dc.card.name)) console.log('duplicates', dc)
        })
      },

      compareDeckCards() {
        let newArray = [...AppState.deckCards]
        for (let i = 0; i < newArray.length; i++) {
          const firstCard = newArray[i];
          firstCard.quantity = 1
          for (let j = 0; j < newArray.length; i++) {
            const secondCard = newArray[j];
            if (firstCard.name == secondCard.name) {
              firstCard.quantity++
              newArray.splice(j, 1)
              j--
            }
          }
        }
        AppState.deckCards.forEach(dc => { })
      },



      async rateDeck(num) {
        try {
          const accountId = this.activeDeck.accountId
          const deckId = this.activeDeck.id
          await decksService.rateDeck({ value: num }, deckId, accountId)
        } catch (error) {
          Pop.error(error)
        }
      },
      async cloneDeck() {
        try {
          await decksService.cloneDeck(this.activeDeck.id)
        } catch (error) {
          Pop.error(error)
        }

      }
    };
  },
  components: { DeckCard, DeckDetailsCard }
};
</script>


<style scoped lang="scss">
.pageBg {
  background-color: #f7ae92;
  background-image: url("https://img.freepik.com/free-photo/vintage-textured-watercolor-paper-background_53876-103939.jpg?w=2000");
  background-repeat: none;
  min-height: 100%;
  overflow-y: auto;
  min-width: 1024px;
  background-size: cover;
  background-blend-mode: screen;
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

.scroll {
  overflow-y: scroll;
}

.glass {
  background-color: rgb(0, 0, 0, .2);
}

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

i {
  text-shadow: 0px 0px 20px rgb(0, 0, 0);
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