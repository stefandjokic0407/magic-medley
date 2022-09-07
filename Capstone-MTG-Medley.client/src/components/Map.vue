<template>
    <div class="col-12 map-box">
        <div @submit.prevent="setLocation" class="input-group mb-2" title="Search">
            <input id="autocomplete" class="form-control" placeholder="Please enter a location..." type="text"
                v-model="currentLocation" />
            <button class="btn btn-outline-light" type="submit">Search</button>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d282374.8085682811!2d-121.6250911878813!3d38.56072249748669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smagic%20the%20gathering%20gamestore!5e0!3m2!1sen!2sus!4v1662576976114!5m2!1sen!2sus"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d282374.8085682811!2d-121.6250911878813!3d38.56072249748669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smagic%20the%20gathering%20gamestore!5e0!3m2!1sen!2sus!4v1662576976114!5m2!1sen!2sus"
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
        let currentLocation = ref('')
        let autocomplete
        return {
            center,
            currentLocation,
            autocomplete,

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
</style>