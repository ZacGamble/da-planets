import { planetsService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .delete('/:id', this.removePlanet)
      .post('', this.createPlanet)
  }

  async removePlanet(req, res, next) {
    try {
      const deletedPlanet = await planetsService.removePlanet(req.params.id)
      res.send(deletedPlanet)
    } catch (error) {
      next(error)
    }
  }

  async createPlanet(req, res, next) {
    try {
    // req.body
      const createdPlanet = await planetsService.createPlanet(req.body)
      return res.send(createdPlanet)
    } catch (error) {
      next(error)
    }
  }
}
