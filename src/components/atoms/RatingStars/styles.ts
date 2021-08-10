import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;

    + svg {
      margin-left: 0.3rem;
    }
  }

  ${media.greaterThan('medium')`
    svg + svg {
      margin-left: 0.5rem;
    }
  `}
`
