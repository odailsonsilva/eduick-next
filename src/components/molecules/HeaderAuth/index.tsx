import React from 'react'
import Link from 'next/link'
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi'

import MediaMatch from 'components/molecules/MediaMatch'
import { Button, ThemesButton } from 'components/atoms/Button'
import { Logo } from 'components/atoms/Logo'

import * as S from './styles'
import { useMediaQuery } from 'react-responsive'
import { Avatar } from 'components/atoms/Avatar'

type LinksData = {
  title: string
  href: string
}

export type HeaderProps = {
  links: LinksData[]
  buttonText: string
  themeButton?: ThemesButton
  openChange?: (op: boolean) => void
  onClick: () => void
}

export const HeaderAuth = ({
  links,
  openChange,
  themeButton,
  buttonText,
  onClick
}: HeaderProps) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [scrolled, setScrolled] = React.useState(false)
  const isMobileOrTablet = useMediaQuery({ maxWidth: 767 })

  const refElement = React.useRef<any>(null)

  function handleClickOutside(event: any) {
    if (refElement.current && !refElement.current?.contains(event.target)) {
      setIsOpen(false)
    }
  }

  // CAPTURA A MUDANCA DE ESTADO DO ISOPEN E PASSAR PARA COMPONENTE PAI (COMUNICACAO INDIRETA )
  React.useEffect(() => {
    if (openChange) {
      openChange!(isOpen)
    }
  }, [isOpen])

  // MONITORA "CLICK" FORA DO ELEMENTO NAV (QUANDO MOBILE)
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refElement])

  return (
    <S.Wrapper isOpen={isOpen} isScrolled={scrolled} id="header">
      <S.WrapperContentDesktop>
        <S.WrapperLeft isOpen={isOpen}>
          <div className="wrapper__lef__logo" onClick={() => setIsOpen(false)}>
            <Link href="/" passHref>
              <Logo
                aria-label="Logo Eduick"
                activedDetails={!isMobileOrTablet}
              />
            </Link>
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
            <Button themeButton={themeButton} onClick={onClick}>
              {buttonText}
            </Button>
          </MediaMatch>

          <MediaMatch lessThan="medium">
            <button
              type="button"
              className="wrapper__right__dropdown"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FiChevronUp color="#2E3A59" size="24px" />
              ) : (
                <FiChevronDown color="#2E3A59" size="24px" />
              )}
            </button>
          </MediaMatch>

          <Avatar />
        </S.WrapperRight>
      </S.WrapperContentDesktop>

      <MediaMatch lessThan="medium">
        <S.WrapperMobileNav isOpen={isOpen}>
          <S.Nav aria-label="Menu" ref={refElement}>
            <ul className="list">
              <li className="list__item" onClick={() => setIsOpen(false)}>
                <Link href="/" passHref>
                  {buttonText}
                </Link>

                <FiArrowRight color="#2E3A59" size="16px" />
              </li>

              <li
                className="list__item--logout"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/" passHref>
                  LOGOUT
                </Link>

                <FiArrowRight color="#2E3A59" size="16px" />
              </li>
            </ul>
          </S.Nav>
        </S.WrapperMobileNav>
      </MediaMatch>
    </S.Wrapper>
  )
}
