import { dbContext } from '../db/DbContext'

class StarsService {
  async remove(id) {
    const removedStar = await dbContext.Stars.findByIdAndDelete(id)
    return removedStar
  }

  async getAllStars() {
    return await dbContext.Stars.find({})
  }

  async createStar(body) {
    const star = await dbContext.Stars.create(body)
    return star
  }
}

export const starsService = new StarsService()
