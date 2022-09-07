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
        <router-link class="btn square btn-warning" :to="{ name: 'Account' }"
          >Edit Account
        </router-link>
      </div>
    </div>

    <!-- SECTION Profile Decks -->

    <div class="row align-items-center justify-content-center mx-1 position-relative" v-for="d in decks" :key="d.id">
        <div :deck="d" @click="setActiveDeck" type="button" data-bs-toggle="modal"
            :data-bs-target="'#deckModal'" class="mt-4 col-12 px-0">
            <div v-if="deck.picture">
              <img class="img-fluid borderRadius shadow cardsBg" :src=deck.picture :title="deck.name">
            </div>
        </div>
    </div>

    <!-- SECTION Profile Guild -->
    <div class="row"></div>
  </section>
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

export default {
  // props: { deck: { type: Object, required: true } },
  setup() {
    
    const route = useRoute();

    // NOTE this function is getting your profile using the Id, it takes in a users profileId
    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.profileId);
      } catch (error) {
        Pop.error("[Getting profile by Id]", error);
        router.push({ name: "Home" });
      }
    }

    async function getProfileDecks() {
      try {
        await decksService.getAccountDecks(route.params.profileId)
      } catch (error) {
        Pop.error('[getting profile decks]', error)
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
      decks: computed(() => AppState.decks),
      cover: computed(
        () =>
          `url(${
            AppState.activeProfile?.coverImg ||
            "https://cdn.pixabay.com/photo/2017/07/16/17/33/background-2509983_1280.jpg"
          })`
      ),
    };
  },
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
</style>
