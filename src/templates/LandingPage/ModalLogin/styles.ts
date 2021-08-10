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

    ${media.lessThan('medium')`
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      padding: 2.4rem;

      h1 {
        margin-bottom: 3.4rem;
      }
    `}
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

    ${media.lessThan('medium')`
      > div.form__button {
        width: 100%;

        > button {
          width: 100%;
        }
      }
    `}
  `}
`
