import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>
}
