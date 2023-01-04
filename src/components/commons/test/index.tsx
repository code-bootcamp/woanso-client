import styled from "styled-components";
// import { media } from "../../../commons/styles/MediaQuery";

export default function TestPage() {
  const Box = styled.div`
    /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
    background: blue;
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;

    @media screen and (max-width: 580px) {
      /* 모바일 */
      background: orange;
    }
  `;
  return <Box>dksfj</Box>;
}

/* ${media.mobile`width: 200px; color: green; background: purple;`} */
/* ${media.tablet`width: 500px; color: red; background: black;`}; */
