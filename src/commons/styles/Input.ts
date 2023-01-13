import styled from "@emotion/styled";

const Input = styled.input`
  width: 340px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d1d5d9;
  padding: 20px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Input1 = styled(Input)`
  border-radius: 8px 8px 0px 0px;
  padding: 20px;
`;

export const Input2 = styled(Input)`
  border-width: 0px 1px 1px 1px;
  border-radius: 0px 0px 8px 8px;
`;

export const Input3 = styled(Input)`
  border-radius: 8px;
  /* margin-bottom: 10px; */
`;

export const Input4 = styled(Input)`
  border-width: 0px 1px 1px 1px;
`;

export const UserEditInput = styled(Input3)`
  width: 100%;
  margin-bottom: 10px;
`;
