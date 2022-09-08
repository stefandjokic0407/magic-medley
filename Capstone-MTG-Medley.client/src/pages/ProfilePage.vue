<template>
  <header>
    <Navbar />
  </header>

  <section>
    <!-- SECTION Profile Details -->
    <div class="row cover-img">
      <div class="profile-details text-light">
        <img class="img-fluid profile-img" :src="profile.picture" alt="" />
        <div class="glass-card rounded p-3 my-3">
          <h3>{{ profile.name }}</h3>
          <p>{{ profile.email }}</p>
        </div>
      </div>
    </div>

    <div class="row my-2" v-if="profile.id == account.id">
      <div class="col-12">
        <router-link class="btn square btn-warning" :to="{ name: 'Account' }">Edit Account
        </router-link>
      </div>
    </div>

    <!-- SECTION Profile Decks -->

    <!-- <div v-if="profile" class="row align-items-center justify-content-center mx-1">
      <div v-for="d in decks" :key="d.id" @click="setActiveDeck(d.id)" type="button" data-bs-toggle="modal"
        data-bs-target="#deckModal" class="mt-4 col-3 px-4">
        <div v-if="d?.picture">
          <h5>{{d?.name}}</h5>
          <img class="img-fluid shadow card-border" :src=d?.picture :title="d?.name">
        </div>
      </div>
    </div> -->



    <div v-for="d in decks" :key="d.id" @click="setActiveDeck(d.id)" class="card hero-img col-3 px-4">
      <h5 class="card-title text-center text-light"><b>{{d?.name}}</b></h5>
      <div class=" px-5 pt-2" style="max-height: 490px;">
        <img v-if="d" :src='d?.picture' class="card-img-top img-fluid">
        <img v-else
          src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
          class="card-img-top" alt="...">
      </div>
      <div v-if="!d?.picture" class="card-img-top">
        <img
          src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
          class="cardBg img-fluid" alt="...">
      </div>
      <div class="card-body">
        <span class="d-flex justify-content-around">
          <p class="text-center">
            Community Rating:<br>{{(d?.avgRating/d.rating?.length).toFixed(1)}}/5
          </p>
          <button @click="deckDetails" class="btn btn-outline-light">
            Deck Details
          </button>
        </span>
        <p class="card-text px-4">
          {{d?.description}}
        </p>
      </div>
    </div>


    <!-- SECTION Profile Guild -->
    <div class="row"></div>
  </section>
  <DeckModal />
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { router } from "../router";
import { decksService } from "../services/DecksService.js";
import { profilesService } from "../services/ProfilesService";
import Pop from "../utils/Pop";
import DeckModal from "../components/DeckModal.vue";

export default {
  setup() {
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
    onMounted(() => {
      getProfileById();
      getProfileDecks();
    });
    return {
      route,
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
      decks: computed(() => AppState.profileDecks),
      cover: computed(() => `url(${AppState.activeProfile?.coverImg ||
        "https://cdn.pixabay.com/photo/2017/07/16/17/33/background-2509983_1280.jpg"})`),
      async deckDetails() {
        try {
          router.push({ name: "DeckDetails", params: { deckId: AppState.activeDeck?.id } })
          // Modal.getOrCreateInstance(document.getElementById('deck-modal')).hide()
        } catch (error) {
          console.log(error)
        }
      },
      async setActiveDeck(deckId) {
        try {
          await decksService.setActiveDeck(deckId);
        }
        catch (error) {
          Pop.error("[setting active deck]", error);
        }
      },
    };
  },
  components: { DeckModal }
};
</script>

<style scoped lang="scss">
.cover-img {
  height: 500px;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: grid;
  place-content: center;
  color: aliceblue;
  background-image: v-bind(cover);
}

.profile-img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  border-radius: 50%;
  border: #b6d369 solid 2px;
}

.glass-card {
  background: rgba(202, 181, 181, 0.4);
  backdrop-filter: blur(1px);
  text-shadow: 2px 2px 2px rgb(31, 29, 29);
  color: #f2e9e4 !important;
  width: 100%;
}

.deck-container {
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  max-width: 100vw;
  overflow-x: scroll;

  >div {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
}

.card-border {
  border-radius: 5%;
  border: 3px solid darkslategray
}

.hero-img {
  background-image: url(../assets/img/note.png);
  background-position: center;
  background-size: cover;
  height: 750px;
  width: 500px;
}

.deck-modal {
  height: 750px;
  width: 500px;
}
</style>
