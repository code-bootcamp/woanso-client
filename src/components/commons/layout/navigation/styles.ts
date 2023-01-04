import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

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
  padding: 0 50px;

  ul {
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    li {
      font-size: 16px;
      padding: 20px 16px;
      cursor: pointer;
      :hover {
        color: #751313;
      }
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
