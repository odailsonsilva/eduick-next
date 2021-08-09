import * as S from './styles'

export type ThemesButton = 'primary' | 'secondary'

export type ButtonProps = {
  children: React.ReactNode
  themeButton?: ThemesButton
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  themeButton = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <S.Wrapper themeButton={themeButton} {...rest}>
      {children}
    </S.Wrapper>
  )
}
