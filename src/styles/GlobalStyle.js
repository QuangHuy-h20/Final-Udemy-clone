import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*:before,
*after {
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
    box-sizing: border-box;
    width: 100%;
}

body {
    margin: 0;
    padding: 0;
    min-width: 60rem;
    font-family: sf pro text, -apple-system, BlinkMacSystemFont, Roboto, segoe ui, Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.6rem;
    color: #3c3b37;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: #0f7c90;
    position: relative;
}
svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
}

ul, li{
    list-style:none;
}
`;
