import React from 'react'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import { FiX } from 'react-icons/fi'

import MediaMatch from 'components/MediaMatch'
import { Button, ThemesButton } from 'components/atoms/Button'
import { Logo } from 'components/atoms/Logo'

import * as S from './styles'

type LinksData = {
  title: string
  href: string
}

export type HeaderProps = {
  links: LinksData[]
  buttonText: string
  themeButton?: ThemesButton
  openChange?: (op: boolean) => void
}

export const Header = ({
  links,
  openChange,
  themeButton,
  buttonText
}: HeaderProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  // FUNÇÃO PARA CONTROLOAR O SCROLL
  function handleScroll() {
    setScrolled(window.scrollY > 10)
  }

  // CAPTURA A MUDANCA DE ESTADO DO ISOPEN E PASSAR PARA COMPONENTE PAI (COMUNICACAO INDIRETA )
  React.useEffect(() => {
    if (openChange) {
      openChange!(isOpen)
    }
  }, [isOpen])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Wrapper isOpen={isOpen} isScrolled={scrolled} id="header">
      <S.WrapperContentDesktop>
        <S.WrapperLeft isOpen={isOpen}>
          {/* MEDIA MATCH É UM COMPONENTE QUE CONTROLA A VISIBILIDADE DE UM ELEMENTO */}
          <MediaMatch lessThan="medium">
            {!isOpen && (
              <S.IconWrapper onClick={() => setIsOpen(true)}>
                <ReactSVG src="/icons/hamburger.svg" />
              </S.IconWrapper>
            )}
          </MediaMatch>

          <div className="wrapper__left__logo">
            <Logo aria-label="Logo Eduick" />
          </div>

          <MediaMatch greaterThan="medium">
            <S.Nav aria-label="Menu">
              <ul className="list">
                {links.map((link, index) => (
                  <li key={index} className="list__item">
                    <Link href={link.href} passHref>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </S.Nav>
          </MediaMatch>
        </S.WrapperLeft>

        <S.WrapperRight aria-label="Button get started">
          <MediaMatch greaterThan="medium">
            <Button themeButton={themeButton}>{buttonText}</Button>
          </MediaMatch>

          <MediaMatch lessThan="medium">
            {isOpen && (
              <S.ButtonClose type="button" onClick={() => setIsOpen(false)}>
                <FiX size="24px" color="#fff" />
              </S.ButtonClose>
            )}
          </MediaMatch>
        </S.WrapperRight>
      </S.WrapperContentDesktop>

      <MediaMatch lessThan="medium">
        <S.WrapperMobileNav isOpen={isOpen}>
          <S.Nav aria-label="Menu">
            <ul className="list">
              {links.map((link, index) => (
                <li key={index} className="list__item">
                  <Link href={link.href} passHref>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="menu__button">
              <Button themeButton={themeButton}>{buttonText}</Button>
            </div>
          </S.Nav>
        </S.WrapperMobileNav>
      </MediaMatch>
    </S.Wrapper>
  )
}
