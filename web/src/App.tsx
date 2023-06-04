import logoImage from './assets/logo.svg'
import { CreateAdBanner } from './components/CreateAdbanner'
import { GameBanner } from './components/GameBanner'
import './styles/main.css'

export default function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="Imagem Logo" className="" />
      <h1 className="text-6xl text-white font-extrabold mt-20">
        Seu{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner title='League of Legends' bannerUrl='/game-1.png' adsCount={3} />
      </div>

      <CreateAdBanner />
    </div>
  )
}
