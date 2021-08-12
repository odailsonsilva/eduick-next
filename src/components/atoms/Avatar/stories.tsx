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

import { Avatar, AvatarProps } from '.'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})

export default {
  title: 'Avatar',
  subTitle: 'teste',
  component: Avatar,
  argTypes: {
    size: {
      description: 'Tamanho para o avatar',
      control: {
        type: 'select'
      }
    },
    src: {
      description: 'url ou caminho relativo da imagem'
    }
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Avatar</Title>
          <Subtitle />
          <Description>
            Componente usado para renderização do avatar do usuário.
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
} as Meta

export const Basic: Story<AvatarProps> = (args) => <Avatar {...args} />
Basic.args = {
  size: 'small',
  src: '/images/profile.png'
}
