import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  isOpen: boolean
}

export const Wrapper = styled.header<WrapperProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;

    ${media.lessThan('medium')`
      width: 100%;
      height: 100%;

      z-index: ${theme.layers.menu};

      ${
        isOpen &&
        css`
          background: ${theme.colors.purple[900]};
        `
      }

    `}
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

    ${media.lessThan('medium')`
      width: 100vw;

      div.wrapper__left__logo {
        margin-left: ${isOpen ? '0px' : '2rem'};
        transition: all 0.3s ease-in-out;
      }
    `}
  `}
`

export const IconWrapper = styled.div`
  cursor: pointer;
`

export const WrapperMobileNav = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 35px);
    width: 100%;

    transition: all 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
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
          transition: transform 0.3s ease;

          position: absolute;
          bottom: -2px;
        }

        &:hover::after {
          transform: scale(1, 1);
        }
      }
    }

    ${media.lessThan('medium')`
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

          li > a{
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
      `}
  `}
`

export const WrapperRight = styled.div``

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`
