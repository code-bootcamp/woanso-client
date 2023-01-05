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

  p {
    margin: 0;
  }
`;
