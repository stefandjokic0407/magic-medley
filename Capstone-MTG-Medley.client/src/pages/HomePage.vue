<template>
  <div class="row justify-content-center hero-img">
    <div class="col-12 text-center">
      <div class="row d-flex justify-content-evenly">
        <div @click="searchPage()"
          class="col-3 bg-left text-light mx-1 d-flex align-items-center justify-content-center">
          <div class="fs-4 selectable effect2">
            <h1 class="effect">Search for your cards</h1>
          </div>
        </div>
        <div @click="guildPage()"
          class="col-3 bg-center mx-1 text-light d-flex align-items-center justify-content-center">
          <div class="fs-4 selectable effect2">
            <h1 class="effect">Guild</h1>
          </div>
        </div>
        <div @click="collectionPage()"
          class="col-3 bg-right mx-1 text-light d-flex align-items-center justify-content-center">
          <div class="fs-4 selectable effect2">
            <router-link :to="{ name: 'Collection' }" class="text-my-light">
              <h1 class="effect">My Collection</h1>
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
import { onMounted } from "vue";
import SearchedCards from "../components/SearchedCards.vue";
import FooterNav from "../components/FooterNav.vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
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

      async searchPage() {
        try {
          router.push({ name: "Search", params: {} })
        } catch (error) {
          console.log(error)
        }
      },

      async guildPage() {
        try {
          router.push({ name: "Guild", params: {} })
        } catch (error) {
          console.log(error)
        }
      },

      async collectionPage() {
        try {
          router.push({ name: "Collection", params: {} })
        } catch (error) {
          console.log(error)
        }
      }



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
  height: 93vh;
  transition: 2 ease;
}

.bg-left:hover {
  border-left: 2px white solid;
  border-right: 2px white solid;
  box-shadow: 0 0 100px rgb(249, 58, 58);
  transform: translate(0, -1px);
  cursor: pointer;
}


.bg-center {
  background-image: url(https://wallpaperaccess.com/full/251814.jpg);
  background-position: center;
  background-size: cover;
  height: 93vh;
  transition: 2 ease;
}

.bg-center:hover {
  border-left: 2px white solid;
  border-right: 2px white solid;
  box-shadow: 0 0 100px rgb(15, 160, 238);
  transform: translate(0, -1px);
  cursor: pointer;
}

.bg-right {
  background-image: url(https://i.pinimg.com/originals/d2/85/a3/d285a31cd7a4bf82c9caf8127bcb4dc5.jpg);
  background-position: center;
  background-size: cover;
  height: 93vh;
  transition: 2 ease;
}

.bg-right:hover {
  border-left: 2px white solid;
  border-right: 2px white solid;
  box-shadow: 0 0 100px rgb(255, 255, 255);
  transform: translate(0, -1px);
  cursor: pointer;
}


// EFFECT AND EFFECT2 ARE FOR THE STYLING ON THE HOVER EFFECT TEXT
.effect {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.effect2 {
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.bg-left:hover .effect2 {
  opacity: 1;
}

.bg-center:hover .effect2 {
  opacity: 1;
}

.bg-right:hover .effect2 {
  opacity: 1;
}
</style>
