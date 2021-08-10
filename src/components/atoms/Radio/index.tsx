import React from 'react'
import * as S from './styles'

type Options = {
  value: string
  label: string | any
}

type Props = {
  options: Options[]
  defaultValue?: string
  direction?: 'row' | 'column'
}

const Radio = ({
  options,
  defaultValue = '',
  direction = 'row',
  ...rest
}: Props) => {
  const [check, setCheck] = React.useState(defaultValue)

  return (
    <S.Wrapper direction={direction}>
      {options?.map((option) => (
        <S.WrapperItem
          type="button"
          key={option.value}
          isChecked={check === option.value}
        >
          <label htmlFor={option.value}>
            <input
              defaultChecked={option.value === defaultValue}
              value={option.value}
              type="radio"
              id={option.value}
              checked={check === option.value}
              onChange={(e) => setCheck(e.target.value)}
              {...rest}
            />
            <S.ContainerChecked>
              <S.Check />
              <S.Label>
                <p>{option.label}</p>
              </S.Label>
            </S.ContainerChecked>
          </label>
        </S.WrapperItem>
      ))}
    </S.Wrapper>
  )
}

export default Radio
