import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    div.wrapper__header {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 2.8rem;
        line-height: 118.5%;
        letter-spacing: -0.06em;
        font-weight: 400;

        color: ${theme.colors.white[500]};

        span {
          color: ${theme.colors.yellow[500]};
          font-size: 3.8rem;

          text-transform: uppercase;
          font-weight: 700;
        }

        margin-bottom: 4.8rem;
      }

      > div > button {
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }

    @media (max-width: 767px) {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      padding: 2.4rem;

      h1 {
        margin-bottom: 3.4rem;
      }
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > div.form__input + div.form__input {
      margin-top: 1.6rem;
    }

    > div.form__button {
      margin-top: 2.7rem;
      margin-left: auto;
    }

    @media (max-width: 767px) {
      > div.form__button {
        width: 100%;

        > button {
          width: 100%;
        }
      }
    }
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    margin: 2.4rem 0;

    > p {
      font-size: 1.4rem;
      color: ${theme.colors.white[500]};

      position: relative;
      width: 100%;

      text-align: center;

      &::before {
        content: '';
        width: 45%;
        height: 1px;

        position: absolute;
        left: 0;
        top: 10px;

        background: ${theme.colors.white[500]};
      }

      &::after {
        content: '';
        width: 45%;
        height: 1px;

        position: absolute;
        right: 0;
        top: 10px;

        background: ${theme.colors.white[500]};
      }
    }
  `}
`

export const BTNGitHub = styled.button`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 4.8rem;

    font-size: 1.4rem;
    font-weight: bold;

    border: none;
    border-radius: 0.4rem;

    padding: 1.4rem 4.4rem;

    cursor: pointer;

    transition: all 0.2s ease;

    background: ${theme.colors.white[500]};

    span {
      margin-left: 0.8rem;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(1);
    }
  `}
`
