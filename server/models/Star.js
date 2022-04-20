import { Schema } from 'mongoose'

export const StarSchema = new Schema({
  name: { type: String },
  parentId: { type: Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })

StarSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Parent',
  foreignField: '_id',
  justOne: true
})
