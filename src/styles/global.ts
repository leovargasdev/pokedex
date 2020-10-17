import { createGlobalStyle } from 'styled-components';

import SFProDisplayBold from '~/assets/fonts/sf-pro-display-bold.ttf';
import SFProDisplayMedium from '~/assets/fonts/sf-pro-display-medium.ttf';
import SFProDisplayRegular from '~/assets/fonts/sf-pro-display-regular.ttf';

export default createGlobalStyle`

  @font-face {
    font-family: 'SF Pro Display';
    font-weight: 700;
    src: url('${SFProDisplayBold}');
  }
  @font-face {
    font-family: 'SF Pro Display';
    font-weight: 500;
    src: url('${SFProDisplayMedium}');
  }
  @font-face {
    font-family: 'SF Pro Display';
    font-weight: 400;
    src: url('${SFProDisplayRegular}');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.text.white};
    color: ${({ theme }) => theme.colors.text.black};
    font-family: 'SF Pro Display', serif;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, a {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
