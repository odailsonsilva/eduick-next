import { Story, Meta } from '@storybook/react/types-6-0'
import Radio from '.'

export default {
  title: 'Radio',
  component: Radio
} as Meta

const optionsRadio = [
  { value: '1', label: "I'M A TEACHER" },
  { value: '2', label: "I'M A STUDENT" }
]

export const Basic: Story = () => <Radio options={optionsRadio} />
Basic.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
