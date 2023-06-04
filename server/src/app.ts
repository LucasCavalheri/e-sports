import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import 'dotenv/config'
import express, { Request, Response } from 'express'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minues'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'

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

app.post('/games/:id/ads', async (req: Request, res: Response) => {
  const gameId = req.params.id
  const body = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      discord: body.discord,
      yearsPlaying: body.yearsPlaying,
      weekDays: body.weekDays.join(','),
      hoursStart: convertHourStringToMinutes(body.hoursStart),
      hoursEnd: convertHourStringToMinutes(body.hoursEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })

  return res.status(201).json(ad)
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

  return res.status(200).json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hoursStart: convertMinutesToHourString(ad.hoursStart),
        hoursEnd: convertMinutesToHourString(ad.hoursEnd),
      }
    }),
  )
})

app.get('/ads/:id/discord', async (req: Request, res: Response) => {
  const adId = req.params.id

  const ad = await prisma.ad.findUnique({
    where: {
      id: adId,
    },
    select: {
      discord: true,
    },
  })

  if (!ad) {
    return res.status(404).json({
      error: 'Ad not found',
    })
  }

  return res.status(200).json({
    discord: ad?.discord,
  })
})


export default app
