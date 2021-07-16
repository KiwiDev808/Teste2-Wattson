import cors from 'cors'
import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/static', express.static(__dirname + '../static'))

app.get('/comment', (req: Request, res: Response) => {
  return 0
})

app.post('/comment', (req: Request, res: Response) => {
  return 0
})

export { app }
