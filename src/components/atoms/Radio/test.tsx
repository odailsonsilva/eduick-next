import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import Radio from '.'

const optionsRadio = [{ value: '1', label: "I'M A TEACHER" }]

describe('<Radio />', () => {
  it('shold render default radio options', () => {
    const { container } = renderWithTheme(<Radio options={optionsRadio} />)
    const label = screen.getByText("I'M A TEACHER")

    expect(label).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
