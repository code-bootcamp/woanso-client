import styled from "@emotion/styled";

export const OuterWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const InnerWrap = styled.div``;

export const Navigation = styled.nav`
  background-color: rgba(244, 239, 228, 0.6);
  backdrop-filter: blur(5px);
  ul {
    width: 100%;
    display: flex;
    padding: 0 100px;
    li {
      width: 20%;
      list-style: none;
      font-size: 24px;
      padding: 25px 0;
      text-align: center;
      cursor: pointer;
      :hover {
        color: #7ab688;
      }
    }
  }
`;
