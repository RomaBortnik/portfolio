import { css } from '@emotion/react';

import woffArchitectsDaughterRegular from '../fonts/AnyConv.com__ArchitectsDaughter-Regular.woff';
import woff2ArchitectsDaughterRegular from '../fonts/AnyConv.com__ArchitectsDaughter-Regular.woff2';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Architects Daughter';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('${woffArchitectsDaughterRegular}') format('woff'),
      url('${woff2ArchitectsDaughterRegular}') format('woff2');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Architects Daughter', cursive;
    font-style: normal;
    overflow-x: hidden;
  }

  body.backdrop {
    overflow: hidden;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
