import { css } from '@emotion/react';

import woffRobotoRegular from '../fonts/AnyConv.com__Roboto-Regular.woff';
import woff2RobotoRegular from '../fonts/AnyConv.com__Roboto-Regular.woff2';
import woffRobotoMedium from '../fonts/AnyConv.com__Roboto-Medium.woff';
import woff2RobotoMedium from '../fonts/AnyConv.com__Roboto-Medium.woff2';
import woffRobotoBold from '../fonts/AnyConv.com__Roboto-Bold.woff';
import woff2RobotoBold from '../fonts/AnyConv.com__Roboto-Bold.woff2';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    src: url('${woffRobotoRegular}') format('woff'),
      url('${woff2RobotoRegular}') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    src: url('${woffRobotoMedium}') format('woff'),
      url('${woff2RobotoMedium}') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: normal;
    src: url('${woffRobotoBold}') format('woff'),
      url('${woff2RobotoBold}') format('woff2');
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
    width: 100vw;
  }

  body {
    width: 100vw;
    font-family: 'Roboto', serif;
    min-height: 100vh;

    font-style: normal;
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
