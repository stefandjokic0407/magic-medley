<template>
  <header>
    <Navbar />
  </header>

  {{ account }}


</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
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
        console.log()
        await profilesService.getProfileById(AppState.account.id)
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
        router.push({ name: "Home" });
      }
    }

    onMounted(() => {
      getProfileById();
    });

    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
    };
  },
};
</script>

<<<<<<< HEAD
<style scoped lang="scss">
</style>
=======
<style>
</style>
>>>>>>> 9998b04489e7661f264ff3c06b1c92fbe25d0e50
