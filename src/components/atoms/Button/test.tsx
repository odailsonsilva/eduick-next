import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'
import theme from '../../../styles/theme'

import { Button } from '.'
import { transparentize } from 'polished'

describe('<Button />', () => {
  it('shold render button default', () => {
    renderWithTheme(<Button>Button</Button>)
    const button = screen.getByRole('button', { name: /Button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      background: theme.colors.yellow[500],
      color: '#6f48ec'
    })
  }),
    it('shold render button theme secondary', () => {
      renderWithTheme(<Button themeButton="secondary">Button</Button>)
      const button = screen.getByRole('button', { name: /Button/i })

      expect(button).toBeInTheDocument()
      expect(button).toHaveStyle({
        background: transparentize(0.7, theme.colors.purple[900]),
        color: theme.colors.white[500]
      })
    }),
    it('shold render button theme danger', () => {
      renderWithTheme(<Button themeButton="danger">Button</Button>)
      const button = screen.getByRole('button', { name: /Button/i })

      expect(button).toBeInTheDocument()
      expect(button).toHaveStyle({
        background: '#f44336',
        color: theme.colors.white[500]
      })
    }),
    it('shold render button theme danger', () => {
      renderWithTheme(<Button disabled>Button</Button>)
      const button = screen.getByRole('button', { name: /Button/i })

      expect(button).toBeInTheDocument()
      expect(button).toHaveStyle({ cursor: 'not-allowed' })
    }),
    it('shold render button clicks', () => {
      const onClick = jest.fn()

      const { container } = renderWithTheme(
        <Button onClick={onClick}>Button</Button>
      )
      const button = screen.getByRole('button', { name: /Button/i })

      fireEvent.click(button)

      expect(onClick).toHaveBeenCalled()

      expect(container.firstChild).toMatchSnapshot()
    })
})
