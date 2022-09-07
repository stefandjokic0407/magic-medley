<template>
    <div class="col-12 map-box">
        <div @submit.prevent="setLocation" class="input-group mb-2" title="Search">
            <input id="autocomplete" class="form-control" placeholder="Please enter a location..." type="text" />
            <button class="btn btn-outline-light" type="submit">Search</button>
        </div>
        <iframe
            src="https://maps.googleapis.com/maps/api/staticmap?size=600x300&markers=color:blue%7c$%7c116.30494195831875%2c43.58887719597092&key=AIzaSyA7Lu464b19aRFfGS2r0C11tIMdzYUPs6c"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import { mapsService } from "../services/MapsService";

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 43.606630, lng: -116.285810 }
        // let currentLocation = ref('')
        // let autocomplete
        return {
            center,

            // currentLocation,
            // autocomplete,

            // async initAutocomplete() {
            //     try {
            //         autocomplete = await new google.maps.places.Autocomplete(
            //             document.getElementById('autocomplete'), {
            //             types: ['establishment'],
            //             componentRestriction: { 'country': ['US'] },
            //             fields: ['place_id', 'geometry', 'name']
            //         }
            //         )
            //     } catch (error) {
            //         logger.error(error)
            //         Pop.toast(error.message, 'error')
            //     }
            // },


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
</style>