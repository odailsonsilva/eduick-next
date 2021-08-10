import { Story, Meta } from '@storybook/react/types-6-0'
import { Card, CardProps } from '.'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Basic: Story<CardProps> = (args) => <Card {...args} />
Basic.args = {
  image:
    'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  rating: 3,
  lessionsTotal: 10,
  title: 'Master English: Improve Your Speaking'
}
Basic.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
