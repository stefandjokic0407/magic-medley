<template>
  <header class="fixed-top">
    <Navbar />
  </header>



  <!-- SECTION Profile Details -->
  <div class="row cover-img ">
    <div class="col-4 profile-details anchor-point">
      <div v-if="profile.id == account.id" title="Edit Account" class="edit-btn">
        <router-link class="bg-warning rounded-circle " :to="{ name: 'Account' }"><i class="mdi mdi-pen p-1"></i>
        </router-link>
      </div>
      <img class="img-fluid profile-img" :src="profile.picture" alt="" />
      <div class="glass-card rounded p-3 my-3">
        <h3>{{ profile.name }}</h3>
        <p>{{ profile.email }}</p>
        <!-- NOTE we have no bio to add -->
        <!-- <p>{{ profile.bio }}</p> -->
        <p>{{profile.bio}}</p>
      </div>
    </div>

    <!-- SECTION Profile Decks -->

    <div class="col-8 profile-decks">
      <div class="row align-items-center">
        <div class="col-1 text-center" @click="scrollLeft">
          <i class="button-style mdi mdi-chevron-left"></i>
        </div>
        <div class="col-10 deck-container-bg rounded">
          <div class="row deck-cards-container">
            <div v-for="d in decks" :key="d.id" class="card hero-img col-3 px-4 mx-2">
              <div class=" px-3 pt-3 ">
                <img v-if="d" :src='d?.picture' class="card-img-top img-max">
                <img v-else
                  src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
                  class="img-fluid" alt="...">
              </div>
              <h5 class="card-title text-center text-dark"><b>{{d?.name}}</b></h5>
              <div v-if="!d?.picture" class="card-img-top">
                <img
                  src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
                  class="" alt="...">
              </div>
              <div class="card-body text-dark fs-5">
                <span class="d-flex justify-content-between">
                  <p class="text-center" v-if="d.avgRating">
                    Rating:<br>{{(d?.avgRating/d.rating?.length).toFixed(1)}}/5
                  </p>
                  <p class="text-center" v-else>
                    Rating:<br>Not Rated
                  </p>
                  <button @click="deckDetails(d.id)" class="btn btn-outline-dark">
                    Deck Details
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1 text-center" @click="scrollRight">
          <i class="button-style mdi mdi-chevron-right"></i>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { router } from "../router";
import { decksService } from "../services/DecksService.js";
import { profilesService } from "../services/ProfilesService";
import Pop from "../utils/Pop";
import Navbar from "../components/Navbar.vue";
import { guildsService } from "../services/GuildsService.js";

export default {
  setup() {
    const scrollPosition = ref(0);
    const route = useRoute();
    // NOTE this function is getting your profile using the Id, it takes in a users profileId
    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.profileId);
      }
      catch (error) {
        Pop.error("[Getting profile by Id]", error);
        router.push({ name: "Home" });
      }
    }
    async function getProfileDecks() {
      try {
        await decksService.getProfileDecks(route.params.profileId);
        console.log(route.params.profileId);
      }
      catch (error) {
        Pop.error("[getting profile decks]", error);
      }
    }

    async function getGuildProfile(){
    try {
    await guildsService.getGuildProfile()
    } catch (error) {
    Pop.error(error)
    }
    }




    onMounted(() => {
      getProfileById();
      getProfileDecks();
      getGuildProfile()
    });
    return {
      route,
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
      decks: computed(() => AppState.profileDecks),
      cover: computed(() => `url(${AppState.activeProfile?.coverImg ||
        "https://cdn.pixabay.com/photo/2017/07/16/17/33/background-2509983_1280.jpg"})`),

      scrollLeft() {
        let content = document.querySelector(".deck-cards-container");
        if (scrollPosition.value > 100) {
          scrollPosition.value -= 1000;
        }
        content.scrollTo({
          left: scrollPosition.value,
          behavior: "smooth",
        });
      },

      scrollRight() {
        let content = document.querySelector(".deck-cards-container");
        if (scrollPosition.value <= 2000) {
          scrollPosition.value += 1000;
        }
        content.scrollTo({
          left: scrollPosition.value,
          behavior: "smooth",
        });
      },
      async deckDetails(deckId) {
        try {
          await decksService.setActiveDeck(deckId);
          router.push({ name: "DeckDetails", params: { deckId: AppState.activeDeck?.id } });
          // Modal.getOrCreateInstance(document.getElementById('deck-modal')).hide()
        }
        catch (error) {
          console.log(error);
        }
      },

    };
  },
  components: { Navbar }
};
</script>

<style scoped lang="scss">
.cover-img {
  height: 100vh;
  background-position: center;
  // background-attachment: fixed;
  background-size: cover;
  // display: grid;
  place-content: center;
  color: aliceblue;
  background-image: v-bind(cover);
}

.profile-img {
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  border-radius: 50%;
  border: #b6d369 solid 2px;
}

.glass-card {
  background: rgb(54 52 75 / 38%);
  backdrop-filter: blur(4px);
  border: solid #8d8b8b1f;
  border-radius: 8px;
  padding: 1em;
  color: #f2e9e4 !important;
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
}

.hero-img {
  background-image: url(../assets/img/note.png);
  background-position: center;
  background-size: cover;
  height: 475px;
  width: 325px;
}

* {
  max-height: 100vh;
}

.profile-details {
  margin-top: 10vh;
}

.profile-decks {
  margin-top: 10vh;
}

.img-max {
  max-height: 300px;
}

.button-style {
  color: #ffffff;
  text-shadow: 3px 3px 3px black;
  font-size: 4em;
  padding: 0%;
}

.deck-container-bg {
  background: rgb(54 52 75 / 38%);
  backdrop-filter: blur(4px);
  border: solid #8d8b8b1f;
  border-radius: 8px;
  padding: 1em;
  padding-left: 2em;
}

.deck-cards-container {
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  max-width: 100vw;
  overflow-x: scroll;

  >div {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
}



.edit-btn {
  position: relative;
  top: 110px;
  left: 90px;
}
</style>
