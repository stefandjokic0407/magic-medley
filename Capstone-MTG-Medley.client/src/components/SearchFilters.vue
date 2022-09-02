<template>


  <form @submit.prevent="searchCards()" class="row justify-content-around">
    <!-- SECTION Search bar with checkbox name, type, text -->
    <section class="col-md-3">
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

    <!-- SECTION Rarity -->
    <section class="col-md-2">
      <div href="#collapseRarity" data-bs-toggle="collapse" class=" no-select selectable">
        Rarity
      </div>
      <div class="collapse bg-light" id="collapseRarity">
        <!-- function filterChange() will pass in the type and value of filter -->
        <input type="checkbox" class="" @change="filterChange('rarity', 'c')">
        <label class="form-check-label">Common</label><br>
        <input type="checkbox" class="" @change="filterChange('rarity', 'u')">
        <label class="form-check-label">Uncommon</label><br>
        <input type="checkbox" class="" @change="filterChange('rarity', 'r')">
        <label class="form-check-label">Rare</label><br>
        <input type="checkbox" class="" @change="filterChange('rarity', 'm')">
        <label class="form-check-label">Mythic Rare</label><br>
      </div>
    </section>


    <!-- SECTION Color -->
    <section class="col-md-1">
      <div href="#collapseColor" data-bs-toggle="collapse" class="no-select selectable">
        Color
      </div>
      <div class="collapse bg-light" id="collapseColor">
        <input type="checkbox" class="" @change="filterChange('color', 'u')">
        <label class="form-check-label">Blue</label><br>
        <input type="checkbox" class="" @change="filterChange('color', 'g')">
        <label class="form-check-label">Green</label><br>
        <input type="checkbox" class="" @change="filterChange('color', 'w')">
        <label class="form-check-label">White</label><br>
        <input type="checkbox" class="" @change="filterChange('color', 'r')">
        <label class="form-check-label ">Red</label><br>
        <input type="checkbox" class="" @change="filterChange('color', 'b')">
        <label class="form-check-label">Black</label><br>
        <input type="checkbox" class="" @change="filterChange('color', 'c')">
        <label class="form-check-label">Colorless</label><br>
      </div>
    </section>


    <!-- SECTION Mana Cost -->
    <section class="col-md-1">
      <div href="#collapseManaCost" data-bs-toggle="collapse" class=" no-select selectable">
        Mana Cost
      </div>
      <div class="collapse bg-light" id="collapseManaCost">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </div>
    </section>

    <!-- SECTION cmc -->
    <section class="col-md-1">
      <div href="#collapseConvertedMana" data-bs-toggle="collapse" class=" no-select selectable"
        title="Converted Mana Cost">
        Converted
      </div>
      <div class="collapse bg-light" id="collapseConvertedMana">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </div>
    </section>

    <!-- SECTION Power -->
    <section class="col-md-1">
      <div href="#collapsePower" data-bs-toggle="collapse" class=" no-select selectable">
        Power
      </div>
      <div class="collapse bg-light" id="collapsePower">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </div>
    </section>

    <!-- SECTION Toughness  -->
    <section class="col-md-1">
      <div href="#collapseToughness" data-bs-toggle="collapse" class=" no-select selectable">
        Toughness
      </div>
      <div class="collapse bg-light" id="collapseToughness">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </div>
    </section>

    <!-- SECTION Loyalty  -->
    <section class="col-md-1">
      <div href="#collapseLoyalty" data-bs-toggle="collapse" class=" no-select selectable">
        Loyalty
      </div>
      <div class="collapse bg-light" id="collapseLoyalty">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </div>
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