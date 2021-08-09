import React from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import * as S from './styles'

type Types = 'text' | 'password'

export type InputProps = {
  label?: string
  type?: Types
  isPassword?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  label,
  type = 'text',
  isPassword = false,
  ...rest
}: InputProps) => {
  const [value, setValue] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)
  const [typeState, setTypeState] = React.useState(type)

  function handleChangeType() {
    if (typeState === 'password') {
      return setTypeState('text')
    }

    return setTypeState('password')
  }

  React.useEffect(() => {
    if (isPassword) {
      setTypeState('password')
    }
  }, [])

  return (
    <S.Wrapper isFocused={isFocused}>
      {!!label && <S.Label>{label}</S.Label>}
      <S.WrapperInput>
        <S.InputStyled
          value={value}
          type={typeState}
          onFocus={() => setIsFocused(!isFocused)}
          onBlur={() => setIsFocused(!isFocused)}
          onChange={({ target: { value } }) => setValue(value)}
          {...rest}
        />
        {isPassword && (
          <div className="wrapper__input__icon" onClick={handleChangeType}>
            {typeState === 'password' ? (
              <FiEye size="24px" color="#A68EEF" />
            ) : (
              <FiEyeOff size="24px" color="#A68EEF" />
            )}
          </div>
        )}
      </S.WrapperInput>
    </S.Wrapper>
  )
}
