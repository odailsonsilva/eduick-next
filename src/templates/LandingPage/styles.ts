import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ContainerProps = {
  isOpen: boolean
}

export const Wrapper = styled.div<ContainerProps>`
  ${({ isOpen }) => css`
    background: linear-gradient(180deg, #7a57fd 0%, #6135d7 100%);

    width: 100vw;
    min-height: 100vh;

    overflow: auto;

    position: relative;

    overflow-x: hidden;

    ${isOpen &&
    css`
      height: fit-content;
    `}

    div.wrapper__form__bg {
      position: absolute;

      right: 0;

      z-index: 5;

      pointer-events: none;
    }

    ${media.greaterThan('large')`
div.wrapper__form__bg {
  right: -400px;
  top: 40px;
}
`}

    @media (min-width: 1928px) {
      div.wrapper__form__bg {
        right: 0px;
        top: 170px;
      }
    }

    @media (min-width: 2450px) {
      div.wrapper__form__bg {
        right: 250px;
      }
    }

    @media (min-width: 2900px) {
      div.wrapper__form__bg {
        display: none;
      }
    }
  `}
`

export const Content = styled.div`
  ${media.greaterThan('medium')`
    max-width: 1170px;
    width: 100%;

    margin: 0 auto;

    padding: 4rem;
  `}
`

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    z-index: ${theme.layers.base};

    ${media.greaterThan('large')`
      flex-direction: row;

      margin-top: 10rem;
    `}
  `}
`

export const WrapperIllustration = styled.div<ContainerProps>`
  ${({ theme, isOpen }) => css`
    margin-top: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: ${theme.layers.base};

    transition: position 1s ease;

    position: relative;

    max-height: 919px;
    max-width: 678px;

    display: ${isOpen ? 'none' : 'flex'};

    ${media.greaterThan('large')`
      margin-left: -190px;

      height: fit-content;
      width: fit-content;
    `}
  `}
`

export const WrapperForm = styled.div`
  ${({ theme }) => css`
    order: -1;
    padding: 2.4rem;

    z-index: 20;

    h1 {
      font-size: 2.8rem;
      line-height: 118.5%;

      color: ${theme.colors.white[500]};

      span {
        color: ${theme.colors.yellow[500]};

        text-transform: uppercase;
        font-weight: 700;
      }

      margin-bottom: 6rem;
    }

    > div > p {
      font-size: 1.6rem;
      line-height: 191.68%;

      color: ${theme.colors.white[500]};

      margin: 6rem 0;
    }

    ${media.greaterThan('medium')`
      padding: 0;
      margin-top: 6rem;
    `}

    ${media.greaterThan('large')`
      order: 0;

      margin-top: 4rem;


      h1 {
        font-size: 4.8rem;
        line-height: 5.7rem;
        letter-spacing: -0.06em;

        font-weight: normal;

        margin-bottom: 0;
      }
    `}
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    div.form__input {
    }

    div.form__radio {
      margin: 1.6rem 0;
    }

    div.form__button {
      width: 100%;

      button {
        width: 100%;
      }
    }

    ${media.greaterThan('large')`
       width: 60rem;
    `}
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    content: '',
    width: 100px;
    min-height: 20%;

    background: ${theme.colors.purple[900]};

    margin-top: -100px;

    z-index: 1;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  `}
`
