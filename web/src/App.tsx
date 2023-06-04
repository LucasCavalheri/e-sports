import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { CreateAdBanner } from './components/CreateAdbanner'
import { Form } from './components/Form/Form'
import { GameBanner } from './components/GameBanner'
import { HomeTitle } from './components/HomeTitle'
import { Logo } from './components/Logo'
import './styles/main.css'

interface Game {
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

      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>
            <Form />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
