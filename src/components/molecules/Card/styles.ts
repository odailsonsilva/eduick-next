import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white[500]};
    box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.08);
    border-radius: ${theme.border.radius};

    padding: 1rem;

    width: 27.2rem;
    height: 25.6rem;

    ${media.greaterThan('medium')`
      padding: 1.2rem 1.3rem;

      width: 36rem;
      height: 32.3rem;
    `}
  `}
`

export const WrapperImage = styled.div`
  img {
    width: 253px;
    height: 123px;

    border-radius: 4px 4px 0px 0px;
  }

  ${media.greaterThan('medium')`
      img {
        width: 335px;
        height: 163px;
      }
    `}
`

export const WrapperInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1rem 0 1.6rem;
`

export const Rating = styled.div`
  font-size: 1rem;
`

export const Lessions = styled.div`
  ${({ theme }) => css`
    background: ${transparentize(0.8, theme.colors.purple[100])};
    border-radius: ${theme.border.radius};
    height: 2.4rem;

    padding: 0.4rem 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;

      margin-top: 2px;
    }
  `}
`

export const WrapperName = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: 1.6rem;
      line-height: 140%;
      font-weight: 600;

      color: ${theme.colors.purple[900]};
    }

    ${media.greaterThan('medium')`
      h2 {
        font-size: 1.8rem;
      }
    `}
  `}
`
