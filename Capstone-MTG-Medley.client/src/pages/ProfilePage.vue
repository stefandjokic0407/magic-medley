<template>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { router } from "../router";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {



setup() {

const route = useRoute()

async function getProfileById() {
  try {
    await profilesService.getProfileById(route.params.profileId)
  } catch (error) {
    logger.error(error)
    Pop.toast(error.message, 'error')
    router.push({ name: 'Home' })
  }
}

onMounted(() => {
  getProfileById();
})

  return {
    account: computed(() => AppState.account),
    profile: computed(() => AppState.activeProfile)
  };

  }
}
</script>

<style> 

</style>