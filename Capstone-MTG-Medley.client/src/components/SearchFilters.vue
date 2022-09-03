<template>

  <form @submit.prevent="searchCards()" class="search-zone">

    <section class="row m-mine">
      <!-- SECTION Search bar with checkbox name, type, text -->
      <section class="col-3 py-1">
        <div class="d-flex flex-row justify-content-around">
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
        <div class="input-group" title="Search">
          <input class="form-control" placeholder="Search by Name, Type or Text..." type="text" required
            v-model="query" />
          <button class="btn btn-outline-light" type="submit">
            <i class="mdi mdi-magnify"></i>
          </button>
        </div>
        <div class=" text-center no-select py-2 fs-5" type="button" data-bs-toggle="collapse"
          data-bs-target=".multi-collapse" aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle Search Filters
          <i class="mdi mdi-chevron-right"></i>
        </div>
      </section>
      <!-- SECTION Format -->
      <section class="col">
        <div class="collapse multi-collapse" id="multiCollapseFormat">
          <div class=" mt-1">
            <h4>Format</h4>
            <div class="">
              <div class="form-check">
                <input @click="filter.format = ''" checked class=" form-check-input" type="radio" name="radiosFormat"
                  id="radiosFormatAll" value="">
                <label class="form-check-label" for="radiosFormatAll">All</label>
              </div>
              <div class="form-check">
                <input @click="filter.format = 'standard'" class=" form-check-input" type="radio" name="radiosFormat"
                  id="radiosFormatStandard" value="standard">
                <label class="form-check-label" for="radiosFormatStandard">Standard</label>
              </div>
              <div class="form-check">
                <input @click="filter.format = 'modern'" class=" form-check-input" type="radio" name="radiosFormat"
                  id="radiosFormatModern" value="modern">
                <label class="form-check-label" for="radiosFormatModern">Modern</label>
              </div>
              <div class="form-check">
                <input @click="filter.format = 'legacy'" class=" form-check-input" type="radio" name="radiosFormat"
                  id="radiosFormatLegacy" value="legacy">
                <label class="form-check-label" for="radiosFormatLegacy">Legacy</label>
              </div>
              <div class="form-check">
                <input @click="filter.format = 'vintage'" class=" form-check-input" type="radio" name="radiosFormat"
                  id="radiosFormatVintage" value="vintage">
                <label class="form-check-label" for="radiosFormatVintage">Vintage</label>
              </div>
              <div class="form-check">
                <input @click="filter.format = 'pauper'" class=" form-check-input" type="radio" name="radiosFormat"
                  id="radiosFormatPauper" value="pauper">
                <label class="form-check-label" for="radiosFormatPauper">Pauper</label>
              </div>
              <div class="form-check">
                <input @click="filter.format = 'commander'" class=" form-check-input" type="radio" name="radiosFormat"
                  id="radiosFormatCommander" value="commander">
                <label class="form-check-label" for="radiosFormatCommander">Commander</label>
              </div>
              <div class="form-check">
                <input @click="filter.format = 'paupercommander'" class=" form-check-input" type="radio"
                  name="radiosFormat" id="radiosFormatPauperCommander" value="paupercommander">
                <label class="form-check-label" for="radiosFormatPauperCommander">Pauper Commander</label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION Rarity -->
      <section class="col">
        <div class="collapse multi-collapse" id="multiCollapseRarity">
          <div class=" mt-1">
            <h4>Rarity</h4>
            <div class="">
              <div class="form-check">
                <input @click="filter.rarity = ''" checked class=" form-check-input" type="radio" name="radiosRarity"
                  id="radiosRarityAll" value="">
                <label class="form-check-label" for="radiosRarityAll">All</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radiosRarity" id="radiosRarityCommon" value="c"
                  @click="filter.rarity = 'c'">
                <label class="form-check-label" for="radiosRarityCommon">
                  Common
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radiosRarity" id="radiosRarityUncommon" value="u"
                  @click="filter.rarity = 'u'">
                <label class="form-check-label" for="radiosRarityUncommon">
                  Uncommon
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radiosRarity" id="radiosRarityRare" value="r"
                  @click="filter.rarity = 'r'">
                <label class="form-check-label" for="radiosRarityRare">
                  Rare
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radiosRarity" id="radiosRarityMythicRare" value="m"
                  @click="filter.rarity = 'm'">
                <label class="form-check-label" for="radiosRarityMythicRare">
                  Mythic Rare
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION Color -->
      <section class="col">
        <div class="collapse multi-collapse" id="multiCollapseColor">
          <div class=" mt-1">
            <h4>Color</h4>
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
              <!-- FIXME all searches show colorless when its not selected -->
              <input type="checkbox" class="" @change="filterChange('color', 'c')">
              <label class="form-check-label ps-2">Colorless</label><br>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION Converted Mana Cost -->
      <section class="col">
        <div class="collapse multi-collapse" id="multiCollapseConverted">
          <div class=" mt-1">
            <h4 class="text-center">Mana Cost</h4>
            <input v-model="filter.mana" type="number" class="form-control" placeholder="All">
          </div>
        </div>
      </section>

      <!-- SECTION Power -->
      <section class="col">
        <div class="collapse multi-collapse" id="multiCollapsePower">
          <div class=" mt-1">
            <h4 class="text-center">Power</h4>
            <input v-model="filter.power" type="number" class="form-control" placeholder="All">
          </div>
        </div>
      </section>

      <!-- SECTION Toughness -->
      <section class="col">
        <div class="collapse multi-collapse" id="multiCollapseToughness">
          <div class=" mt-1">
            <h4 class="text-center">Toughness</h4>
            <input v-model="filter.toughness" type="number" class="form-control" placeholder="All">
          </div>
        </div>
      </section>

    </section>

  </form>

</template>

<script>
import { onMounted, ref } from "vue";
import { AppState } from "../AppState.js";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";


export default {



  setup() {
    const query = ref('')
    let filter = ref({
      color: [],
      rarity: null,
      // NOTE this should prob change, overcomplicated ask andrew
      mana: null,
      power: null,
      toughness: null,
    })


    async function alphaSearch() {
      const search = 'set%3Alea'
      await cardsService.getAlphaSearch(search)
    }

    onMounted(() => {
      alphaSearch()
    });
    return {
      alphaSearch,
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
        // filter.value['rarity'] = filter.value['rarity'].join('').toString();
        console.log('filer value', filter.value);
        await cardsService.getCardsBySearch(query.value, filter.value)
        filter.value['color'] = filter.value['color'].split('')
        // filter.value['rarity'] = filter.value['rarity'].split('')
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

<style scoped>
.search-zone {
  text-shadow: 1px 1px 3px black;
  font-weight: 900;
  color: whitesmoke;
  background-image: url(https://images.ctfassets.net/s5n2t79q9icq/6rDz8lJT4NQ2DlVacH13aD/62513faa4617397b6653691497b8ed6d/mana-bg-start-2.jpeg?q=70&w=1920&h=793&fit=crop&f=center&fm=avif);
  background-position: center;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* backdrop-filter: blur(4px); */
  /* border: solid #8d8b8b1f; */
  /* border-radius: 8px; */
}

.m-mine {
  margin-top: 10vh;
}
</style>