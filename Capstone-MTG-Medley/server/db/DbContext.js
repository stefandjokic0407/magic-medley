import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CardSchema } from '../models/Card.js';
import { DeckSchema } from '../models/Deck.js';
import { DeckCardSchema } from '../models/DeckCard.js';
import { ValueSchema } from '../models/Value'
import { MessageSchema } from '../models/Message';
import { GuildSchema } from '../models/Guild';
import { MembersSchema } from '../models/Member';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Decks = mongoose.model('Deck', DeckSchema);

  Cards = mongoose.model('Card', CardSchema);

  DeckCards = mongoose.model('DeckCard', DeckCardSchema);

  Messages = mongoose.model('Message', MessageSchema);
  Guilds = mongoose.model('Guild', GuildSchema);
  Members = mongoose.model('Member', MembersSchema)

}

export const dbContext = new DbContext()
