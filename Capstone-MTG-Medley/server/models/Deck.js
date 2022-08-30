import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const DeckSchema = new Schema(
  {
    id: { type: String, required: true },
    name: {type: String, required: true, minlength: 1, maxlength: 50},
    cardIds: { type: Array},
    price: { type: Number, default: 0},
    description: { type: String, maxlength: 5000},
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

DeckSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
