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
    flex: 1;
    height: 5.4rem;
    font-size: 1.6rem;
    color: ${theme.colors.white[500]};

    background: transparent;
    border: none;

    &::placeholder {
      font-size: 1.6rem;
      color: ${theme.colors.white[500]};
    }
  `}
`

export const Errors = styled.div``

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.purple[300]};
    border-radius: ${theme.border.radius};

    height: 5.6rem;
    width: 100%;

    padding: 1.2rem 1.6rem 1.2rem 2.8rem;

    background: ${theme.colors.purple[700]};

    display: flex;
    box-sizing: border-box;
    align-items: center;

    div.wrapper__input__icon {
      margin-top: 4px;

      margin-left: 0.8rem;
    }
  `}
`

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