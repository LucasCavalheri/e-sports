import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import 'dotenv/config'
import express, { Request, Response } from 'express'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.use(cors())

app.get('/health-check', (_req: Request, res: Response) =>
  res.json({ status: 'ok' }),
)

app.get('/games', async (_req: Request, res: Response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: { Ad: true },
      },
    },
  })

  return res.status(200).json(games)
})

export default app
