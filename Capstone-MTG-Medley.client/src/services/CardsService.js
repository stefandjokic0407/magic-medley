import { mtg } from "./AxiosService"

class CardsService {
  async getCards() {
    const res = await mtg.get("cards")
  }
}

export const CardsService = new CardsService()