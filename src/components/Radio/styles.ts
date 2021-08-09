import styled, { css } from 'styled-components'

type WrapperItemProps = {
  isChecked: boolean
}

export const WrapperItem = styled.button<WrapperItemProps>`
  ${({ theme, isChecked }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 5.6rem;
    align-items: center;
    justify-content: center;

    background: rgba(121, 85, 232, 0.3);
    padding: 1.4rem 1.6rem;

    width: fit-content;

    border-radius: ${theme.border.radius};

    border: none;

    ${isChecked &&
    css`
      border: 1px solid ${theme.colors.purple[300]};
      background: ${theme.colors.purple[700]};
    `}

    label {
      width: 100%;
      height: 5.6rem;
      font-size: 12px;
      font-weight: normal;
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        display: none;
      }
    }
  `}
`

export const Check = styled.div`
  ${({ theme }) => css`
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 50%;
    background: ${theme.colors.purple[300]};
    box-sizing: border-box;

    margin-right: 1.8rem;
    margin-bottom: 1px;

    border-radius: 50%;

    &::before {
      content: '';
      width: 100%;
      height: 100%;

      border-radius: 50%;
      background: ${theme.colors.yellow[500]} url('/icons/circle_checked.svg')
        center no-repeat;

      display: block;
      transform: scale(0);
      transition: all 0.1s;
    }
  `}
`

export const Label = styled.div`
  ${({ theme }) => css`
    p {
      font-size: 1.4rem;
      text-transform: uppercase;

      color: ${theme.colors.white[500]};
      font-weight: ${theme.font.bold};

      padding: 0;
    }
  `}
`

export const ContainerChecked = styled.div`
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    place-content: center;

    width: fit-content;

    input:checked + ${ContainerChecked} {
      ${Check} {
        border-radius: 50%;
      }

      ${Check}::before {
        transform: scale(1);
      }
    }

    ${WrapperItem} + ${WrapperItem} {
      margin-left: ${theme.spacings.md};
    }
  `}
`
