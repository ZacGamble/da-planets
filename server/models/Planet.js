import { Schema } from 'mongoose'

export const PlanetSchema = new Schema({
  name: { type: String },
  starId: { type: Schema.Types.ObjectId, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
PlanetSchema.virtual('localStar', {
  localField: 'starId',
  foreignField: '_id',
  ref: 'Star',
  justOne: true
})
