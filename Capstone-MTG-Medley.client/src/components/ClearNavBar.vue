<template>
    <nav class="navbar navbar-expand-lg  bgClear px-3 mx-0 my-0 py-0 navHeight">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center" title="Home">
          <img alt="logo" src="../assets/img/FullLogo_Transparent_NoBuffer.png" height="55" />
        </div>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto">
          <li>
            <router-link :to="{ name: 'Collection' }"
              class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">
              Collection
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Search' }"
              class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">
              Search
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Guild' }"
              class="btn text-black lighten-30 selectable text-uppercase square buttonPadding">
              Guild
            </router-link>
          </li>
        </ul>
        <!-- <SearchForm /> -->
        <!-- LOGIN COMPONENT HERE -->
        <div class="me-5 pe-3 fs-4 no-select">
          <Login />
        </div>
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
  </style>
  