import Link from 'next/link'

import { Logo } from 'components/atoms/Logo'

import * as S from './styles'
import { Button, ThemesButton } from 'components/atoms/Button'

type LinksData = {
  title: string
  href: string
}

export type HeaderProps = {
  links: LinksData[]
  buttonText: string
  themeButton?: ThemesButton
}

export const Header = ({ links, themeButton, buttonText }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.WrapperLeft>
        <Logo />
        <S.Nav>
          {links.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              {link.title}
            </Link>
          ))}
        </S.Nav>
      </S.WrapperLeft>

      <S.WrapperRight>
        <Button themeButton={themeButton}>{buttonText}</Button>
      </S.WrapperRight>
    </S.Wrapper>
  )
}
