import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CardSchema } from '../models/Card.js';
import { DeckSchema } from '../models/Deck.js';
import { DeckCardSchema } from '../models/DeckCard.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Decks = mongoose.model('Deck', DeckSchema);

  Cards = mongoose.model('Card', CardSchema);

  DeckCards = mongoose.model('DeckCard', DeckCardSchema);


}

export const dbContext = new DbContext()
