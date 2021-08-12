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
import { Input, InputProps } from '.'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: {
      description: 'Label para input, caso não tenha ele ficará vazio.'
    },
    isPassword: {
      description: 'Transforma input normal, em input password',
      control: {
        type: 'boolean'
      }
    },
    errors: {
      description:
        'Caso seja diferente de vazio, ele transforma o input em "error" e adiciona o label do erro',
      control: {
        type: null
      }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Input</Title>
          <Subtitle />
          <Description>
            Componente para criar controles interativos para formulários
            baseados na web para receber dados do usuário.. Este input usa o
            conceito de uncontrolled input, ou seja, acesso atraves de ref.
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
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
