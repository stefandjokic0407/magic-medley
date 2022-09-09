<template>
	<div class="map-group">
		<GMapMap :center="center" :zoom="zoom" map-type-id="terrain" class="map-body">
			<GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
				@click="center = m.position" />
		</GMapMap>
	</div>
</template>



<script>
import { onMounted, ref, watchEffect } from 'vue';


export default {
	setup() {
		const center = { lat: 43.60641142319335, lng: -116.2860776917006 }
		const zoom = 11


		onMounted(() => {
		})
		return {

			center,
			zoom,

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
	height: 30vh;
	width: 100%;
}

.map-search {
	width: 100%;
}

.map-group {
	border: 4px solid rgba(248, 231, 185);
	border-radius: 5px;
	filter: drop-shadow(2px 2px 2px black);
}
</style>