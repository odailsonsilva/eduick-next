/* eslint-disable react/display-name */
import { Story, Meta } from '@storybook/react/types-6-0'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs'
import {
  Title,
  Description,
  ArgsTable,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Primary
} from '@storybook/addon-docs'
import { Button, ButtonProps } from '.'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    themeButton: {
      description: 'Theme a ser aplicado',
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Button</Title>
          <Subtitle />
          <Description>
            Componente usado para controlar ações do usuário.
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
} as Meta

export const Basic: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
)

export const Secondary: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
)
Secondary.args = {
  themeButton: 'secondary'
}

export const Danger: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
)
Danger.args = {
  themeButton: 'danger'
}
