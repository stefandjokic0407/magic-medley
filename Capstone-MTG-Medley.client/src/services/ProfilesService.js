import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService";

class ProfilesService {
  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`);
    logger.log("what is a profile", res.data);
    AppState.activeProfile = new Profile(res.data);
  }
}

export const profilesService = new ProfilesService();
