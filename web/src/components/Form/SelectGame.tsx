import { Listbox, Transition } from '@headlessui/react'
import { ArrowDown, Check } from '@phosphor-icons/react'
import { Fragment, useState } from 'react'
import { Game } from '../../App'

export function SelectGame({ games, name }: { games: Game[], name: string }) {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  return (
    <div className="grid">
      <Listbox onChange={setSelectedGame} name={name}>
        <Listbox.Button className="flex justify-between bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-400 outline-none appearance-none">
          {selectedGame || 'Selecione o game que deseja jogar'}
          <ArrowDown size={20} />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition all duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-10 max-h-60 w-10/12 overflow-auto bg-transparent rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {games.map((game) => (
              <Listbox.Option
                key={game.id}
                value={game.name}
                className="relative select-none py-2 pl-10 pr-4 bg-zinc-500 hover:bg-zinc-600 transition all duration-300"
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-bold' : 'font-medium'
                      } block truncate`}
                    >
                      {game.name}
                    </span>
                    {selected && (
                      <span
                        className={`${
                          active ? 'text-zinc-950' : 'text-zinc-800'
                        } absolute inset-y-0 left-0 flex items-center pl-2`}
                      >
                        <Check size={22} />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}
