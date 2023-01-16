import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import { size } from "../../../../commons/styles/MediaQuery";
import { IsAny } from "react-hook-form";

interface IStypePros {
  isScroll: boolean;
}

export const Header = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.4) 0px 0px 20px 0px;
`;

export const UserMenuWrap = styled.div`
  height: 30px;
  background-color: ${(props: IStypePros) =>
    props.isScroll ? "#000000" : "#ffffff"};
  color: ${(props: IStypePros) => (props.isScroll ? "#ffffff" : "#787878")};
  border-bottom: ${(props: IStypePros) =>
    props.isScroll ? "1px solid #ffffff" : "1px solid #ffffff"};
  position: relative;
`;

export const BtnsWrap = styled.div`
  width: 1000px;
  line-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Btn = styled.div`
  font-size: 0.75rem; //12px
  cursor: pointer;
`;

export const Block = styled.span`
  font-size: 0.5rem;
  padding: 0 5px;
`;

export const Logo = styled.p`
  font-family: "roundGothicBold";
  letter-spacing: 3px;
  padding-right: 20px;
  cursor: pointer;
  color: #77170d;

  @media ${size.tablet} {
    display: none;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IStypePros) =>
    props.isScroll ? "#ffffff" : "#f5efe3"};
  color: ${(props: IStypePros) => (props.isScroll ? "#333333" : "#000000")};
  font-weight: bold;
`;

export const MenuListWrap = styled.div`
  padding: 1.5rem 0;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    align-items: center;

    li {
      font-size: 16px;
      padding-right: 16px;
      cursor: pointer;
      padding: 0 20px;

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #717171;
  border-radius: 4px;

  @media ${size.mobile} {
    width: 70%;
    height: 30px;
    svg {
      width: 15px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: none;
  outline: none;
  padding-left: 15px;
  font-size: 0.75rem; //12px
`;

export const SearchIcon = styled(SearchOutlined)`
  padding: 0 15px;
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
  width: 40vw;
  height: 100vh;
  background-color: rgba(244, 239, 228, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
`;

export const MLogo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 3px;
  color: #77170d;
  cursor: pointer;
  font-family: "roundGothicBold";
  padding: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MNavagation = styled.nav`
  width: 100%;
  ul {
    padding: 0;
    li {
      font-size: 1.2rem;
      font-weight: bold;
      padding: 2rem;
      border-bottom: 1px solid #bdbdbd;
      cursor: pointer;

      :hover {
        color: #77170d;
      }
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
