<template>
    <div class="modal fade" id="deckModal" tabindex="-1" :aria-labelledby="activeDeck?.name" aria-hidden="true">
        <div class="modal-dialog">

            <div v-if="activeDeck.id" class="modal-content row g-0 cardBg elevation-3">
                <h5 class="modal-title mx-2"><b>{{activeDeck?.name}}</b></h5>
                SECTION MODALS ACTIVE DECK PHOTO
                <div v-if="activeDeck" class="col-12">
                    <img :src='activeDeck?.picture' class="deck-banner img-fluid">
                </div>
                <div v-if="!activeDeck?.picture" class="col-md-6">
                    <img src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
                        class="cardBg img-fluid" alt="...">
                </div>

                <div class="col-12 mx-2">
                    <p>{{activeDeck?.description}}</p>
                    <div class="row align-items-center">
                        <div class="col-6">

                            <p>Community Rating:{{calcRating}}/{{activeDeck?.rating.length*5}}</p>
                        </div>
                        <div class="offset-2 col-4">
                            <button class="btn btn-outline">Visit Deck Page</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';


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
            })

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
</style>
