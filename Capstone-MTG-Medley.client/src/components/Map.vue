<template>
    <div class="col-12 map-box">
        <div @submit.prevent="setLocation" class="input-group mb-2" title="Search">
            <input id="autocomplete" class="form-control" placeholder="Please enter a location..." type="text"
                v-model="currentLocation" />
            <button class="btn btn-outline-light" type="submit">Search</button>
        </div>
        <div class="map-style" id="map">

        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { mapsService } from "../services/MapsService";

export default defineComponent({
    setup() {
        const center = { lat: 43.606630, lng: -116.285810 }
        let currentLocation = ref('')
        let autocomplete

        // function renderMap = () => {
        //     loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA7Lu464b19aRFfGS2r0C11tIMdzYUPs6c&libraries=places&callback=initMap&v=weekly")
        // }

        // async function initMap() {
        //     // The location of Uluru
        //     const uluru = { lat: -25.344, lng: 131.031 };
        //     // The map, centered at Uluru
        //     const map = new google.maps.Map(
        //         document.getElementById("map").innerHTML,
        //         {
        //             zoom: 4,
        //             center: uluru,
        //         }
        //     );

        //     // The marker, positioned at Uluru
        //     const marker = new google.maps.Marker({
        //         position: uluru,
        //         map: map,
        //     });
        // }

        // onMounted(() => {
        //     initMap()
        // })
        onMounted(() => {
            this.renderMap()
        })
        return {
            center,
            currentLocation,
            autocomplete,


            async initMap() {
                // The location of Uluru
                const uluru = { lat: -25.344, lng: 131.031 };
                // The map, centered at Uluru
                const map = await new google.maps.Map(
                    document.getElementById("map").innerHTML,
                    {
                        zoom: 4,
                        center: uluru,
                    }
                );
                // The marker, positioned at Uluru
                const marker = new google.maps.Marker({
                    position: uluru,
                    map: map,
                });
            },


            async initAutocomplete() {
                try {
                    autocomplete = await new google.maps.places.Autocomplete(
                        document.getElementById('autocomplete'), {
                        types: ['establishment'],
                        componentRestriction: { 'country': ['US'] },
                        fields: ['place_id', 'geometry', 'name']
                    }
                    )
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            },


            async setLocation() {
                try {
                    await mapsService.setLocation(currentLocation.value)
                } catch (error) {
                    logger.error('set location map', error)
                    Pop.toast(error.message, 'No location')
                }
            }
        }
    },
})
</script>


<style scoped lang="scss">
.map-box {
    background-color: black;
    padding: .5em;
    border-radius: 5px;
    text-shadow: none;
}

.map-style {
    height: 50vh;
}
</style>