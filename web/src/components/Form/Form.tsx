import { Check, GameController } from '@phosphor-icons/react'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Dialog from '@radix-ui/react-dialog'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Game } from '../../App'
import { Input } from './Input'
import { Label } from './Label'
import { SelectGame } from './SelectGame'

export function Form() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get('http://localhost:3333/games')
      .then((response) => setGames(response.data))
  }, [])

  async function handleCreateAd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hoursStart: data.hoursStart,
        hoursEnd: data.hoursEnd,
        useVoiceChannel: useVoiceChannel,
      })
      alert('Anúncio criado com sucesso!')
    } catch (err) {
      console.log(err)
      alert('Erro ao criar anúncio!')
    }
  }

  return (
    <form
      onSubmit={handleCreateAd}
      className="mt-8 flex flex-col gap-4"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="game">Qual o game?</Label>
        {/* <select
          data-te-select-init
          id="game"
          name="game"
          className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 outline-none appearance-none"
        >
          <option className="text-zinc-500">
            Selecione o game que deseja jogar
          </option>
          {games.map((game) => (
            <option key={game.id} value={game.id}>
              {game.name}
            </option>
          ))}
        </select> */}
        <SelectGame games={games} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Seu nome (ou nickname)</Label>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="Como te chamam dentro do game?"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="yearsPlaying">Joga há quantos anos?</Label>
          <Input
            name="yearsPlaying"
            id="yearsPlaying"
            type="number"
            placeholder="Tudo bem ser ZERO"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="discord">Qual seu Discord?</Label>
          <Input
            name="discord"
            id="discord"
            type="text"
            placeholder="Usuario#0000"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex items-center flex-col sm:items-start gap-2">
          <Label htmlFor="weekDays">Quando costuma jogar?</Label>
          <ToggleGroup.Root
            type="multiple"
            className="grid grid-cols-7 sm:grid-cols-4 gap-2"
            value={weekDays}
            onValueChange={setWeekDays}
          >
            <ToggleGroup.Item
              value="0"
              className={`w-8 h-8 rounded ${
                weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
              }`}
              title="Domingo"
            >
              D
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="1"
              className={`w-8 h-8 rounded ${
                weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
              }`}
              title="Segunda"
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="2"
              className={`w-8 h-8 rounded ${
                weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
              }`}
              title="Terça"
            >
              T
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="3"
              className={`w-8 h-8 rounded ${
                weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
              }`}
              title="Quarta"
            >
              Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="4"
              className={`w-8 h-8 rounded ${
                weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
              }`}
              title="Quinta"
            >
              Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="5"
              className={`w-8 h-8 rounded ${
                weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
              }`}
              title="Sexta"
            >
              S
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="6"
              className={`w-8 h-8 rounded  ${
                weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
              }`}
              title="Sábado"
            >
              S
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
        <div className="flex items-center flex-col sm:items-start gap-2 flex-1">
          <Label htmlFor="hoursStart" className="">
            Qual horário do dia?
          </Label>

          <div className="grid grid-cols-2 gap-2">
            <Input
              name="hoursStart"
              id="hoursStart"
              type="time"
              placeholder="De"
            />
            <Input name="hoursEnd" id="hourEnd" type="time" placeholder="Até" />
          </div>
        </div>
      </div>
      <label className="mt-2 flex items-center gap-2 text-sm">
        <Checkbox.Root
          checked={useVoiceChannel}
          onCheckedChange={(checked) => {
            if (checked === true) {
              setUseVoiceChannel(true)
            } else {
              setUseVoiceChannel(false)
            }
          }}
          className="w-6 h-6 p-1 rounded bg-zinc-900"
        >
          <Checkbox.Indicator>
            <Check className="w-4 h-4 text-emerald-400" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        Costumo me conectar ao chat de voz
      </label>
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
