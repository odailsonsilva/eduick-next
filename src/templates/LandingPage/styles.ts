import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #7a57fd 0%, #6135d7 100%);

  width: 100vw;
  min-height: 100vh;

  overflow: auto;

  position: relative;

  div.wrapper__form__bg {
    position: absolute;

    right: 0;
    top: 70px;

    z-index: 5;

    pointer-events: none;
  }
`

export const Content = styled.div`
  ${media.greaterThan('medium')`
    max-width: 1170px;
    width: 100%;

    margin: 0 auto;

    padding: 4rem;
  `}
`

type ContainerProps = {
  isOpen: boolean
}

export const Container = styled.main<ContainerProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    z-index: ${theme.layers.base};

    ${media.greaterThan('large')`
      flex-direction: row;
    `}
  `}
`

export const WrapperIllustration = styled.div`
  ${({ theme }) => css`
    margin-top: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: ${theme.layers.base};

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
      }

      margin-bottom: 6rem;
    }

    ${media.greaterThan('large')`
      order: 0;

      margin-top: 14rem;
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
