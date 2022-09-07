import { AppState } from "../AppState";
import { Profile } from "../models/Profile.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService";

class ProfilesService {
  // NOTE this function is getting the user profile, it takes in the profileId by hitting our server, goes to the open object of activeProfile and grabs the data
  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`);
    // logger.log("what is a profile", res.data);
    AppState.activeProfile = new Profile(res.data);
  }
}

export const profilesService = new ProfilesService();
