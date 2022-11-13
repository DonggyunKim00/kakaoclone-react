import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  html{
    width: 100vw;
    overflow-x: hidden;
  }
  body {
    font-family: KakaoSmall,Apple SD Gothic Neo,Malgun Gothic,맑은 고딕,sans-serif;;
    font-weight: 400;
    font-size: 14px;
    word-break: keep-all;    
    width: 100vw;
    overflow-x: hidden;
  }
  
  h1{
    font-size: 2em;
    font-weight: 400;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

export default GlobalStyle;
