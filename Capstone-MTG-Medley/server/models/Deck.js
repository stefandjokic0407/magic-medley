import mongoose from 'mongoose'
const Schema = mongoose.Schema
import { logger } from '../utils/Logger.js'

const rating = new Schema({
  value: { type: Number, min: 1, max: 5 },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
})

rating.virtual('creator', {
  justOne: true,
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account'
})

export const DeckSchema = new Schema(
  {
    picture: { type: String, default: 'https://preview.redd.it/dm8s72bg1zf51.jpg?width=1632&format=pjpg&auto=webp&s=77acaefbbfef40c240a13b7ef6006974b19cf6f9' },
    name: { type: String, required: true, minlength: 1, maxlength: 50 },
    description: { type: String, maxlength: 5000 },
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    likeIds: { type: Array },
    likes: { type: Array },
    rating: [rating],
    views: { type: Number },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

DeckSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

DeckSchema.virtual('avgRating')
  .set(() => {
    return 'testing stuff'
  })
  .get(function () {
    let sum = null;
    // @ts-ignore
    const arr = this.rating
    if (!arr) {
      return sum
    }
    sum = 0
    // for (const value of arr) {
    for (let i = 0; i < arr.length; i++) {
      logger.log('arr at i', i, arr[i])
      // @ts-ignore
      sum += arr[i].value;
    }
    return sum
  })
