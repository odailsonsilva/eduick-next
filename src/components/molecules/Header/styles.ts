import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  isOpen: boolean
  isScrolled?: boolean
}

export const Wrapper = styled.header<WrapperProps>`
  ${({ theme, isOpen, isScrolled }) => css`
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      width: 100%;

      padding: 2.4rem;

      position: relative;

      z-index: ${theme.layers.overlay};

      ${isOpen &&
      css`
        background: ${theme.colors.purple[900]};
        position: fixed;
      `}
    }
  `}
`

export const WrapperContentDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WrapperLeft = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    display: flex;
    align-items: center;

    div.wrapper__left__logo {
      cursor: pointer;
    }

    @media (max-width: 767px) {
      width: 100vw;

      div.wrapper__left__logo {
        margin-left: ${isOpen ? '0px' : '2rem'};
        transition: all 0.2s ease-in-out;
      }
    }
  `}
`

export const IconWrapper = styled.div`
  cursor: pointer;
`

export const WrapperMobileNav = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    transition: all 0.2s ease-in-out;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    opacity: ${isOpen ? 1 : 0};
    transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};

    padding: 0 2.4rem;

    z-index: ${theme.layers.menu};

    pointer-events: none;

    ${isOpen &&
    css`
      top: 70px;

      background: ${theme.colors.purple[900]};
      pointer-events: visible;
    `}
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxlg};

    ul {
      display: flex;
      align-items: center;

      li {
        display: flex;

        position: relative;

        + li {
          margin-left: ${theme.spacings.xlg};
        }

        a {
          color: ${theme.colors.white[500]};
          text-decoration: none;

          font-size: 1.4rem;
          line-height: 1.9rem;
          font-weight: normal;
        }

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background: ${theme.colors.white[500]};
          transform: scale(0, 1);
          transform-origin: 0% 100%;
          transition: transform 0.2s ease;

          position: absolute;
          bottom: -2px;
        }

        &:hover::after {
          transform: scale(1, 1);
        }
      }
    }

    @media (max-width: 767px) {
      margin-left: 0;

      width: 100%;

      ul {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li + li {
          margin-left: 0;
          margin-top: 1.5rem;
        }

        li > a {
          font-size: 2.1rem;
          line-height: 2.9rem;
        }
      }

      div.menu__button {
        margin-top: 6rem;

        width: 100%;

        button {
          width: 100%;
        }
      }
    }
  `}
`

export const WrapperRight = styled.div``

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
