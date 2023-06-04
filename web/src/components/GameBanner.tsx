interface GameBannerProps {
  bannerUrl: string
  title: string
  adsCount: number
}

export function GameBanner({ bannerUrl, title, adsCount }: GameBannerProps) {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={`Banner do Jogo: ${title}`} />
      <div className="w-full pt-16 pb-4 px-4 bg-card-game-gradient to-black/5 absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount === 1 ? `${adsCount} anúncio` : `${adsCount} anúncios`}
        </span>
      </div>
    </a>
  )
}
