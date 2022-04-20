import { dbContext } from '../db/DbContext'

class PlanetsService {
  async removePlanet(id) {
    return await dbContext.Planets.findByIdAndDelete(id)
  }

  async createPlanet(planet) {
    return await dbContext.Planets.create(planet)
  }
}

export const planetsService = new PlanetsService()
