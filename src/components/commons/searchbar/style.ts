import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #77170d;
  border-radius: 25px;
  margin-bottom: 30px;
  padding: 7px 15px;
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
