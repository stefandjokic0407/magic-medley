import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const DeckSchema = new Schema(
  {
    picture: { type: String, default: 'https://preview.redd.it/dm8s72bg1zf51.jpg?width=1632&format=pjpg&auto=webp&s=77acaefbbfef40c240a13b7ef6006974b19cf6f9'},
    name: {type: String, required: true, minlength: 1, maxlength: 50},
    // cardIds: { type: Array},
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
