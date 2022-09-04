import { AppState } from "../AppState"
import { api } from "./AxiosService"

class ProfilesService {

  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    AppState.activeProfile = new Profile(res.data)
  }

}

export const profilesService = new ProfilesService()