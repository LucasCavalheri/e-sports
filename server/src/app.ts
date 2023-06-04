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

app.get('/games/:id/ads', async (req: Request, res: Response) => {
  const gameId = req.params.id

  const ads = await prisma.ad.findMany({
    where: {
      gameId,
    },
    select: {
      id: true,
      name: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hoursEnd: true,
      weekDays: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return res.status(200).json(ads.map((ad) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','), 
    }
  }))
})

export default app
