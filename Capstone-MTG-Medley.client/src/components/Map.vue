<template>
    <form class="mb-2">
        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter Address">
    </form>
    <GMapMap :center="center" :zoom="17" map-type-id="terrain" class="map-body">
        <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
            :draggable="true" @click="center = m.position" />
    </GMapMap>
</template>



<script>
export default {
    setup() {

        return {
            center: { lat: 43.60641142319335, lng: -116.2860776917006 },
            markers: [
                {
                    position: {
                        lat: 43.60641142319335,
                        lng: -116.2860776917006,
                    },
                },
                {
                    position: {
                        lat: 44.198429,
                        lng: -117.69529,
                    },
                },
                {
                    position: {
                        lat: 42.165218,
                        lng: -115.067116,
                    },
                },
                {
                    position: {
                        lat: 43.09256,
                        lng: -116.84074,
                    },
                },
            ],
        };
    },
};
</script>



<style scoped lang="scss">
.map-body {
    height: 17em;
    width: 100%;
}
</style>