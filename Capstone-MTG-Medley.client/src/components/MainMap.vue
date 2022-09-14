<template>

  <input class="controls" id="pac-input" type="text" placeholder="Search Magic: The Gathering Events"
    v-model="editable">

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

    // function initMap() {
    //   let map = new google.maps.Map(document.getElementById("map"), {
    //     center: { lat: 43.6067, lng: - 116.2867 },
    //     zoom: 18,
    //     mapTypeId: google.maps.MapTypeId.HYBRID
    //   })
    //   new google.maps.Marker({
    //     position: new google.maps.LatLng(43.6067, -116.2867),
    //     map: map
    //   })
    // }

    function initAutocomplete() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.6067, lng: -116.2867 },
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
      })
      const userInput = document.getElementById('pac-input')

      const searchBox = new google.maps.places.SearchBox(userInput)


      // TODO get search box to layer on top map
      console.log(map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(userInput))
      console.log(userInput);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(userInput)

      map.addListener("bounds_changed", () => {
        searchBox.setBounds(new google.maps.LatLngBounds)
      })

      let markers = new google.maps.Marker()
      markers = []

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces()
        console.log(places);

        if (places.length == 0) {
          return;
        }

        markers.forEach((marker) => {
          marker.setMap(null);
        })
        markers = []

        const bounds = new google.maps.LatLngBounds()

        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          const icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          markers.push(
            new google.maps.Marker({
              map,
              icon,
              title: place.name,
              position: place.geometry.location
            })
          )

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        })
        map.fitBounds(bounds)

        // NOTE this method needs to be fixed - showing undefined showUserLocationOnTheMap
        // userAddedLocation(place.geometry.location.lat(), place.geometry.location.lng())
        // console.log(places.geometry.location.lat());
        // userAddedLocation(place.geometry.location.lat(), place.geometry.location.lng())
        // let searchLocation = textSearch(place.geometry.location.lat(), place.geometry.location.lng())
        // searchLocation
      })
    }

    // function userAddedLocation(latitude, longitude) {
    //   let map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 16,
    //     center: new google.maps.LatLng(latitude, longitude),
    //     mapTypeId: google.maps.MapTypeId.HYBRID
    //   })
    //   new google.maps.Marker({
    //     position: new google.maps.LatLng(latitude, longitude),
    //     map: map
    //   })
    //   // let request = {
    //   //   radius: '500',
    //   //   location: new google.maps.LatLng(43.6150, -116.2023),
    //   //   query: editable.value,
    //   // }
    //   // console.log(request);
    //   // let service = new google.maps.places.PlacesService(map)
    //   // service.textSearch(request, callback)
    // }

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

    // function callback(results, status) {
    //   if (status == google.maps.places.PlacesServiceStatus.OK) {
    //     for (let i = 0; i < results.length; i++) {
    //       let place = results[i];
    //       console.log(place)
    //       let marker = new google.maps.Marker({
    //         position: place.geometry.location,
    //         map: map
    //       })
    //       createMarker(place)
    //     }
    //   }
    // }

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

    //   // marker.setMap(map)
    //   console.log(marker);
    // }


    onMounted(() => {
      initAutocomplete()
    })

    return {
      editable,
      // askLocationPermission() {
      //   if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(position => {
      //       this.getAddress(position.coords.latitude, position.coords.longitude)
      //       this.showUserLocationOnTheMap(position.coords.latitude, position.coords.longitude)
      //       console.log(position.coords.latitude, position.coords.longitude);
      //       // this.textSearch(position.coords.latitude, position.coords.longitude)
      //     }, error => {
      //       logger.log(error)
      //       // Pop.error(error)
      //     })
      //   } else {
      //     Pop.toast('Your browser does not support geolocation')
      //   }
      // },
      // async getAddress(lat, lng) {
      //   try {
      //     await mapsService.getAddress(lat, lng)
      //     editable.value = AppState.accountAddress
      //   } catch (error) {
      //     logger.error('[getting address]', error)
      //     Pop.error(error.value.message)
      //   }
      // },

      // showUserLocationOnTheMap(latitude, longitude) {
      //   console.log(latitude, longitude);
      //   let map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 15,
      //     center: new google.maps.LatLng(latitude, longitude),
      //     mapTypeId: google.maps.MapTypeId.HYBRID
      //   })
      //   console.log(map);
      //   console.log(map.center.lng);
      //   new google.maps.Marker({
      //     position: new google.maps.LatLng(latitude, longitude),
      //     map: map
      //   })
      // },

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

#infowindow-content .title {
  font-weight: bold;
}

#infowindow-content {
  display: none;
}

#map #infowindow-content {
  display: inline;
}

.pac-card {
  background-color: #fff;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
  margin: 10px;
  padding: 0 0.5em;
  font: 400 18px Roboto, Arial, sans-serif;
  overflow: hidden;
  font-family: Roboto;
  padding: 0;
}

#pac-container {
  padding-bottom: 12px;
  margin-right: 12px;
}

.pac-controls {
  display: flex;
  padding: 5px 11px;
}

.pac-controls label {
  font-family: Roboto;
  font-size: 13px;
  font-weight: 300;
}

#pac-input {
  background-color: rgb(232, 218, 218);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  margin-top: 1em;
  margin-left: 3em;
  padding: 1em;
  text-overflow: ellipsis;
  width: 30em;
  height: 2em;
  display: flex;
  border: 3px solid black;
  border-radius: 3px;
}

#pac-input:focus {
  border-color: #4d90fe;
}
</style>