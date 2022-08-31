import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CardSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    uri: { type: String, required: true },
    image_uris: { type: Object },
    mana_cost: { type: String },
    cmc: { type: Number },
    type_line: { type: String },
    oracle_text: { type: String },
    colors: { type: Array },
    legalities: { type: Object },
    count: { type: Number, default: 0},
    set_id: { type: String },
    set: { type: String },
    set_name: { type: String},
    rarity: { type: String },
    artist: { type: String},
    prices: { type: Object},
    related_uris: { type: Object},
    purchase_uris: { type: Object},
    accountId: {type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

CardSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

// random comment