<template>
  <header>
    <Navbar />
  </header>

  <section>
    <div class="row">
      <div class="profile-details rounded text-dark elevation-2">
        <img src="" alt="" />
        <div class="px-2">
          <p>{{ profile.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, popScopeId } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { router } from "../router";
import { profilesService } from "../services/ProfilesService";
import { logger } from "../utils/Logger";
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

<style scoped lang="scss"></style>
