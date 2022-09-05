import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId



export const MessageSchema = new Schema(
  {
    creatorId: { type: ObjectId, required: true, ref: 'Account' },
    guildId: { type: ObjectId, required: true, ref: 'Guild' },
    body: { type: String, required: true, minLength: 3, maxLength: 250 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
MessageSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})