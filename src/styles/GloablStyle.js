import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${reset}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    
  }

`;

export default GlobalStyle;
