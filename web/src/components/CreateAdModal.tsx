import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdBanner } from './CreateAdbanner'
import { Form } from './Form/Form'

export function CreateAdModal() {
  return (
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
  )
}
