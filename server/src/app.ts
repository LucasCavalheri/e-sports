import cors from 'cors'
import 'dotenv/config'
import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/health-check', (_req: Request, res: Response) =>
  res.json({ status: 'ok' }),
)

export default app
