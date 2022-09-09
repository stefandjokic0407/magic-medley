import axios from "axios"
import { AppState } from "../AppState";

class MapsService {
  async getAddress(lat, lng) {
    const res = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyBKV1x_znI9BBbRVDrFGIebkCTitsRj7UU")
    console.log(res.data.results[0].formatted_address);
    AppState.accountAddress = res.data.results[0].formatted_address

  }
}

export const mapsService = new MapsService()