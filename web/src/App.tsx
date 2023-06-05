import axios from 'axios'
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
    axios
      .get('http://localhost:3333/games')
      .then((response) => setGames(response.data))
  }, [])

  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center my-20">
      <Logo />
      <HomeTitle />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 md:mx-8 lg:grid-cols-6 gap-6 mt-16">
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
