import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
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
  `}
`
