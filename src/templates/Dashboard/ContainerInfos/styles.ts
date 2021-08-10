import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1140px;
    width: 100%;
    height: 27rem;
    margin: 0 auto;

    background: ${theme.colors.white[500]};
    box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.08);
    border-radius: ${theme.border.radius};

    padding: 3.2rem 2.1rem;

    div.container__left__top {
      position: relative;

      h2 {
        font-size: 2.1rem;
        line-height: 160%;
        color: ${theme.colors.purple[900]};
        font-weight: normal;

        span {
          color: ${theme.colors.yellow[500]};
          font-weight: bold;
        }
      }

      div:nth-child(2) {
        position: absolute;
        top: -70px;
        right: -10px;

        svg {
          width: 70px;
        }
      }
    }

    p {
      font-size: 1.4rem;
      line-height: 160%;
      font-family: 'Open Sans';
      color: #343434;

      margin-top: 2.6rem;
    }

    @media (min-width: 768px) {
      display: flex;

      div.container__left {
        margin-left: 3rem;

        flex: 1;

        div.container__left__top {
          h2 {
            font-size: 2.6rem !important;
          }

          > div:nth-child(2) {
            display: none;
          }
        }
      }

      p {
        font-size: 1.6rem !important;
      }
    }

    @media (min-width: 928px) {
      display: flex;

      div.container__left {
        margin-left: 3rem;

        flex: 1;

        div.container__left__top {
          h2 {
            font-size: 3.4rem !important;
          }

          > div:nth-child(2) {
            display: none;
          }
        }
      }

      p {
        font-size: 2.1rem !important;
      }
    }
  `}
`
