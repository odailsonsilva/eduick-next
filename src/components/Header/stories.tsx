import { Story, Meta } from '@storybook/react/types-6-0'
import { Header, HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

const linksHeader = [
  { title: 'How it works', href: '/' },
  { title: 'About Us', href: '/' }
]

export const Basic: Story<HeaderProps> = (args) => (
  <Header links={linksHeader} buttonText="Get Started" />
)
Basic.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
