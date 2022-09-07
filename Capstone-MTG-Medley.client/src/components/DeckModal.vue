<template>
    <div class="modal fade" id="deckModal" tabindex="-1" :aria-labelledby="activeDeck?.name" aria-hidden="true">
        <div class="modal-dialog">

            <div class="modal-content row g-0">
                <h5 class="modal-title">{{activeDeck?.name}}</h5>
            <!-- SECTION MODALS ACTIVE DECK PHOTO -->
            <div v-if="activeDeck" class="col-md-6">
                <img :src='activeDeck?.picture' class="cardBg img-fluid cardBorder">
            </div>
            <div v-if="!activeDeck?.picture" class="col-md-6 cardBorder">
                <img src="https://c1.scryfall.com/file/scryfall-card-backs/large/59/597b79b3-7d77-4261-871a-60dd17403388.jpg?1561757712"
                class="cardBg img-fluid" alt="...">
            </div>
            
            <div class="col-md-6 ">
                <p>{{activeDeck?.name}}</p>
                <p>{{activeDeck?.description}}</p>
                <p>{{activeDeck?.rating}}</p>
            </div>
            
            
        </div>
    </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { decksService } from '../services/DecksService.js';
import Pop from '../utils/Pop.js';


export default {
    props: { deck: { type: Object, required: true, } },
    setup() {
        return {
            activeDeck: computed(() => AppState.activeDeck),
        }
    }
}
</script>

<style scoped lang="scss">
.cardBg {
    border-radius: 20px;
    border-color: rgb(142, 142, 142);
}

p {
    padding: 0;
    margin: 0;
}

.rotated {
    transform: scale(1.1);
}
</style>
