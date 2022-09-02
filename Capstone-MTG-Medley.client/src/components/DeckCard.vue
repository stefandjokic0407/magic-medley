<template>
    <div>
        <button @click="removeCardFromDeck()" class="btn-outline btn magicCard">Remove from Deck</button>
        <div v-if="card" class="deleteCard">
            <img class="img-fluid shadow cardsBg childElement deleteCard" :src=card.card.image_uris?.small
                :title="card.card.name">
        </div>
        <div v-else>
            <img class="img-fluid shadow cardsBg"
                src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712">
        </div>
        <p>{{ card.quantity }}</p>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState";
import { Card } from "../models/Card";
import { cardsService } from "../services/CardsService";
import { deckCardsService } from "../services/DeckCardsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import Modal from "./Modal.vue";


export default {
    props: { card: { type: Object, required: true } },
    setup(props) {
        // onMounted(() => {
        //   mounted();
        // })
        return {
            activeCard: computed(() => AppState.activeCard),
            deckCard: computed(() => AppState.deckCards),
            reset() {
                AppState.activeCard = props.card;
                console.log("Active Card:", props.card);
            },
            async getCardByOracle() {
                try {
                    // console.log(" Id", props.card.oracleId);
                    await cardsService.getCardByOracle(props.card.oracle_id);
                }
                catch (error) {
                    logger.error(error);
                    Pop.toast(error.message, "error");
                }
            },
            async removeCardFromDeck() {
                try {
                    const yes = await Pop.confirm("Remove Card?");
                    if (!yes) {
                        return;
                    }
                    const cardId = props.card.id;
                    await deckCardsService.removeCard(cardId);
                }
                catch (error) {
                    logger.error(error);
                    Pop.toast(error.message, "error");
                }
            }
            // mounted() {
            //   const childElements = document.querySelectorAll('.childElement');
            //   childElements.forEach(childElement => {
            //     // create button for each childElement
            //     const deleteButton = document.createElement('button');
            //     deleteButton.setAttribute('hidden', '');
            //     deleteButton.innerText = "Click to delete";
            //     // append button to the childElement
            //     childElement.appendChild(deleteButton);
            //     // add event listeners
            //     childElement.addEventListener('mouseenter', event => {
            //       deleteButton.removeAttribute('hidden');
            //     });
            //     childElement.addEventListener('mouseleave', event => {
            //       deleteButton.setAttribute('hidden', '');
            //     });
            //     deleteButton.addEventListener('click', event => {
            //       childElement.setAttribute('hidden', '');
            //     });
            //   });
            // },
        };
    },
    components: { Modal }
}

</script>

<style>
.deleteCard:hover img {
    opacity: 50;
}
</style>