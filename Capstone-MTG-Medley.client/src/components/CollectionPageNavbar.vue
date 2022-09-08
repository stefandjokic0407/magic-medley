<template>
  <nav class="navbar bgClear navHeight mx-3">
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
          <router-link :to="{ name: 'Collection' }" class="btn deckText my-4 text-uppercase square buttonPadding">
            Collection
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Search' }" class="btn deckText my-4 text-uppercase square buttonPadding">
            Search
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Guild' }" class="btn deckText my-4 text-uppercase square buttonPadding">
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
  -webkit-text-stroke: .5px rgba(0, 0, 0, 0.103);
  color: rgb(255, 255, 255) !important;
  text-shadow:
    3px 3px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  border: none;
}

.deckText:hover {
  transform: scale(1.1);
  transition: ease .1s;
}

.nav-link {
  text-transform: uppercase;
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
