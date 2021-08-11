import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 3rem;
      color: ${theme.colors.white[500]};

      margin-top: 1.6rem;
    }

    div.wrapper__button {
      margin-top: 2.4rem;
      width: 100%;

      > button {
        width: 100%;
      }
    }
  `}
`
