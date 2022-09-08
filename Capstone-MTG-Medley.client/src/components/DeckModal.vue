<template>
    <div class="modal fade" id="deckModal" tabindex="-1" :aria-labelledby="activeDeck?.name" aria-hidden="true">
        <div class="modal-dialog">
            <div v-if="activeDeck.id" class="modal-content" style="width: 15rem;">

                <div class="card hero-img">
                    <div class=" mx-3 mt-3">
                        <img v-if="activeDeck" :src='activeDeck?.picture' class="card-img-top">
                        <img v-else
                            src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
                            class="card-img-top" alt="...">
                    </div>
                    <div v-if="!activeDeck?.picture" class="card-img-top">
                        <img src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
                            class="cardBg img-fluid" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><b>{{activeDeck?.name}}</b></h5>
                        <p class="card-text">{{activeDeck?.description}}</p>
                    </div>
                    <div class="card-body">
                        <p>Community Rating:{{activeDeck?.avgRating}}/{{activeDeck.rating?.length*5}}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-outline-light" @click="rateDeck(5)">rating up</button>
                        <button @click="deckDetails" class="btn btn-outline-light">Deck Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { Modal } from "bootstrap";
import { AppState } from '../AppState.js';
import { router } from "../router.js";
import { decksService } from "../services/DecksService.js";
import Pop from "../utils/Pop.js";


export default {
    // props: { deck: { type: Object, required: true, } },
    setup(props) {

        return {
            activeDeck: computed(() => AppState.activeDeck),
            calcRating: computed(() => {
                const arr = AppState.activeDeck?.rating;
                let sum = 0;
                for (const value of arr) {
                    sum += value;
                }
                return sum
            }),
            async deckDetails() {
                try {
                    router.push({ name: "DeckDetails", params: {deckId: AppState.activeDeck?.id} })
                    // Modal.getOrCreateInstance(document.getElementById('deck-modal')).hide()
                } catch (error) {
                    console.log(error)
                }
            },

            async rateDeck(num) {
                try {
                    const accountId = this.activeDeck.accountId
                    const deckId = this.activeDeck.id
                    await decksService.rateDeck({value: num}, deckId, accountId)
                } catch (error) {
                    Pop.error(error)
                }
            }

        }
    }
}
</script>

<style scoped lang="scss">
.cardBg {
    border-radius: 5px;
    border-color: rgb(142, 142, 142);
}

.deck-banner {
    width: inherit;
    height: 20vh;
    object-fit: cover;
    object-position: 100% 10%;
}

p {
    padding: 0;
    margin: 0;
}

.rotated {
    transform: scale(1.1);
}

.hero-img {
    background-image: url(../assets/img/note.png);
    background-position: center;
    background-size: inherit;
}
</style>
