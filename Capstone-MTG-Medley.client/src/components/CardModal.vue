<template>
  <div @blur="reset()" class="card" style="max-width: 1100px;">
    <div class="row g-0">
      <!-- SECTION MODALS ACTIVE CARD PHOTO -->
      <div v-if="activeCard" class="col-md-6 ">
        <img :src='activeCard.image_uris?.normal' class="cardBg img-fluid cardBorder">
      </div>
      <div v-if="!activeCard.image_uris?.normal" class="col-md-6 cardBorder">
        <img
          src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
          class="cardBg img-fluid" alt="...">
      </div>
      <!-- SECTION THE ORACLE CARD INFORMATION DIV -->
      <div class="col-md-6  ">
        <div class="cardOverflow">
          <div class="row justify-content-center align-items-center d-flex">
            <div class=" printsBg text-dark my-1 sticky-top col-10 rounded">
              <h5 class="text-center my-2">PRINTS</h5>
            </div>
            <div class="card-body magicCard p-0 col-12" v-for="c in oracleCards" :key="c.id">
              <OracleCard :oracleCard="c" />
            </div>
          </div>
        </div>

        <!-- NOTE IF CARD IS PART OF RESERVED LIST -->
        <div class="row align-items-center">
          <div class="col-10 offset-1 mx-auto text-center mt-3" v-if="activeCard.reserved = true">
            <p class="my-0">This card is Part of the Reserved List</p>
          </div>
          <div v-else></div>
        </div>
        <!-- NOTE  IF LEGAL/BANNED/RESTRICT BOXES-->
        <div class="row mx-auto my-3">
          <div v-if="activeCard.legalities?.standard == true" class="col-5 mx-auto">
            <div class="text-center">Standard</div>
            <div class=" bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.standard == false" class="col-5 mx-auto">
            <div class=" text-center">Standard</div>
            <div class=" bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.alchemy == true" class="col-5 mx-auto">
            <div class=" text-center">Alchemy</div>
            <div class=" bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.alchemy == false" class="col-5 mx-auto">
            <div class="text-center">Alchemy</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.pioneer == true" class="col-5 mx-auto">
            <div class="text-center">Pioneer</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.pioneer == false" class="col-5 mx-auto">
            <div class="text-center">Pioneer</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.explorer == true" class="col-5 mx-auto">
            <div class="text-center">Explorer</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.explorer == false" class="col-5 mx-auto">
            <div class="text-center">Explorer</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.modern == true" class="col-5 mx-auto">
            <div class="text-center">Modern</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.modern == false" class="col-5 mx-auto">
            <div class="text-center">Modern</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.brawl == true" class="col-5 mx-auto">
            <div class="text-center">Brawl</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.brawl == false" class="col-5 mx-auto">
            <div class="text-center">Brawl</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.legacy == true" class="col-5 mx-auto">
            <div class="text-center">Legacy</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.legacy == false" class="col-5 mx-auto">
            <div class="text-center">Legacy</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.historic == true" class="col-5 mx-auto">
            <div class="text-center">Historic</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.historic == false" class="col-5 mx-auto">
            <div class="text-center">Historic</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.vintage == true" class="col-5 mx-auto">
            <div class="text-center">Vintage</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.vintage == false" class="col-5 mx-auto">
            <div class="text-center">Vintage</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.pauper == true" class="col-5 mx-auto">
            <div class="text-center">Pauper</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.pauper == false" class="col-5 mx-auto">
            <div class="text-center">Pauper</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.commander == true" class="col-5 mx-auto">
            <div class="text-center">Commander</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.commander == false" class="col-5 mx-auto">
            <div class="text-center">Commander</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
          <div v-if="activeCard.legalities?.penny == true" class="col-5 mx-auto">
            <div class="text-center">Penny</div>
            <div class="bgLegal text-light text-center rounded">
              <p>LEGAL</p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.penny == false" class="col-5 mx-auto">
            <div class="text-center">Penny</div>
            <div class="bgNotLegal text-light text-center rounded">
              <p>NOT LEGAL</p>
            </div>
          </div>
        </div>
        <!-- NOTE MAKE SURE TO ADD AN ADD TO ACCOUNT BUTTON -->
        <div class="col-5 mx-auto py-0 my-0">
          <button @click.prevent="createCard(activeCard)" class="btn">
            <p class="my-0">Add To Collection</p>
          </button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, watchEffect } from "vue";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState"
import OracleCard from "./OracleCard.vue";


export default {
  props: { card: { type: Card, required: true } },
  // props: { oracleCard: { type: Card, required: true }},
  setup(props) {
    async function getCardByOracle() {
      try {
        // console.log(" Id", props.card.oracleId);
        await cardsService.getCardByOracle(props.card.oracle_id);
      }
      catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    }
    // onMounted(() => getCardByOracle());
    return {
      oracleCards: computed(() => AppState.oracleCard),
      activeCard: computed(() => AppState.activeCard),


      async createCard(activeCard) {
        try {
          console.log('Active Card:', activeCard)
          await cardsService.createCard(activeCard)
          Pop.success('Added to Collection')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    };

  },
  components: { OracleCard }
}


</script>

<style>
.cardOverflow {
  overflow-y: scroll;
  max-height: 32vh;
  overflow-x: hidden;
}

.cardBorder {
  border-radius: 20%;
}

.cardBg {
  border-radius: 20px;
  border-color: rgb(142, 142, 142);
}

.printsBg {
  background-color: rgb(143, 143, 143);
}

p {
  padding: 0;
  margin: 0;
}

.bgLegal {
 background-color: rgb(24, 126, 24);
}

.bgNotLegal {
  background-color: rgba(22, 100, 22, 0.406);
}

</style>