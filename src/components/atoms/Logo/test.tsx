import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Logo } from '.'

describe('<Logo />', () => {
  it('shold render defaul logo', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText('logo')).toBeInTheDocument()
    // expect(container.firstChild).toMatchSnapshot()
  }),
    it('shold render defaul logo with detail', () => {
      const { container } = renderWithTheme(<Logo activedDetails />)
      expect(screen.getByLabelText('logo')).toBeInTheDocument()
      expect(screen.getByLabelText('detailLogo')).toBeInTheDocument()
      expect(container.firstChild).toMatchSnapshot()
    })
})
