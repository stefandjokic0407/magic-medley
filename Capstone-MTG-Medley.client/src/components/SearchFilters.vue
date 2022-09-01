<template>
  <div class="search-form">
    <div class="row">
      <form @submit.prevent="searchCards()">
        <!-- SECTION Search bar with checkbox name, type, text -->
        <section>
          <div class="fs-3">
            Search By:
          </div>
          <div class="col-md-12 d-flex justify-content-evenly my-3">
            <div>
              <input checked type="checkbox" class="">
              <label class="form-check-label"><span class="fs-5">Name</span></label>
            </div>
            <div>
              <input @change="toggleType" type="checkbox" class="">
              <label class="form-check-label"><span class="fs-5">Type</span></label>
            </div>
            <div>
              <input @change="toggleText" type="checkbox" class="">
              <label class="form-check-label"><span class="fs-5">Text</span></label>
            </div>
          </div>
          <div class="input-group">
            <input class="form-control" type="text" required v-model="query" />
            <button class="btn btn-outline-dark" type="submit">
              <i class="mdi mdi-magnify"></i>
            </button>
          </div>
        </section>
        <!-- TODO maybe block all the filter options until after a search is done -->
        <!-- SECTION Color -->
        <section>
          <!-- TODO change from collapsable to a drop down toggled by checkbox -->
          <div href="#collapseColor" data-bs-toggle="collapse"
            class="no-select bg-dark mt-3 fs-4 px-2 selectable rounded d-flex justify-content-between">
            Color
          </div>
          <div class="collapse bg-light" id="collapseColor">
            <input type="checkbox" class="mx-2" @change="filterChange('color', 'u')">
            <label class="form-check-label px-3">Blue</label><br>
            <input type="checkbox" class="mx-2" @change="filterChange('color', 'g')">
            <label class="form-check-label px-3">Green</label><br>
            <input type="checkbox" class="mx-2" @change="filterChange('color', 'w')">
            <label class="form-check-label px-3">White</label><br>
            <input type="checkbox" class="mx-2" @change="filterChange('color', 'r')">
            <label class="form-check-label px-3">Red</label><br>
            <input type="checkbox" class="mx-2" @change="filterChange('color', 'b')">
            <label class="form-check-label px-3">Black</label><br>
            <input type="checkbox" class="mx-2" @change="filterChange('color', 'c')">
            <label class="form-check-label px-3">Colorless</label><br>
          </div>
        </section>
        <!-- SECTION Rarity -->
        <section>
          <div href="#collapseRarity" data-bs-toggle="collapse"
            class=" no-select bg-dark mt-3 fs-4 px-2 selectable rounded d-flex justify-content-between">
            Rarity
          </div>
          <div class="collapse bg-light" id="collapseRarity">
            <!-- function filterChange() will pass in the type and value of filter -->
            <input type="checkbox" class="mx-2" @change="filterChange('rarity', 'c')">
            <label class="form-check-label px-3">Common</label><br>
            <input type="checkbox" class="mx-2" @change="filterChange('rarity', 'u')">
            <label class="form-check-label px-3">Uncommon</label><br>
            <input type="checkbox" class="mx-2" @change="filterChange('rarity', 'r')">
            <label class="form-check-label px-3">Rare</label><br>
            <input type="checkbox" class="mx-2" @change="filterChange('rarity', 'm')">
            <label class="form-check-label px-3">Mythic Rare</label><br>
          </div>
        </section>

        <!-- SECTION Mana Cost -->
        <section></section>

        <!-- SECTION cmc -->
        <section></section>

        <!-- SECTION Power -->
        <section></section>

        <!-- SECTION Toughness  -->
        <section></section>

      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { AppState } from "../AppState.js";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {



  setup() {
    const query = ref('')
    let filter = ref({
      color: [],
      rarity: [],
    })




    return {
      filter,
      query,


      async filterChange(type, val) {
        try {
          if (filter.value[type].includes(val)) {
            filter.value[type] = filter.value[type].filter(v => v != val)
          } else {
            filter.value[type].push(val)
          }
        } catch (error) {
          logger.error(error)
          Pop.error('[filtering]', error)
        }
      },

      async searchCards() {
        try {

          filter.value['color'] = filter.value['color'].join('').toString();
          filter.value['rarity'] = filter.value['rarity'].join('').toString();
          console.log(filter.value);
          await cardsService.getCardsBySearch(query.value, filter.value)
          filter.value['color'] = filter.value['color'].split('')
          filter.value['rarity'] = filter.value['rarity'].split('')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

    };

  }
}
</script>

<style>
.cs-range {
  min-width: 100%;
}
</style>