import { AppState } from "../AppState"

class ProfilesService {

  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${id}`)
    AppState.activeProfile = new Profile(res.data)
  }

}

export const profilesService = new ProfilesService()