import React from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import * as S from './styles'

type Types = 'text' | 'password'

export type InputProps = {
  label?: string
  type?: Types
  isPassword?: boolean
  errors?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  (
    { label = '', type = 'text', isPassword = false, errors = '', ...rest },
    ref
  ) => {
    const [value, setValue] = React.useState('')

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
      <S.Wrapper error={!!errors}>
        {!!label && <S.Label htmlFor={rest.name}>{label}</S.Label>}
        <S.WrapperInput>
          <S.InputStyled
            type={typeState}
            ref={ref}
            {...rest}
            {...(label ? { id: rest.name } : {})}
          />
          {isPassword && (
            <div
              className="wrapper__input__icon"
              onClick={handleChangeType}
              data-testid="button--password"
            >
              {typeState === 'password' ? (
                <FiEye size="24px" color="#A68EEF" />
              ) : (
                <FiEyeOff size="24px" color="#A68EEF" />
              )}
            </div>
          )}
        </S.WrapperInput>
        {!!errors && <S.Errors>{errors}</S.Errors>}
      </S.Wrapper>
    )
  }

export const Input = React.forwardRef(InputBase)
