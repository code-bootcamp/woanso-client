import { css } from "@emotion/react";

export const globalStyles = css`
  /* 다운받은 폰트 연동하기 */
  /* @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css); */

  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "yang", "sans-serif";
  }

  html,
  body {
    font-size: 16px;
    font-weight: 400;
    max-width: 1920px;
    margin: 0 auto;
  }

  @font-face {
    font-family: "yang";
    src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  button {
    border: none;
  }
`;
