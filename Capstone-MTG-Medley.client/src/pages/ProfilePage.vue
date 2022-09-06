<template>
  <header>
    <Navbar />
  </header>

  <section>
    <!-- SECTION Profile Details -->
    <div class="row">
      <div class="profile-details text-dark">
        <img class="img-fluid profile-img" :src="profile.picture" alt="" />
        <div class="px-2">
          <p>{{ profile.name }}</p>
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
    <div class="row"></div>

    <!-- SECTION Profile Guilds -->
    <div class="row"></div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { router } from "../router";
import { profilesService } from "../services/ProfilesService";
import Pop from "../utils/Pop";

export default {
  setup() {
    const route = useRoute();

    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.profileId);
      } catch (error) {
        Pop.error("[Getting profile by Id]", error);
        router.push({ name: "Home" });
      }
    }

    onMounted(() => {
      getProfileById();
    });

    return {
      route,
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
    };
  },
};
</script>

<style scoped lang="scss">
.profile-img {
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  border-radius: 50%;
  border: #b6d369 solid 2px;
}
</style>
