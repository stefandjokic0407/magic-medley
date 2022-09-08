<template>
  <nav class="navbar deckText bgClear navHeight mx-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex  bgClear flex-column align-items-center" title="Home">
        <img class='' alt="logo" src="../assets/img/FullLogo_Transparent_NoBuffer.png" height="55" />
      </div>
    </router-link>
    <button class="navbar-toggler deckText" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon deckText" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'Collection' }" class="btn my-4 text-uppercase square buttonPadding">
            Collection
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Search' }" class="btn my-4 text-uppercase square buttonPadding">
            Search
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Guild' }" class="btn my-4 text-uppercase square buttonPadding">
            Guild
          </router-link>
        </li>
      </ul>
      <!-- <SearchForm /> -->
      <!-- LOGIN COMPONENT HERE -->
    </div>
  </nav>
</template>

<script>
import SearchForm from "./SearchForm.vue";
export default {
  setup() {
    return {};
  },
  components: { SearchForm }
};
</script>

<style scoped lang="scss">
a:hover {
  text-decoration: none;
}

.deckText {
  -webkit-text-stroke: .5px black;
  color: rgba(255, 255, 255, 0.88) !important;
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.buttonPadding {
  padding-top: 21px;
  padding-bottom: 21px;
  border-bottom: none;
  border-top: none;
}

.navHeight {
  height: 10VH;
}

// .bgClear {
//   background-color: rgba(0, 0, 0, 0) !important;
// }
</style>
