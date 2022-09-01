import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CardSchema = new Schema(
  {
    artist: { type: String },
    cmc: { type: Number },
    colors: { type: Array },
    flavor_text: { type: String },
    image_uris: { type: Object },
    layout: { type: String },
    legalities: { type: Object },
    mana_cost: { type: String },
    name: { type: String, required: true },
    oracle_id: { type: String },
    oracle_text: { type: String },
    power: { type: Number },
    prices: { type: Object },
    purchase_uris: { type: Object },
    set: { type: String },
    set_name: { type: String },
    toughness: { type: Number },
    type_line: { type: String },
    count: { type: Number, default: 0 },
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
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