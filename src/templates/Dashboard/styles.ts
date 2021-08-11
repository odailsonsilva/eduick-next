import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white[900]};
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    overflow: hidden;
  `}
`

export const Content = styled.div``

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 2.8rem 2.4rem;

    overflow: auto;
  `}
`

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20rem;
  height: 20rem;

  margin: 2rem auto;

  ${media.lessThan('medium')`
    width: 12rem;
    height: 12rem;
  `}
`

export const ContainerNotData = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    margin: 3rem auto;

    width: 20rem;
    height: 20rem;

    h2 {
      font-size: 2.1rem;
      color: ${theme.colors.purple[900]};
    }
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  margin: 3rem auto;

  max-width: 1140px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: 800px) {
    grid-gap: 2rem;
  }

  @media (max-width: 618px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: auto;

    width: 100vw;
    min-height: 6rem;

    background: ${theme.colors.white[500]};

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.4rem;
      line-height: 160%;
      color: #343434;

      display: inline-block;

      span {
        font-weight: bold;
      }

      + p {
        margin-left: 0.8rem;
      }
    }

    ${media.lessThan('medium')`
      p.footer__content__copyright {
        display: none;
      }
    `}
  `}
`
