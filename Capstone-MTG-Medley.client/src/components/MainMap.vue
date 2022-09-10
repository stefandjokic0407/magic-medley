<template>
  <div>
    <form class="map-search">
      <div class="input-group">
        <input class="form-control" id="autocomplete" type="text" placeholder="Find Magic: The Gathering Events"
          @click="askLocationPermission()" v-model="editable">
        <button class="btn btn-primary" type="submit">Go</button>
      </div>
    </form>
  </div>
  <section id="map">

  </section>
</template>



<script>
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { mapsService } from '../services/MapsService';
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { AppState } from '../AppState';

export default {

  setup() {
    const editable = ref('')

    function initMap() {
      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.6067, lng: - 116.2867 },
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
      })
      new google.maps.Marker({
        position: new google.maps.LatLng(43.6067, -116.2867),
        map: map
      })
    }

    function mountAutoComplete() {
      let autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
          bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(43.6150, -116.2023)
          )
        })
      autocomplete.addListener("place_changed", () => {
        let place = autocomplete.getPlace()
        console.log(place);
        // NOTE this method needs to be fixed - showing undefined showUserLocationOnTheMap
        // userAddedLocation(place.geometry.location.lat(), place.geometry.location.lng())
        userAddedLocation()
        // let searchLocation = textSearch(place.geometry.location.lat(), place.geometry.location.lng())
        // searchLocation
      })
    }

    function userAddedLocation() {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: new google.maps.LatLng(43.6150, -116.2023),
        mapTypeId: google.maps.MapTypeId.HYBRID
      })
      new google.maps.Marker({
        position: new google.maps.LatLng(43.6150, -116.2023),
        map: map
      })
      let request = {
        radius: '500',
        location: new google.maps.LatLng(43.6150, -116.2023),
        query: editable.value,
      }
      console.log(request);
      let service = new google.maps.places.PlacesService(map)
      service.textSearch(request, callback)
    }

    // function textSearch(latitude, longitude) {
    //   let map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 15,
    //     center: new google.maps.LatLng(latitude, longitude),
    //     location: new google.maps.LatLng(latitude, longitude),
    //     mapTypeId: google.maps.MapTypeId.HYBRID
    //   })

    //   let request = {
    //     radius: '500',
    //     query: editable,
    //   }
    //   let service = new google.maps.places.PlacesService(map)
    //   service.textSearch(request, callback)
    // }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          console.log(place)
          let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map
          })
          marker(place)
        }
      }
    }

    // function createMarker(place) {
    //   let map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 16,
    //     center: new google.maps.LatLng(43.6150, -116.2023),
    //     mapTypeId: google.maps.MapTypeId.HYBRID
    //   })
    //   let marker = new google.maps.Marker({
    //     position: place.geometry.location,
    //     map: map
    //   })

    //   marker.setMap(map)
    //   console.log(marker);
    // }


    onMounted(() => {
      mountAutoComplete()
      initMap()
    })

    return {
      editable,
      askLocationPermission() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            this.getAddress(position.coords.latitude, position.coords.longitude)
            this.showUserLocationOnTheMap(position.coords.latitude, position.coords.longitude)
            console.log(position.coords.latitude, position.coords.longitude);
            this.textSearch(position.coords.latitude, position.coords.longitude)
          }, error => {
            logger.log(error)
            Pop.error(error)
          })
        } else {
          Pop.toast('Your browser does not support geolocation')
        }
      },
      async getAddress(lat, lng) {
        try {
          await mapsService.getAddress(lat, lng)
          editable.value = AppState.accountAddress
        } catch (error) {
          logger.error('[getting address]', error)
          Pop.error(error.value.message)
        }
      },

      showUserLocationOnTheMap(latitude, longitude) {
        console.log(latitude, longitude);
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: new google.maps.LatLng(latitude, longitude),
          mapTypeId: google.maps.MapTypeId.HYBRID
        })
        console.log(map);
        console.log(map.center.lng);
        new google.maps.Marker({
          position: new google.maps.LatLng(latitude, longitude),
          map: map
        })
      },

    };
  },
};
</script>



<style scoped lang="scss">
#map {
  height: 100vh;
  width: 100%;
}

#autocomplete {
  width: 70%;
}


.map-search {
  position: relative;
  z-index: 1;
}
</style>