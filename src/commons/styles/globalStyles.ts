import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { size } from "./MediaQuery";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  /* 다운받은 폰트 연동하기 */
  /* @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css); */

  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "Noto Sans KR", "sans-serif", "roundGothicBold";
  }

  // prettier-ignore
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
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body {
    font-size: 16px;
    font-weight: 400;
    max-width: 1920px;
    margin: 0 auto;

    @media ${size.mobile} {
      font-size: 8px;
    }
  }

  @font-face {
    font-family: "roundGothicBold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KorailRoundGothicBold.woff2")
      format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input {
    outline-color: rgba(250, 173, 20, 0.5);
  }

  ul {
    list-style: none;
  }

  a {
    color: #000000;
  }
`;
