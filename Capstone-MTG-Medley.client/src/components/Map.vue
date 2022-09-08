<template>
	<div class="map-group">
		<GMapAutocomplete class="map-search" placeholder="Enter Your Location..." @place_changed="setPlace()">
		</GMapAutocomplete>
		<GMapMap :center="center" :zoom="zoom" map-type-id="terrain" class="map-body">
			<GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
				@click="center = m.position" />
		</GMapMap>
	</div>
</template>



<script>
import { ref, watch } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
	setup() {
		const center = { lat: 43.60641142319335, lng: -116.2860776917006 }
		const zoom = 17
		const mapRef = ref()

		watch(mapRef)
		return {
			center,
			zoom,
			mapRef,
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

			async setPlace() {
				try {

				} catch (error) {
					logger.error('setting map place', error)
					Pop.error(error)
				}
			}
		};

	},
};
</script>



<style scoped lang="scss">
.map-body {
	height: 17em;
	width: 100%;
}

.map-search {
	width: 100%;
}

.map-group {
	border: 2px solid black;
	border-radius: 5px;
	filter: drop-shadow(2px 2px 2px black);
}
</style>