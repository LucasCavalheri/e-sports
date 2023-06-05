import { MagnifyingGlassPlus } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-8 md:w-11/12 bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E2D45C] rounded-lg overflow-hidden">
      <div className="w-72 sm:w-full flex gap-8 flex-col min-h-fit md:flex-row justify-between items-center px-8 py-6 md:h-28 bg-[#2A2634] ">
        <div> 
          <h1 className="text-center md:text-justify text-md md:text-2xl text-white font-black">
            Não encontrou seu duo?
          </h1>
          <span className=" text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger className="flex justify-center items-center gap-3 bg-violet-500 py-3 px-4 hover:bg-violet-600 transition-all text-white rounded">
          <MagnifyingGlassPlus className="hidden md:block" size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}
