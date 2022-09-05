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
          <input class="form-control" placeholder="Search by Name, Type or Text..." type="text" v-model="query" />
          <button class="btn btn-outline-light" type="submit">
            <i class="mdi mdi-magnify"></i>
          </button>
        </div>
        <div class=" text-center no-select py-2 fs-5" type="button" data-bs-toggle="collapse"
          data-bs-target=".multi-collapse" aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle Search Filters
        </div>
        <div class=" text-center no-select py-2 fs-5 collapse multi-collapse" id="multiCollapseFilterBtn">
          <button @click="searchCards" class="btn btn-outline-light filter-btn">Apply Filters</button>
        </div>

      </section>

      <!-- SECTION Format -->
      <section class="col-2 collapse multi-collapse" id="multiCollapseFormat">
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
          </div>
        </div>
      </section>

      <!-- SECTION Color -->
      <!-- NOTE should add options to filter, right now its just any that include -->
      <section class="col-1 collapse multi-collapse" id="multiCollapseColor">
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
      </section>

      <!-- SECTION Rarity -->
      <!-- NOTE should maybe add options to filter, right now its just one at a time-->
      <section class="col-1 collapse multi-collapse" id="multiCollapseRarity">
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
                Mythic
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION Converted Mana Cost, Power, Toughness and Sets -->
      <section class="col-5 collapse multi-collapse" id="multiCollapseMix">

        <!-- SECTION Converted Mana Cost, Power, Toughness -->
        <!-- NOTE should add options to filters, right now it must be equal to number-->
        <span class="d-flex flex-row">
          <!-- SECTION Converted Mana Cost -->
          <section class="mx-2">
            <div class=" mt-1">
              <h4 class="text-center">Mana Cost</h4>
              <input v-model="filter.mana" type="number" class="form-control" placeholder="All">
            </div>
          </section>

          <!-- SECTION Power -->
          <section class="mx-2">
            <div class=" mt-1">
              <h4 class="text-center">Power</h4>
              <input v-model="filter.power" type="number" class="form-control" placeholder="All">
            </div>
          </section>

          <!-- SECTION Toughness -->
          <section class="mx-2">
            <div class=" mt-1">
              <h4 class="text-center">Toughness</h4>
              <input v-model="filter.toughness" type="number" class="form-control" placeholder="All">
            </div>
          </section>
        </span>

        <!-- SECTION Set -->
        <section class="mx-2 text-center">
          <div class="mt-1">
            <h4>Set</h4>
            <select v-model="filter.set" class="form-select" aria-label="Format select menu">
              <option value="">All</option>
              <option disabled class=""></option>
              <option disabled class="bg-dark text-light">Expansions</option>
              <!-- next set -->
              <!-- <option value="bro">The Brothers' War</option> -->
              <option value="dmu">Dominaria United</option>
              <option value="snc">Streets of New Capenna</option>
              <option value="neo">Kamigawa: Neon Dynasty</option>
              <option value="mid">Innistrad: Midnight Hunt</option>
              <option value="afr">Adventures in the Forgotten Realms</option>
              <option value="stx">Strixhaven: School of Mages</option>
              <option value="khm">Kaldheim</option>
              <option value="znr">Zendikar Rising</option>
              <option value="iko">Ikoria: Lair of the Behemoths</option>
              <option value="thb">Theros Beyond Death</option>
              <option value="eld">Throne of Eldraine</option>
              <option value="war">War of the Sparks</option>
              <option value="rna">Ravnica Allegiance</option>
              <option value="grn">Guilds of Ravnica</option>
              <option value="dom">Dominaria</option>
              <option value="rix">Rivals of Ixalan</option>
              <option value="xln">Ixalan</option>
              <option value="hou">Hour of Devastation</option>
              <option value="akh">Amonkhet</option>
              <option value="aer">Aether Revolt</option>
              <option value="kld">Kaladesh</option>
              <option value="emn">Eldritch Moon</option>
              <option value="soi">Shadows over Innistrad</option>
              <option value="ogw">Oath of the Gatewatch</option>
              <option value="bfz">Battle for Zendikar</option>
              <option value="dtk">Dragons of Tarkir</option>
              <option value="frf">Fate Reforged</option>
              <option value="ktk">Khans of Tarkir</option>
              <option value="jou">Journey into Nyx</option>
              <option value="bng">Born of the gods</option>
              <option value="ths">Theros</option>
              <option value="dgm">Dragon's Maze</option>
              <option value="gtc">Gatecrash</option>
              <option value="rtr">Return to Ravnica</option>
              <option value="avr">Avacyn Restored</option>
              <option value="dka">Dark Ascension</option>
              <option value="isd">Innistrad</option>
              <option value="nph">New Phyrexia</option>
              <option value="mbs">Mirrodin Besieged</option>
              <option value="som">Scars of Mirrodin</option>
              <option value="roe">Rise of the Eldrazi</option>
              <option value="wwk">Worldwake</option>
              <option value="zen">Zendikar</option>
              <option value="arb">Alara Reborn</option>
              <option value="con">Conflux</option>
              <option value="ala">Shards of Alara</option>
              <option value="eve">Eventide</option>
              <option value="shm">Shadowmoor</option>
              <option value="mor">Morningtide</option>
              <option value="lrw">Lorwyn</option>
              <option value="fut">Future Sight</option>
              <option value="plc">Planar Chaos</option>
              <option value="tsp">Time Spiral</option>
              <option value="tsb">Time Spiral Timeshifted</option>
              <option value="csp">Coldsnap</option>
              <option value="dis">Dissension</option>
              <option value="gpt">Guildpact</option>
              <option value="rav">Ravnica: City of Guilds</option>
              <option value="sok">Saviors of Kamigawa</option>
              <option value="bok">Betrayers of Kamigawa</option>
              <option value="chk">Champions of Kamigawa</option>
              <option value="5dn">Fifth Dawn</option>
              <option value="dst">Darksteel</option>
              <option value="mrd">Mirrodin</option>
              <option value="scg">Scourge</option>
              <option value="lgn">Legions</option>
              <option value="ons">Onslaught</option>
              <option value="jud">Judgement</option>
              <option value="tor">Torment</option>
              <option value="ody">Odyssey</option>
              <option value="apc">Apocalypse</option>
              <option value="pls">Planeshift</option>
              <option value="inv">Invasion</option>
              <option value="pcy">Prophecy</option>
              <option value="nem">Nemesis</option>
              <option value="mmq">Mercadian Masques</option>
              <option value="uds">Urza's Destiny</option>
              <option value="ulg">Urza's Legacy</option>
              <option value="usg">Urza's Saga</option>
              <option value="exo">Exodus</option>
              <option value="sth">Stronghold</option>
              <option value="tmp">Tempest</option>
              <option value="wth">Weatherlight</option>
              <option value="vis">Visions</option>
              <option value="mir">Mirage</option>
              <option value="all">Alliaces</option>
              <option value="hml">Homelands</option>
              <option value="ice">Ice Age</option>
              <option value="fem">Fallen Empires</option>
              <option value="drk">The Dark</option>
              <option value="leg">Legends</option>
              <option value="atq">Antiquities</option>
              <option value="arn">Arabian Nights</option>
              <option disabled class=""></option>
              <option disabled class="bg-dark text-light">Core Sets</option>
              <option value="m21">Magic 2021</option>
              <option value="m20">Magic 2020</option>
              <option value="m19">Magic 2019</option>
              <option value="ori">Magic Origins</option>
              <option value="m15">Magic 2015</option>
              <option value="m14">Magic 2014</option>
              <option value="m13">Magic 2013</option>
              <option value="m12">Magic 2012</option>
              <option value="m11">Magic 2011</option>
              <option value="m10">Magic 2010</option>
              <option value="10e">Tenth Edition</option>
              <option value="9ed">Ninth Edition</option>
              <option value="8ed">Eighth Edition</option>
              <option value="7ed">Seventh Edition</option>
              <option value="6ed">Classic Sixth Edition</option>
              <option value="5ed">Fifth Edition</option>
              <option value="4bb">Fourth Edition Foreign Black Border</option>
              <option value="4ed">Fourth Edition</option>
              <option value="sum">Summer Magic/ Edgar</option>
              <option value="3ed">Revised Edition</option>
              <option value="fbb">Foreign Black Border</option>
              <option value="2ed">Unlimited Edition</option>
              <option value="leb">Limited Edition Beta</option>
              <option value="lea">Limited Edition Alpha</option>
            </select>
          </div>
        </section>

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
      mana: null,
      power: null,
      toughness: null,
      set: null
    })


    async function alphaSearch() {
      const search = 'set%3Alea'
      await cardsService.getAlphaSearch(search)
    }

    onMounted(() => {
      alphaSearch()
    });
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

<style lang="scss" scoped>
.search-zone {
  text-shadow: 1px 1px 3px black;
  font-weight: 900;
  color: whitesmoke;
  background-image: url(https://images.ctfassets.net/s5n2t79q9icq/6rDz8lJT4NQ2DlVacH13aD/62513faa4617397b6653691497b8ed6d/mana-bg-start-2.jpeg?q=70&w=1920&h=793&fit=crop&f=center&fm=avif);
  background-position: center;
  background-size: cover;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.filter-btn {
  text-shadow: 1px 1px 3px black;
  font-weight: 900;
  color: whitesmoke;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.set-input {
  width: max-content !important;
}

.m-mine {
  margin-top: 10vh;
}
</style>