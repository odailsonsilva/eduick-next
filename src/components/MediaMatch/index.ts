import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints, generateMedia } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

const breakPoints = generateMedia({
  huge: '1440px',
  large: '1170px',
  medium: '767px',
  small: '450px'
})

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${breakPoints.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${breakPoints.greaterThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
