<template>
  <header>
    <!-- <Navbar /> -->
  </header>

  <main class="container-fluid">
    <router-view />
  </main>

  <footer></footer>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import { cardsService } from "./services/CardsService.js";

export default {
  name: "App",
  setup() {
    async function alphaSearch() {
      const search = "set%3Alea";
      await cardsService.getAlphaSearch(search);
    }

    onMounted(() => {
      alphaSearch();
    });
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
*::-webkit-scrollbar {
  display: none;
}

@import "./assets/scss/main.scss";
</style>
