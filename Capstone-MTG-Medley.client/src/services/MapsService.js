

class MapsService {


  async setLocation(locationData) {
    searchArea += coordinates.latitude + "%2c" + coordinates.longitude + "%7c"
    let map = `https://maps.googleapis.com/maps/api/staticmap?size=600x300&markers=color:blue%7c${searchArea}&key=AIzaSyA7Lu464b19aRFfGS2r0C11tIMdzYUPs6c`
  }
}






export const mapsService = new MapsService()