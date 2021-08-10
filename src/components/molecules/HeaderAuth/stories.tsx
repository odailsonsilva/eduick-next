import { Story, Meta } from '@storybook/react/types-6-0'
import { HeaderAuth, HeaderProps } from '.'

export default {
  title: 'HeaderAuth',
  component: HeaderAuth
} as Meta

const linksHeader = [{ title: 'My Classes', href: '/' }]

export const Basic: Story<HeaderProps> = (args) => (
  <HeaderAuth
    onClick={() => console.log('click')}
    links={linksHeader}
    buttonText="Change to teacher mode"
    themeButton="secondary"
  />
)
Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
