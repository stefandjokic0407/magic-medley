import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId


export const MembersSchema = new Schema(
  {
    guildId: { type: ObjectId, required: true, ref: 'Guild' },
    accountId: { type: ObjectId, required: true, ref: 'Account' },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

MembersSchema.virtual('guild', {
  localField: 'guildId',
  foreignField: '_id',
  justOne: true,
  ref: 'Guild'
})

MembersSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})