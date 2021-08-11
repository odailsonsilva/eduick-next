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

export const Wrapper = styled.div<Pick<AvatarProps, 'size'>>`
  ${({ theme, size }) => css`
    ${modifiers[size!](theme)}

    img {
      border-radius: 50%;
    }

    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    border-radius: 50%;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`
