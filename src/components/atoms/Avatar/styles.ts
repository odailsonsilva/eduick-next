import styled, { css, DefaultTheme } from 'styled-components'
import { AvatarProps } from '.'

const modifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3.4rem;
    width: 3.4rem;

    position: relative;

    &::after {
      content: '';
      width: 0.96rem;
      height: 0.96rem;
      background: ${theme.colors.yellow[500]};
      border-radius: 50%;

      position: absolute;
      top: -4px;
      right: 1px;
    }
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    width: 5rem;

    position: relative;

    &::after {
      content: '';
      width: 0.96rem;
      height: 0.96rem;
      background: ${theme.colors.yellow[500]};
      border-radius: 50%;

      position: absolute;
      top: -1px;
      right: 2px;
    }
  `
}

export const Wrapper = styled.div<AvatarProps>`
  ${({ theme, size }) => css`
    ${modifiers[size!](theme)}

    img {
      width: 100%;
      height: 100%;

      border-radius: 50%;
    }
  `}
`
