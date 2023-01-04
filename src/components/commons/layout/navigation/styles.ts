import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import { size } from "../../../../commons/styles/MediaQuery";

export const OuterWrap = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const InnerWrap = styled.div``;

export const Navigation = styled.div`
  background-color: rgba(244, 239, 228, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3.1rem;

  ul {
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    li {
      font-size: 16px;
      padding: 0 16px;
      cursor: pointer;
      :hover {
        color: #751313;
      }
    }

    @media ${size.tablet} {
      display: none;
    }
  }
`;

export const SearchWrap = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 4px 15px;
  background: #f6f6f6;
  border: 1px solid #cccccc;
  @media ${size.mobile} {
    width: 80%;
    height: 30px;
    svg {
      width: 15px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: #f6f6f6;
  color: #cccccc;
  padding-left: 5px;
`;

export const SearchIcon = styled(SearchOutlined)`
  padding-left: 15px;
  font-size: 24px;
`;

export const MobileMenuBtn = styled.div`
  @media ${size.tablet} {
    width: 5%;
  }
  img {
    width: 100%;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  width: 70vw;
  height: 100vh;
  background-color: rgba(244, 239, 228);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
`;

export const MLogo = styled.div`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  letter-spacing: 10px;
  color: #333;
  cursor: pointer;
  font-family: "roundGothicBold";
  padding: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MNavagation = styled.nav`
  width: 100%;
  ul {
    padding: 0;
    li {
      font-size: 2rem;
      padding: 1rem;
      border-bottom: 1px solid #bdbdbd;
    }
  }
`;

export const MCloseBtn = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  font-weight: 500;
  color: #111;
`;
