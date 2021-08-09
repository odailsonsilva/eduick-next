import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme'
import GlobalStyled from '../src/styles/global'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Story />
    </ThemeProvider>
  )
]
