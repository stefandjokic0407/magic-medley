import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class CardsService {
  async getAllAccountCards(accountId) {
    const cards = await dbContext.Cards.find({ accountId });
    return cards;
  }
  async getCardById(cardId) {
    const card = await dbContext.Cards.findById(cardId).populate(
      "account",
      "name picture"
    );
    if (!card) {
      throw new BadRequest("invalid Card");
    }
    return card;
  }
  async createCard(body) {
    const collectionCard = await dbContext.Cards.findOne({
      oracle_id: body.oracle_id,
      accountId: body.accountId,
    });

    if (!collectionCard) {
      const card = await dbContext.Cards.create(body);
      await card.populate("account", "name picture");
      return card;
    }
    // @ts-ignore
    collectionCard.count++;
    collectionCard.image_uris = body.image_uris;
    collectionCard.type_line = body.type_line
    // @ts-ignore
    await collectionCard.save();
    // @ts-ignore
    return collectionCard;
  }
  async updateCard(cardId, cardData) {
    const card = await this.getCardById(cardId);
    // @ts-ignore
    card.count = cardData.count || card.count;
    // @ts-ignore
    card.prices = cardData.prices || card.prices;
    // @ts-ignore
    await card.save();
    return card;
  }

  async deleteCard(cardId) {
    const collectionCard = await this.getCardById(cardId);
    // await dbContext.Cards.findOne({ id: body.id,});
    // @ts-ignore
    collectionCard.count--;

    // @ts-ignore
    if (collectionCard.count > 0) {
      // @ts-ignore
      await collectionCard.save();
      return { action: "none", data: collectionCard };
    } else {
      let deckCards = await dbContext.DeckCards.find({ cardId }).populate(
        "deck",
        "name"
      );
      if (deckCards.length == 0) {
        await collectionCard.remove();
        return {
          action: "none",
          data: `${collectionCard.name} was removed from collection`,
        };
      } else {
        return { action: "confirm-delete", data: deckCards };
      }
    }
  }

  async deleteCardEverywhere(cardId) {
    await dbContext.DeckCards.deleteMany({ cardId });
    await dbContext.Cards.findByIdAndDelete(cardId);
    return "Removed Cards from Everywhere";
  }
}

export const cardsService = new CardsService();
