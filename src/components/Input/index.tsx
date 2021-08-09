import React from 'react'
import * as S from './styles'

export type InputProps = {
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, ...rest }: InputProps) => {
  const [value, setValue] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)

  return (
    <S.Wrapper isFocused={isFocused}>
      {!!label && <S.Label>{label}</S.Label>}
      <S.InputStyled
        value={value}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        onChange={({ target: { value } }) => setValue(value)}
        {...rest}
      />
    </S.Wrapper>
  )
}
