import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const modifiersTheme = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow[500]};
    color: #6f48ec;
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.purple[900]};
    color: ${theme.colors.white[500]};
  `
}

export const Wrapper = styled.button<Pick<ButtonProps, 'themeButton'>>`
  ${({ theme, themeButton }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
    font-weight: bold;

    border: none;
    border-radius: 0.4rem;

    padding: 1.4rem 4.4rem;

    cursor: pointer;

    transition: all 0.2s ease;

    ${modifiersTheme[themeButton!](theme)}

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
