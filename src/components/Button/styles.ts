import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    min-width: 20.9rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
    font-weight: bold;
    color: ${theme.colors.purple[600]};
    text-transform: uppercase;

    background: ${theme.colors.yellow[500]};
    border: none;
    border-radius: 0.4rem;

    padding: 1.4rem;

    cursor: pointer;

    transition: all 0.2s ease;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
