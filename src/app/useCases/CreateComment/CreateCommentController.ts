import { Request, Response } from 'express'
import { APIError } from '../../services/APIError'
import { CreateCommentUseCase } from './CreateCommentUseCase'

export class CreateCommentController {
  constructor(private CreateCommentUseCase: CreateCommentUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const { description } = req.body
    const baseUrl = `${req.protocol}://${req.get('host')}`

    try {
      const response = await this.CreateCommentUseCase.execute({
        description,
        baseUrl,
      })

      return res.status(201).send(response)
    } catch (err) {
      if (err instanceof APIError) {
        return res.status(err.code).send({ message: err.message })
      }

      return res.status(400).send({ message: err.message })
    }
  }
}
