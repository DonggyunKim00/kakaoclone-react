import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  body {
    font-family: KakaoSmall,Apple SD Gothic Neo,Malgun Gothic,맑은 고딕,sans-serif;;
    font-wieght: 400;
    font-size: 14px;
    max-width: 1296px;
    margin: 0 auto;
  }
  
  h1{
    font-size: 2em;
    font-weight: 400;
  }

  svg{
    margin-right: 24px;
  }

`;

export default GlobalStyle;
