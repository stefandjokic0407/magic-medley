<template>
  <div class="row justify-content-center hero-img">
    <div class="col-12 text-center">
      <!-- <img class="img-fluid" src="../assets/img/FullLogo_Transparent_NoBuffer.png" alt="" /> -->
      <div class="row d-flex justify-content-evenly">
        <div class="col-3 bg-left mx-1">
          <div class="fs-4 btn btn-secondary selectable">
            <router-link :to="{ name: 'Search' }" class="text-my-light">
              Search Cards
            </router-link>
          </div>
        </div>
        <div class="col-3 bg-center mx-1">
          <div class="fs-4 btn btn-secondary selectable">
            <router-link :to="{ name: 'Guild' }" class="text-my-light selectable">
              Guild
            </router-link>
          </div>
        </div>
        <div class="col-3 bg-right mx-1">
          <div class="fs-4 btn btn-secondary selectable">
            <router-link :to="{ name: 'Collection' }" class="text-my-light">
              My Collection
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row footerHeight">
    <div class="col-12 ">
      <FooterNav />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { cardsService } from "../services/CardsService";
import { symbolsService } from "../services/SymbolsService";
import { onMounted } from "vue";
import SearchedCards from "../components/SearchedCards.vue";
import FooterNav from "../components/FooterNav.vue";

export default {
  setup() {
    // async function getSymbols() {
    //   try {
    //     await symbolsService.getSymbols();
    //   }
    //   catch (error) {
    //     logger.error(error);
    //     Pop.toast(error.message, "error");
    //   }
    // }
    onMounted(() => {
      // getSymbols();
    });
    return {
      card: computed(() => AppState.card),
      searchedCards: computed(() => AppState.searchedCards),
    };
  },
  components: { SearchedCards, FooterNav },
};
</script>

<style scoped lang="scss">
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

img {
  height: 30em;
  width: 40em;
}

.hero-img {
  background-image: url(https://wallpaper.dog/large/11041144.jpg);
  background-position: top;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.img-text {
  text-shadow: 0px 0px 1px black;
  font-weight: 700;
  color: #162052;
}

.offcanvas-style {
  background: transparent;
  backdrop-filter: blur(4px);
  border: none;
  width: 20vw;
  text-shadow: none;
  height: fit-content;
}

.bg-left {
  background-image: url(https://images.hdqwalls.com/wallpapers/magic-the-gathering-arena-o6.jpg);
  background-position: center;
  background-size: cover;
  height: 95vh;

}

.bg-left:hover {
  border-left: 2px white solid;
  border-right: 2px white solid;
  box-shadow: 0 0 100px rgb(255, 255, 255);
}


.bg-center {
  background-image: url(https://wallpaperaccess.com/full/251814.jpg);
  background-position: center;
  background-size: cover;
  height: 95vh;
}

.bg-center:hover {
  border-left: 2px white solid;
  border-right: 2px white solid;
  box-shadow: 0 0 100px rgb(255, 255, 255);
}

.bg-right {
  background-image: url(https://i.pinimg.com/originals/d2/85/a3/d285a31cd7a4bf82c9caf8127bcb4dc5.jpg);
  background-position: center;
  background-size: cover;
  height: 95vh;
}

.bg-right:hover {
  border-left: 2px white solid;
  border-right: 2px white solid;
  box-shadow: 0 0 100px rgb(255, 255, 255);
}
</style>
