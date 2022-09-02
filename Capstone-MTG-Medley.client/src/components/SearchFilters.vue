<template>


  <form @submit.prevent="searchCards()" class="row justify-content-around">
    <!-- SECTION Search bar with checkbox name, type, text -->
    <section class="col-12 col-md-4">
      <div class="row">
        <div class="col-12 d-flex justify-content-around">
          <div class="form-check form-check-inline">
            <input @click="toggleName" checked class="form-check-input" type="radio" name="inlineRadioOptions"
              id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Name</label>
          </div>
          <div class="form-check form-check-inline">
            <input @click="toggleType" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
              value="option2">
            <label class="form-check-label" for="inlineRadio2">Type</label>
          </div>
          <div class="form-check form-check-inline">
            <input @click="toggleText" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
              value="option3">
            <label class="form-check-label" for="inlineRadio3">Text</label>
          </div>
        </div>
        <div class="input-group col-12">
          <input class="form-control" type="text" required v-model="query" />
          <button class="btn btn-outline-dark" type="submit">
            <i class="mdi mdi-magnify"></i>
          </button>
        </div>
      </div>
    </section>







    <!-- SECTION All Filter options collapse toggle-->
    <section class="col-12 col-md-4 fs-3 d-flex align-self-center justify-content-center" type="button"
      data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      <i class="mdi mdi-chevron-down"></i>
      Filter Search
      <i class="mdi mdi-chevron-down"></i>
    </section>

    <!-- SECTION Buttons for Collapsable Filters -->
    <section class="col-12 collapse" id="collapseExample">
      <div class="row">

        <button class="btn col-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1"
          aria-expanded="false" aria-controls="multiCollapseExample1">Format</button>

        <button class="btn col-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2"
          aria-expanded="false" aria-controls="multiCollapseExample2">Rarity</button>

        <button class="btn col-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3"
          aria-expanded="false" aria-controls="multiCollapseExample3">Color</button>

        <button class="btn col-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample4"
          aria-expanded="false" aria-controls="multiCollapseExample4">Mana
          Cost</button>

        <button class="btn col-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample5"
          aria-expanded="false" aria-controls="multiCollapseExample5">Set</button>

        <button class="btn col-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample6"
          aria-expanded="false" aria-controls="multiCollapseExample6">Converted</button>

        <button class="btn col-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample7"
          aria-expanded="false" aria-controls="multiCollapseExample7">Power</button>

        <button class="btn col-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample8"
          aria-expanded="false" aria-controls="multiCollapseExample8">Toughness</button>
      </div>
    </section>

    <!-- SECTION Collapsable Filters -->
    <section class="row justify-content-around">

      <!-- SECTION Format -->
      <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            <h5 class="card-title">Format</h5>
            Some placeholder content for the first collapse component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </section>

      <!-- SECTION Rarity -->
      <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
          <div class="card card-body">
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
      <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseExample3">
          <div class="card card-body">
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

      <!-- SECTION Mana Cost -->
      <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseExample4">
          <div class="card card-body">
            <h5 class="card-title">Mana Cost</h5>
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </section>

      <!-- SECTION Set -->
      <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseExample5">
          <div class="card card-body">
            <h5 class="card-title">Set</h5>
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </section>

      <!-- SECTION Converted Mana Cost -->
      <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseExample6">
          <div class="card card-body">
            <h5 class="card-title">Converted</h5>
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </section>

      <!-- SECTION Power -->
      <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseExample7">
          <div class="card card-body">
            <h5 class="card-title">Power</h5>
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </section>

      <!-- SECTION Toughness -->
      <section class="col-3">
        <div class="collapse multi-collapse" id="multiCollapseExample8">
          <div class="card card-body">
            <h5 class="card-title">Toughness</h5>
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is
            hidden by default but revealed when the user activates the relevant trigger.
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