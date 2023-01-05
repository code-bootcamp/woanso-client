import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  border-top: 1px solid #d3d3d3;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
export const Input = styled.input`
  border: none;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;
export const Btn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  width: 80px;
`;
