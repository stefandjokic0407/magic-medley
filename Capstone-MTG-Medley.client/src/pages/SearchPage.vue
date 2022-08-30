<template>
  <section class="row">
    <div class="col-md-3 search-bar py-5">
      <SearchFilters />
    </div>
    <div class="col-md-9">
      search results
    </div>
  </section>
</template>



<script>
import SearchFilters from '../components/SearchFilters.vue';
import SearchForm from '../components/SearchForm.vue';
export default {
  setup() {
    return {};
  },
  components: { SearchFilters, SearchForm }
};
</script>



<style>
/* .search-bar {
  background-color: beige;
  height: 100vh;
} */
</style>