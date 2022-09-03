<template>

  <div class="row justify-content-center hero-img">
    <div class="col-md-3 p-3">
      <div class="accordion border rounded border-dark" id="accordionExample">
        <div class="accordion-item  ">
          <h2 class="accordion-header " id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <div class="p-2 img-text no-select">FAQs</div>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul class="list-unstyled">
                <li>What is Magic the Gathering?</li>
                <li>Why build Magic Medley?</li>
                <li>How to Play</li>
                <li>Site Tour</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item ">
          <h2 class="accordion-header " id="headingTwo">
            <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <div class="p-2 img-text no-select">Contact Us</div>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul class="list-unstyled">
                <li>
                  <!-- <a href="">
                    <i class="mdi mdi-linkedin selectable px-1"></i>
                  </a>
                  <a href="">
                    <i class="mdi mdi-github selectable"></i>
                  </a> -->
                  Savannah
                </li>
                <li>
                  <!-- <a href="">
                    <i class="mdi mdi-linkedin selectable px-1"></i>
                  </a>
                  <a href="">
                    <i class="mdi mdi-github selectable"></i>
                  </a> -->
                  Miles
                </li>
                <li>
                  <!-- <a href="">
                    <i class="mdi mdi-linkedin selectable px-1"></i>
                  </a>
                  <a href="">
                    <i class="mdi mdi-github selectable"></i>
                  </a> -->
                  Max
                </li>
                <li>
                  <!-- <a href="">
                    <i class="mdi mdi-linkedin selectable px-1"></i>
                  </a>
                  <a href="">
                    <i class="mdi mdi-github selectable"></i>
                  </a> -->
                  Jonathon
                </li>
                <li>
                  <!-- <a href="">
                    <i class="mdi mdi-linkedin selectable px-1"></i>
                  </a>
                  <a href="">
                    <i class="mdi mdi-github selectable"></i>
                  </a> -->
                  Chris
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/andrew-la-rue-a07958238/">
                    <i class="mdi mdi-linkedin selectable px-1"></i>
                  </a>
                  <a href="https://github.com/AndrewLaRue">
                    <i class="mdi mdi-github selectable"></i>
                  </a>
                  Andrew
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <div class="p-2 img-text no-select">External Links</div>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul class="list-unstyled">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-6 text-center my-5">
      <img class="img-fluid" src="../assets/img/FullLogo_Transparent_NoBuffer.png" alt="">
    </div>

    <div class="col-3 p-3 text-end">
      <button class="btn btn-outline-dark fs-5 w-100" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasExample">
        Basics
      </button>
    </div>

    <div>
      <FooterNav />
    </div>
  </div>

  <div class="offcanvas offcanvas-end offcanvas-style" tabindex="-1" id="offcanvasRight"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasLabel">Basics</h5>
      <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close"> <i
          class="mdi mdi-close text-danger fs-2" title="Close"></i></button>
    </div>
    <div class="offcanvas-body">
      Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { cardsService } from "../services/CardsService"
import { symbolsService } from "../services/SymbolsService"
import { onMounted } from "vue";
import SearchedCards from "../components/SearchedCards.vue";
import FooterNav from "../components/FooterNav.vue";


export default {
  setup() {

    // async function getSymbols() {
    //   try {
    //     await symbolsService.getSymbols();
    //   }
    //   catch (error) {
    //     logger.error(error);
    //     Pop.toast(error.message, "error");
    //   }
    // }
    onMounted(() => {
      // getSymbols();
    });
    return {
      card: computed(() => AppState.card),
      searchedCards: computed(() => AppState.searchedCards),
    };
  },
  components: { SearchedCards, FooterNav }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

img {
  height: 40em;
  width: 50em;
}

.hero-img {
  background-image: url(../assets/img/bg-mtg.jpg);
  background-position: top;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.img-text {
  text-shadow: 0px 0px 1px black;
  font-weight: 700;
  color: #162052;
}

.offcanvas-style {
  background: transparent;
  backdrop-filter: blur(4px);
  border: none;
  width: 20vw;
  text-shadow: none;
  height: fit-content;
  margin-top: 10vh;
}
</style>