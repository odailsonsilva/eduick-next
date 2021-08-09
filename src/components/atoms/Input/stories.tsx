import { Story, Meta } from '@storybook/react/types-6-0'
import { Input, InputProps } from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Basic: Story = () => <Input />

export const withLabel: Story<InputProps> = (args) => <Input {...args} />
withLabel.args = {
  label: 'Label:'
}
withLabel.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const withPassword: Story<InputProps> = (args) => <Input {...args} />
withPassword.args = {
  isPassword: true
}
withLabel.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
