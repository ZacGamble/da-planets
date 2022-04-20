import { dbContext } from '../db/DbContext'
import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAllStars)
      .post('', this.createStar)
      .delete('/:id', this.remove)
  }

  async getAllStars(req, res, next) {
    try {
      const stars = await starsService.getAllStars()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await starsService.remove(req.params.id)
      return res.send('Star deleted from storage')
    } catch (error) {
      next(error)
    }
  }
}
