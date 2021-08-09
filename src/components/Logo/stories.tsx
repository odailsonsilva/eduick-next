import { Story, Meta } from '@storybook/react/types-6-0'
import { Logo, LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Basic: Story = () => <Logo />
Basic.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const withDeatils: Story<LogoProps> = (args) => <Logo {...args} />
withDeatils.args = {
  activedDetails: true
}
withDeatils.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
