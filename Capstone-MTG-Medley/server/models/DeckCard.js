import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const DeckCardSchema = new Schema(
  {
    cardId: { type: Schema.Types.ObjectId, required: true, ref: 'Card'},
    name: { type: String },
    deckId: { type: Schema.Types.ObjectId, required: true, ref: 'Deck'},
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

DeckCardSchema.virtual('card', {
  localField: 'cardId',
  foreignField: '_id',
  justOne: true,
  ref: 'Card'
})

DeckCardSchema.virtual('deck', {
  localField: 'deckId',
  foreignField: '_id',
  justOne: true,
  ref: 'Deck'
})
