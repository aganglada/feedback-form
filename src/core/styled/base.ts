import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    line-height: 1.6em;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    outline-color: ${(p) => p.theme.brandColor};
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.6em;
    letter-spacing: 0.3px;
    -webkit-font-smoothing: antialiased;
    background-color: ${(p) => p.theme.backgroundColor};
    color: ${(p) => p.theme.fontColor};
  }

  ol, ul {
    list-style: none;
  }

  button, input {
    padding: 0;
    border: 0;
    margin: 0;
    background: transparent;
    font-size: inherit;
    font-family: inherit;
  }

  a {
    color: ${(p) => p.theme.brandColor};
    text-decoration: none;
  }
`
