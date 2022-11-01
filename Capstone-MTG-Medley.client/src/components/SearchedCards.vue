<template>
  <div @click="getCardByOracle() && reset(card)" type="button" data-bs-toggle="modal"
    :data-bs-target="'#cardModal' + card.id" class="shadow rotated">
    <div class="card-bg">
      <div class="magic-card" :class="{ loaded: imgLoaded }">
        <img @load="imgLoaded = true" class="img-fluid fix-edge shadow" :src="card.image_uris.normal"
          :title="card.name" />
      </div>
      <!-- <div v-else class="">
        <img
          class="img-fluid shadow cardsBg"
          src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013"
        />
      </div> -->
    </div>
  </div>
  <Modal :id="'cardModal' + card.id">
    <CardModal :card="card" />
  </Modal>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  props: { card: { type: Card, required: true } },

  setup(props) {
    const imgLoaded = ref(false);
    return {
      imgLoaded,
      activeCard: computed(() => AppState.activeCard),
      reset() {
        AppState.activeCard = props.card;
      },
      async getCardByOracle() {
        try {
          // console.log(" Id", props.card.oracleId);
          await cardsService.getCardByOracle(props.card.oracle_id);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
.magic-card {
  opacity: 0;


  // transition: opacity 0.2s 0.1s linear;
  &.loaded {
    // opacity: 1;
    animation: card-load 0.2s 0.1s linear forwards;
  }
}

.card-bg {
  background-image: url(https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013);
  border-radius: 14px;
  border-color: black;
  min-height: 275px;
  background-size: cover;
}

.rotated {
  background: transparent;
}

.rotated:hover img {
  transform: scale(1.1);
  transition: ease 0.1s;
}

input {
  border: black !important;
}

@keyframes card-load {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fix-edge {
  border-radius: 13px;
}
</style>
