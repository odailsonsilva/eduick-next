import { ThemeProvider } from 'styled-components'
import * as nextImage from 'next/image';

import theme from '../src/styles/theme'
import GlobalStyled from '../src/styles/global'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Story />
    </ThemeProvider>
  )
]

