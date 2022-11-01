<template>
  <div @blur="reset()" class="card" style="max-width: 1100px;">
    <div class="row g-0">
      <!-- SECTION MODALS ACTIVE CARD PHOTO -->
      <div v-if="activeCard" class="col-md-6">
        <img :src='activeCard.image_uris?.normal' class="cardBg img-fluid cardBorder">
      </div>
      <div v-if="!activeCard.image_uris?.normal" class="col-md-6 cardBorder">
        <img
          src="https://preview.redd.it/fr7g5swymhc41.png?width=640&crop=smart&auto=webp&s=930c8edaa0acc0755c71c3d737840d08a9e9a0b0"
          class="cardBg img-fluid" alt="...">
      </div>
      <!-- SECTION THE ORACLE CARD INFORMATION DIV -->
      <div class="col-md-6  ">
        <div class="cardOverflow">
          <div class="row justify-content-center align-items-center d-flex">
            <div class=" printsBg text-dark my-1 col-8 rounded-start">
              <p class="text-start">PRINTS</p>
            </div>
            <div class=" printsBg text-dark my-1 col-2 rounded-end">
              <p class="text-start">USD</p>
            </div>
            <div class="card-body magicCard p-0 col-12 text-dark" v-for="c in oracleCards" :key="c.id">
              <OracleCard :oracleCard="c" />
            </div>
          </div>
        </div>

        <!-- NOTE IF CARD IS PART OF RESERVED LIST -->
        <div class="row align-items-center legalSize">
          <div class="col-10 offset-1 mx-auto text-center mt-3" v-if="activeCard.reserved == true">
            <p class="my-0">This card is Part of the Reserved List</p>
          </div>
          <div v-else></div>
        </div>
        <!-- NOTE  IF LEGAL/BANNED/RESTRICT BOXES-->
        <div class="row mx-auto my-1 legalSize">

          <!-- NOTE STANDARD SET -->
          <div v-if="activeCard.legalities?.standard == 'legal'" class="col-5 mx-auto my-1">
            <div class=" bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>STANDARD <span class="tooltiptext">This card is legal in Standard play.</span></p>
            </div>
          </div>
          <div v-else class="col-5 mx-auto my-1">
            <div class=" bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p class="">STANDARD<span class="tooltiptext">This card is not legal in Standard play.</span>
              </p>
            </div>
          </div>

          <!-- NOTE ALCHEMY SET -->
          <div v-if="activeCard.legalities?.alchemy == 'legal'" class="col-5 mx-auto my-1">
            <div class=" bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>ALCHEMY<span class="tooltiptext">This card is legal in Alchemy play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.alchemy == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>ALCHEMY<span class="tooltiptext">This card is not legal in Alchemy play.</span></p>
            </div>
          </div>

          <!-- NOTE PIONEER SET -->
          <div v-if="activeCard.legalities?.pioneer == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>PIONEER<span class="tooltiptext">This card is legal in Pioneer play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.pioneer == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>PIONEER<span class="tooltiptext">This card is not legal in Pioneer play.</span></p>
            </div>
          </div>

          <!-- NOTE EXPLORER SET -->
          <div v-if="activeCard.legalities?.explorer == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>EXPLORER<span class="tooltiptext">This card is legal in Explorer play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.explorer == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>EXPLORER<span class="tooltiptext">This card is not legal in Explorer play.</span></p>
            </div>
          </div>

          <!-- NOTE MODERN SET -->
          <div v-if="activeCard.legalities?.modern == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>MODERN<span class="tooltiptext">This card is legal in Modern play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.modern == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>MODERN<span class="tooltiptext">This card is not legal in Modern play.</span></p>
            </div>
          </div>

          <!-- NOTE BRAWL SET -->
          <div v-if="activeCard.legalities?.brawl == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>BRAWL<span class="tooltiptext">This card is legal in Brawl play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.brawl == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>BRAWL<span class="tooltiptext">This card is not legal in Brawl play.</span></p>
            </div>
          </div>

          <!-- NOTE LEGACY SET -->
          <div v-if="activeCard.legalities?.legacy == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>LEGACY<span class="tooltiptext">This card is legal in Legacy play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.legacy == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>LEGACY<span class="tooltiptext">This card is not legal in Legacy play.</span></p>
            </div>
          </div>

          <!-- NOTE HISTORIC SET -->
          <div v-if="activeCard.legalities?.historic == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>HISTORIC<span class="tooltiptext">This card is legal in Historic play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.historic == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>HISTORIC<span class="tooltiptext">This card is not legal in Historic play.</span></p>
            </div>
          </div>

          <!-- NOTE VINTAGE SET -->
          <div v-if="activeCard.legalities?.vintage == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>VINTAGE<span class="tooltiptext">This card is legal in Vintage play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.vintage == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>VINTAGE<span class="tooltiptext">This card is not legal in Vintage play.</span></p>
            </div>
          </div>

          <!-- NOTE PAUPER SET -->
          <div v-if="activeCard.legalities?.pauper == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>PAUPER<span class="tooltiptext">This card is legal in Pauper play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.pauper == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>PAUPER<span class="tooltiptext">This card is not legal in Pauper play.</span></p>
            </div>
          </div>

          <!-- NOTE COMMANDER SET -->
          <div v-if="activeCard.legalities?.commander == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>COMMANDER<span class="tooltiptext">This card is legal in Commander play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.commander == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>COMMANDER<span class="tooltiptext">This card is not legal in Commander play.</span></p>
            </div>
          </div>

          <!-- NOTE PENNY SET -->
          <div v-if="activeCard.legalities?.penny == 'legal'" class="col-5 mx-auto my-1">
            <div class="bgLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>PENNY<span class="tooltiptext">This card is legal in Penny play.</span></p>
            </div>
          </div>
          <div v-else="activeCard.legalities?.penny == false" class="col-5 mx-auto my-1">
            <div class="bgNotLegal text-light text-center rounded cursorLegal tooltipMaybe">
              <p>PENNY<span class="tooltiptext">This card is not legal in Penny play.</span></p>
            </div>
          </div>
          <div class="col-6 mx-auto py-0 my-0">
            <button @click.prevent="createCard(activeCard) && getAccountCards()" class="btn">
              <p class="my-0">Add To Collection</p>
            </button>
          </div>
        </div>
        <!-- NOTE MAKE SURE TO ADD AN ADD TO ACCOUNT BUTTON -->
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
          await cardsService.createCard(activeCard)
          Pop.success('Added to Collection')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async getAccountCards() {
        try {
          await cardsService.getAccountCards()
        }
        catch (error) {
          logger.log("[getting all cards]", error);
          Pop.error(error);
        }
      },
    };

  },
  components: { OracleCard }
}


</script>

<style scoped lang="scss">
.cardOverflow {
  overflow-y: scroll;
  max-height: 30.5vh;
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

.legalSize {
  font-size: .8em;
}

.rotated {
  transform: scale(1.1);
}

.modal-backdrop {
  position: static !important;
}

.cursorLegal:hover {
  cursor: help;
}

.tooltipCustom {
  // background-color: rgba(0, 0, 0, 0.705);
  // color: white;
  // font-size: 3em;
  --bs-tooltip-bg: var(--bs-primary);
}


.tooltipMaybe {
  position: relative;
  // display: inline-block;
}

/* Tooltip text */
.tooltipMaybe .tooltiptext {
  visibility: hidden;
  width: 250px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 10%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltipMaybe .tooltiptext::after {
  content: "";
  position: absolute;
  left: 10px;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltipMaybe:hover .tooltiptext {
  visibility: visible;
  opacity: 1
}

.modal-content {
  height: 100%;
  border-radius: 0;
  position: relative;
}

.modal-footer {
  border-radius: 0;
  bottom: 0px;
  position: absolute;
  width: 100%;
}
</style>