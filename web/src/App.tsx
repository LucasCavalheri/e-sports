import { GameController } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { CreateAdBanner } from './components/CreateAdbanner'
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
            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor="game">Qual o game?</label>
                  <input
                    id="game"
                    type="text"
                    placeholder="Selecione o game que deseja jogar"
                  />
                </div>
                <div>
                  <label htmlFor="nickname">Seu nome (ou nickname)</label>
                  <input
                    id="nickname"
                    type="text"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <input
                      id="yearsPlaying"
                      type="number"
                      placeholder="Tudo bem ser ZERO"
                    />
                  </div>
                  <div>
                    <label htmlFor="discord">Qual seu Discord?</label>
                    <input
                      id="discord"
                      type="text"
                      placeholder="Usuario#0000"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                  </div>
                  <div>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div>
                      <input id="hourStart" type="time" placeholder="De" />
                      <input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" />
                  Costumo me contectar ao chat de voz
                </div>
                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
