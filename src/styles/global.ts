import { createGlobalStyle, css } from 'styled-components'
import { transparentize } from 'polished'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -webkit-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    body,
    #__next {
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      overflow-x: hidden;
    }

    .react-modal-overlay {
      background: ${transparentize(0.2, theme.colors.purple[900])};
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 50;
    }

    ${media.lessThan('medium')`
      .react-modal-overlay {
          background:${theme.colors.purple[500]};
      }
    `}

    ${media.greaterThan('medium')`
      .react-modal-content {
        background: #fff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        padding: 4rem;
        outline: none;

        margin: 0 1.6rem;

        position: relative;

        background: ${theme.colors.purple[500]};
        width: 52.5rem;
      }
    `}
  `}


`

export default GlobalStyles
