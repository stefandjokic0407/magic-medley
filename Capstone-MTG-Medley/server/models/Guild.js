import { Schema } from "mongoose";



export const GuildSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
      enum: ['Azorius Senate', 'House Dimir', 'Cult of Rakdos', 'Gruul Clans', 'Selesnya Conclave', 'Orzhov Syndicate', 'Izzet League', 'Golgari Swarm', 'Boros Legion', 'Simic Combine']
    },
    creatorId: { type: String, required: true, ref: 'Account' },
    members: { type: Number, min: 0, default: 0, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GuildSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})