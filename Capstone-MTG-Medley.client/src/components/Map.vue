<template>
    <div class="col-5 map-box">
        <div class="input-group mb-2" title="Search">
            <input class="form-control" placeholder="Please enter a location..." type="text" v-model="location" />
            <button class="btn btn-outline-light" type="submit">Search</button>
        </div>
        <GoogleMap api-key="AIzaSyA7Lu464b19aRFfGS2r0C11tIMdzYUPs6c" style="width: 100%; height: 500px" :center="center"
            :zoom="15">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 43.606630, lng: -116.285810 }

        return { center }
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