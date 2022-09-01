<template>
  <div class="row justify-content-center hero-img">
    <div class="col-2">
        <button class="btn btn-outline img-text text-black fs-3" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasLeft" aria-controls="offcanvasExample">
            Offcanvas Left
        </button>
    </div>

    <div class="col-8 text-center my-5">
      <img class="img-fluid" src="../assets/img/FullLogo_Transparent_NoBuffer.png" alt="">
    </div>

    <div class="col-2">
        <button class="btn btn-outline img-text text-black fs-3" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight" aria-controls="offcanvasExample">
            Offcanvas Right
        </button>
    </div>

    <div>
      <FooterNav />
    </div>
  </div>


  <div class="offcanvas offcanvas-start offcanvas-style" tabindex="-1" id="offcanvasLeft"
    aria-labelledby="offcanvasExampleLabel">
  </div>

  <div class="offcanvas offcanvas-end offcanvas-style" tabindex="-1" id="offcanvasRight"
    aria-labelledby="offcanvasExampleLabel">
  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { cardsService } from "../services/CardsService"
import { symbolsService } from "../services/SymbolsService"
import { onMounted } from "vue";
import SearchedCards from "../components/SearchedCards.vue";
import FooterNav from "../components/FooterNav.vue";


export default {
  setup() {
    async function getRandomCard() {
      try {
        let card = await cardsService.getRandomCard();
      }
      catch (error) {
        logger.error("[Getting Random Card]", error);
        Pop.toast(error.message, "error");
      }
    }
    async function getSymbols() {
      try {
        await symbolsService.getSymbols();
      }
      catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    }
    onMounted(() => {
      getRandomCard();
      getSymbols();
    });
    return {
      card: computed(() => AppState.card),
      searchedCards: computed(() => AppState.searchedCards),
    };
  },
  components: { SearchedCards, FooterNav }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

img{
  height: 40em;
  width: 50em;
}

.hero-img {
  background-image: url(../assets/img/bg-mtg.jpg);
  background-position: top;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

/* .img-text {
  text-shadow: 1px 1px 2px black;
  font-weight: 700;
  color: rgb(215, 215, 215);
} */

.offcanvas-style {
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(4px);
  border: solid #8d8b8b1f;
  color: white;
  border-radius: 8px;
  text-shadow: 5px 5px 5px black;
  padding: 0.5em;
  width: 30vw;
  height: 76vh;
}
</style>