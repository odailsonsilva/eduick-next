import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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

export const Errors = styled.div`
  ${({ theme }) => css`
    font-size: 1.4rem;
    margin-top: 0.5rem;
    color: #f44336;
  `}
`

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

      cursor: pointer;
    }

    ${media.lessThan('medium')`
      padding: 1rem 2.2rem 1rem 2.2rem;
    `}
  `}
`

type InputStyledProps = {
  error: boolean
}

export const Wrapper = styled.main<InputStyledProps>`
  ${({ error }) => css`
    ${error &&
    css`
      ${WrapperInput} {
        border-color: #f44336;
      }
    `}
  `}
`
