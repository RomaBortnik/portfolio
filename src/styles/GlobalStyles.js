import { css } from '@emotion/react';

import eotRegular from '../fonts/Poppins-Regular.eot';
import eotMedium from '../fonts/Poppins-Medium.eot';
import eotSemiBold from '../fonts/Poppins-SemiBold.eot';
import woff2Regular from '../fonts/Poppins-Regular.woff2';
import woff2Medium from '../fonts/Poppins-Medium.woff2';
import woff2SemiBold from '../fonts/Poppins-SemiBold.woff2';
import woffRegular from '../fonts/Poppins-Regular.woff';
import woffMedium from '../fonts/Poppins-Medium.woff';
import woffSemiBold from '../fonts/Poppins-SemiBold.woff';
import svgRegular from '../fonts/Poppins-Regular.svg';
import svgMedium from '../fonts/Poppins-Medium.svg';
import svgSemiBold from '../fonts/Poppins-SemiBold.svg';
import ttfRegular from '../fonts/Poppins-Regular.ttf';
import ttfMedium from '../fonts/Poppins-Medium.ttf';
import ttfSemiBold from '../fonts/Poppins-SemiBold.ttf';

import woffArchitectsDaughterRegular from '../fonts/AnyConv.com__ArchitectsDaughter-Regular.woff';
import woff2ArchitectsDaughterRegular from '../fonts/AnyConv.com__ArchitectsDaughter-Regular.woff2';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    src: url('${eotRegular}');
    src: url('${eotRegular}?#iefix') format('embedded-opentype'),
      url('${woff2Regular}') format('woff2'),
      url('${woffRegular}') format('woff'),
      url('${ttfRegular}') format('truetype'),
      url('${svgRegular}#Poppins-Regular') format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 500;
    font-style: normal;
    src: url('${eotMedium}');
    src: url('${eotMedium}?#iefix') format('embedded-opentype'),
      url('${woff2Medium}') format('woff2'), url('${woffMedium}') format('woff'),
      url('${ttfMedium}') format('truetype'),
      url('${svgMedium}#Poppins-Medium') format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 600;
    font-style: normal;
    src: url('${eotSemiBold}');
    src: url('${eotSemiBold}?#iefix') format('embedded-opentype'),
      url('${woff2SemiBold}') format('woff2'),
      url('${woffSemiBold}') format('woff'),
      url('${ttfSemiBold}') format('truetype'),
      url('${svgSemiBold}#Poppins-SemiBold') format('svg');
  }

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
    font-family: 'Architects Daughter', 'Poppins', sans-serif;
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
