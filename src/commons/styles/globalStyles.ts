import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  /* 다운받은 폰트 연동하기 */
  /* @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css); */

  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "Noto Sans KR", "sans-serif";
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

  input {
    outline-color: rgba(250, 173, 20, 0.5);
  }

  ul {
    list-style: none;
  }

  a {
    color: none;
  }

  p {
    margin: 0;
  }
`;
