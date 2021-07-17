import { Request, Response } from 'express'
import { APIError } from '../../services/APIError'
import { GetCommentsUseCase } from './GetCommentsUseCase'

export class GetCommentsController {
  constructor(private getCommentsUseCase: GetCommentsUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    try {
      const response = await this.getCommentsUseCase.execute()

      return res.status(201).send(response)
    } catch (err) {
      if (err instanceof APIError) {
        return res.status(err.code).send({ message: err.message })
      }

      return res.status(400).send({ message: err.message })
    }
  }
}
