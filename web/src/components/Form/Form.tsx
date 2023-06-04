import { GameController } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from './Input'
import { Label } from './Label'

export function Form() {
  return (
    <form className="mt-8 flex flex-col gap-4" autoComplete="off">
      <div className="flex flex-col gap-2">
        <Label htmlFor="game" title="Qual o game?" />
        <Input
          id="game"
          type="text"
          placeholder="Selecione o game que deseja jogar"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="nickname" title="Seu nome (ou nickname)" />
        <Input
          id="nickname"
          type="text"
          placeholder="Como te chamam dentro do game?"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="yearsPlaying" title="Joga há quantos anos?" />
          <Input
            id="yearsPlaying"
            type="number"
            placeholder="Tudo bem ser ZERO"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="discord" title="Qual seu Discord?" />
          <Input id="discord" type="text" placeholder="Usuario#0000" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="weekDays" title="Quando costuma jogar?" />
          <div className="grid grid-cols-4 gap-2">
            <button className="w-8 h-8 rounded bg-zinc-900" title="Domingo">
              D
            </button>
            <button className="w-8 h-8 rounded bg-zinc-900" title="Segunda">
              S
            </button>
            <button className="w-8 h-8 rounded bg-zinc-900" title="Terça">
              T
            </button>
            <button className="w-8 h-8 rounded bg-zinc-900" title="Quarta">
              Q
            </button>
            <button className="w-8 h-8 rounded bg-zinc-900" title="Quinta">
              Q
            </button>
            <button className="w-8 h-8 rounded bg-zinc-900" title="Sexta">
              S
            </button>
            <button className="w-8 h-8 rounded bg-zinc-900" title="Sábado">
              S
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="hourStart" title="Qual horário do dia?" />

          <div className="grid grid-cols-2 flex-1">
            <Input id="hourStart" type="time" placeholder="De" />
            <Input id="hourStart" type="time" placeholder="Até" />
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-2 text-sm">
        <Input type="checkbox" />
        Costumo me contectar ao chat de voz
      </div>
      <footer className="mt-4 flex justify-end gap-4">
        <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
          Cancelar
        </Dialog.Close>
        <button
          className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
          type="submit"
        >
          <GameController className="w-6 h-6" />
          Encontrar duo
        </button>
      </footer>
    </form>
  )
}
