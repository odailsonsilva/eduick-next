import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { Input } from '.'

describe('<Input />', () => {
  it('shold render input with label', () => {
    renderWithTheme(<Input label="label" name="label" />)

    expect(screen.getByLabelText('label')).toBeInTheDocument()
  }),
    it('Renders without Label', () => {
      renderWithTheme(<Input />)
      expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
    }),
    it('Renders with placeholder', () => {
      renderWithTheme(<Input placeholder="placeholder" />)
      expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument()
    }),
    it('should render input isPassword', () => {
      renderWithTheme(<Input isPassword />)
      expect(screen.getByTestId('button--password')).toBeInTheDocument()
    }),
    it('Changes its value when typing', async () => {
      const onInputChange = jest.fn()

      const { container } = renderWithTheme(
        <Input
          label="label"
          type="text"
          name="label"
          onChange={onInputChange}
        />
      )

      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: '23' } })
      expect(input.value).toBe('23')

      expect(container.firstChild).toMatchSnapshot()
    })
})
