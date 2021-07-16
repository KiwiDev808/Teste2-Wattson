import cors from 'cors'
import express, { Request, Response } from 'express'
import { createCommentController } from './useCases/CreateComment'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/static', express.static(process.cwd() + '/static'))

app.get('/', (req: Request, res: Response) => {
  return res.send({ message: 'ok' })
})

app.get('/comment', (req: Request, res: Response) => {
  return 0
})

app.post('/comment', (req: Request, res: Response) => {
  createCommentController.handle(req, res)
})

export { app }
