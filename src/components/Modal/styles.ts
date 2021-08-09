import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Wrapper = styled.div``

export const ButtonClose = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: -24px;
    right: -20px;

    background: ${theme.colors.purple[900]};
    filter: grayscale(0.3);
    width: 5rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    border: none;

    cursor: pointer;

    transition: background 0.2s ease;

    &:hover {
      background: ${shade(0.2, theme.colors.purple[900])};
    }
  `}
`
