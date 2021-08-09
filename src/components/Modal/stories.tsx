import { Story, Meta } from '@storybook/react/types-6-0'
import useState from 'storybook-addon-state'

import { Button } from 'components/Button'
import Modal from '.'

export default {
  title: 'Modal',
  component: Modal
} as Meta

export const Basic: Story = () => {
  const [isOpen, setIsOpen] = useState('isOpen', false)

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>Abrir modal</Button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(!isOpen)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero velit
        quisquam numquam beatae nisi assumenda iste, rerum perferendis? Non,
        culpa nobis. Soluta assumenda minus, beatae vel ullam voluptas odit
        dignissimos?
      </Modal>
    </div>
  )
}
