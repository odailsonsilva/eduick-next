import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Avatar } from '.'

describe('<Avatar />', () => {
  it('shold render the small size default', () => {
    renderWithTheme(<Avatar />)
    expect(screen.getByRole('img', { name: /profile/i })).toBeInTheDocument()
  }),
    it('shold render the large size', () => {
      const { container } = renderWithTheme(<Avatar size="large" />)
      const image = screen.getByRole('img', { name: /profile/i })

      expect(image).toBeInTheDocument()
      expect(image.parentElement?.parentElement).toHaveStyle({
        height: '5rem',
        width: '5rem'
      })
      expect(container.firstChild).toMatchSnapshot()
    })
})
