import GlobalStyled from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyled />
      <Story />
    </>
  )
]
