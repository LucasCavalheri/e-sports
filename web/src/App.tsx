import { useEffect, useState } from 'react'
import { CreateAdModal } from './components/CreateAdModal'
import { GameBanner } from './components/GameBanner'
import { HomeTitle } from './components/HomeTitle'
import { Logo } from './components/Logo'
import './styles/main.css'

export interface Game {
  id: string
  name: string
  bannerUrl: string
  _count: {
    Ad: number
  }
}

export default function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Logo />
      <HomeTitle />

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.name}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.Ad}
          />
        ))}
      </div>
      <CreateAdModal />
    </div>
  )
}
