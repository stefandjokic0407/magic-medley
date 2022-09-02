<template>

  <form @submit.prevent="searchCards()" class="row justify-content-around">
    <!-- SECTION Search bar with checkbox name, type, text -->
    <section class="col-12 col-md-4">
      <div class="row mt-1">
        <div class="col-12 d-flex justify-content-around">
          <div class="form-check form-check-inline">
            <input @click="toggleName" checked class="form-check-input selectable no-select" type="radio"
              name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label  selectable no-select" for="inlineRadio1">Name</label>
          </div>
          <div class="form-check form-check-inline">
            <input @click="toggleType" class="form-check-input selectable no-select" type="radio"
              name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label selectable no-select" for="inlineRadio2">Type</label>
          </div>
          <div class="form-check form-check-inline">
            <input @click="toggleText" class="form-check-input selectable no-select" type="radio"
              name="inlineRadioOptions" id="inlineRadio3" value="option3">
            <label class="form-check-label selectable no-select" for="inlineRadio3">Text</label>
          </div>
        </div>
        <div class="input-group col-12" title="Search">
          <input class="form-control" type="text" required v-model="query" />
          <button class="btn btn-outline-dark" type="submit">
            <i class="mdi mdi-magnify"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION All Filter options collapse toggle-->
    <button class="btn col-12 col-md-4 fs-3 d-flex align-self-center justify-content-center" type="button"
      data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Filter Search
      <i class="mdi mdi-chevron-down"></i>
    </button>

    <!-- SECTION Buttons for Collapsable Filters -->
    <section class="col-12 collapse" id="collapseExample">
      <div class="row mt-2">

        <button class="btn col-2 d-flex align-items-center justify-content-center" type="button"
          data-bs-toggle="collapse" data-bs-target="#multiCollapseFormat" aria-expanded="false"
          aria-controls="multiCollapseFormat">Format<i class="mdi mdi-chevron-down fs-4"></i></button>

        <button class="btn col-2 d-flex align-items-center justify-content-center" type="button"
          data-bs-toggle="collapse" data-bs-target="#multiCollapseRarity" aria-expanded="false"
          aria-controls="multiCollapseRarity">Rarity<i class="mdi mdi-chevron-down fs-4"></i></button>

        <button class="btn col-2 d-flex align-items-center justify-content-center" type="button"
          data-bs-toggle="collapse" data-bs-target="#multiCollapseColor" aria-expanded="false"
          aria-controls="multiCollapseColor">Color<i class="mdi mdi-chevron-down fs-4"></i></button>

        <!-- <button class="btn col-3 d-flex align-items-center justify-content-center" type="button"
          data-bs-toggle="collapse" data-bs-target="#multiCollapseSet" aria-expanded="false"
          aria-controls="multiCollapseSet">Set<i class="mdi mdi-chevron-down fs-4"></i></button> -->

        <!-- <button class="btn col-3 d-flex align-items-center justify-content-center" type="button"
          data-bs-toggle="collapse" data-bs-target="#multiCollapseManaCost" aria-expanded="false"
          aria-controls="multiCollapseManaCost">Mana
          Cost<i class="mdi mdi-chevron-down fs-4"></i></button> -->

        <button class="btn col-2 d-flex align-items-center justify-content-center" type="button"
          data-bs-toggle="collapse" data-bs-target="#multiCollapseConverted" aria-expanded="false"
          aria-controls="multiCollapseConverted">Converted Mana Cost<i class="mdi mdi-chevron-down fs-4"></i></button>

        <button class="btn col-2 d-flex align-items-center justify-content-center" type="button"
          data-bs-toggle="collapse" data-bs-target="#multiCollapsePower" aria-expanded="false"
          aria-controls="multiCollapsePower">Power<i class="mdi mdi-chevron-down fs-4"></i>
        </button>

        <button class="btn col-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseToughness"
          aria-expanded="false" aria-controls="multiCollapseToughness">Toughness<i
            class="mdi mdi-chevron-down fs-4"></i></button>
      </div>
    </section>

    <!-- SECTION Collapsable Filters -->
    <section class="row justify-content-around">

      <!-- SECTION Format -->
      <section class="col-2">
        <div class="collapse multi-collapse" id="multiCollapseFormat">
          <div class="card card-body mt-1">
            <h5 class="card-title">Format</h5>
            <select v-model="filter.format" class="form-select" aria-label="Format select menu">
              <option selected disabled>Please select a format</option>
              <option value="">None</option>
              <option value="standard">Standard</option>
              <option value="modern">Modern</option>
              <option value="legacy">Legacy</option>
              <option value="vintage">Vintage</option>
              <option value="pauper">Pauper</option>
              <option value="commander">Commander</option>
              <option value="paupercommander">Pauper Commander</option>
            </select>
          </div>
        </div>
      </section>

      <!-- SECTION Rarity -->
      <section class="col-2">
        <div class="collapse multi-collapse" id="multiCollapseRarity">
          <div class="card card-body mt-1">
            <h5 class="card-title">Rarity</h5>
            <div class="">
              <!-- function filterChange() will pass in the type and value of filter -->
              <input type="checkbox" class="" @change="filterChange('rarity', 'c')">
              <label class="form-check-label ps-2">Common</label><br>
              <input type="checkbox" class="" @change="filterChange('rarity', 'u')">
              <label class="form-check-label ps-2">Uncommon</label><br>
              <input type="checkbox" class="" @change="filterChange('rarity', 'r')">
              <label class="form-check-label ps-2">Rare</label><br>
              <input type="checkbox" class="" @change="filterChange('rarity', 'm')">
              <label class="form-check-label ps-2">Mythic Rare</label><br>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION Color -->
      <section class="col-2">
        <div class="collapse multi-collapse" id="multiCollapseColor">
          <div class="card card-body mt-1">
            <h5 class="card-title">Color</h5>
            <div class="">
              <input type="checkbox" class="" @change="filterChange('color', 'u')">
              <label class="form-check-label ps-2">Blue</label><br>
              <input type="checkbox" class="" @change="filterChange('color', 'g')">
              <label class="form-check-label ps-2">Green</label><br>
              <input type="checkbox" class="" @change="filterChange('color', 'w')">
              <label class="form-check-label ps-2">White</label><br>
              <input type="checkbox" class="" @change="filterChange('color', 'r')">
              <label class="form-check-label ps-2 ">Red</label><br>
              <input type="checkbox" class="" @change="filterChange('color', 'b')">
              <label class="form-check-label ps-2">Black</label><br>
              <input type="checkbox" class="" @change="filterChange('color', 'c')">
              <label class="form-check-label ps-2">Colorless</label><br>
            </div>
          </div>
        </div>
      </section>


      <!-- SECTION Set -->
      <!-- NOTE might want to abandon this one, ton of options -->
      <!-- <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseSet">
          <div class="card card-body mt-1">
            <h5 class="card-title">Set</h5>
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </section> -->

      <!-- SECTION Mana Cost -->
      <!-- NOTE redundant and difficult -->
      <!-- <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseManaCost">
          <div class="card card-body mt-1">
            <h5 class="card-title">Mana Cost</h5>
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </section> -->


      <!-- SECTION Converted Mana Cost -->
      <section class="col-2">
        <div class="collapse multi-collapse" id="multiCollapseConverted">
          <div class="card card-body mt-1">
            <h5 class="card-title">Converted Mana Cost</h5>
            <input v-model="filter.mana" type="number" class="form-control" placeholder="Total mana...">
          </div>
        </div>
      </section>

      <!-- SECTION Power -->
      <section class="col-2">
        <div class="collapse multi-collapse" id="multiCollapsePower">
          <div class="card card-body mt-1">
            <h5 class="card-title">Power</h5>
            <input type="number" class="form-control" value="0">
          </div>
        </div>
      </section>

      <!-- SECTION Toughness -->
      <section class="col-2">
        <div class="collapse multi-collapse" id="multiCollapseToughness">
          <div class="card card-body mt-1">
            <h5 class="card-title">Toughness</h5>
            <input type="number" class="form-control" value="0">
          </div>
        </div>
      </section>
    </section>
  </form>
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
      // NOTE this should prob change, overcomplicated ask andrew
      mana: null,
    })




    return {
      filter,
      query,
      // selected,


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
        filter.value['color'] = filter.value['color'].join('').toString();
        filter.value['rarity'] = filter.value['rarity'].join('').toString();
        console.log('filer value', filter.value);
        await cardsService.getCardsBySearch(query.value, filter.value)
        filter.value['color'] = filter.value['color'].split('')
        filter.value['rarity'] = filter.value['rarity'].split('')
      },

      async toggleText() {
        AppState.searchByText = true
        AppState.searchByName = false
        AppState.searchByType = false
        logger.log(AppState.searchByText)
      },
      async toggleType() {
        AppState.searchByType = true
        AppState.searchByText = false
        AppState.searchByName = false
      },
      async toggleName() {
        AppState.searchByName = true
        AppState.searchByText = false
        AppState.searchByType = false
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