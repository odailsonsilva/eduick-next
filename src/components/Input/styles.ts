import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.white[500]};

    margin-bottom: ${theme.spacings.xsm};
  `}
`

export const InputStyled = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.purple[300]};
    border-radius: ${theme.border.radius};

    min-height: 5.6rem;
    width: 100%;

    padding: 1.2rem 2.8rem;

    font-size: 1.6rem;
    color: ${theme.colors.white[500]};

    background: ${theme.colors.purple[700]};

    &::placeholder {
      font-size: 1.6rem;
      color: ${theme.colors.white[500]};
    }
  `}
`

export const Errors = styled.div``

type InputStyledProps = {
  isFocused: boolean
}

export const Wrapper = styled.main<InputStyledProps>`
  ${({ theme, isFocused }) => css`
    ${isFocused &&
    css`
      ${InputStyled} {
        border-color: ${theme.colors.purple[900]};
      }
    `}
  `}
`
