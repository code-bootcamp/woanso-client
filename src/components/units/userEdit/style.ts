import styled from "@emotion/styled";

export const UserEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: #333333;
`;

export const TitleSub = styled.p`
  font-size: 1rem;
  color: #888888;
  margin: 20px 0 30px 0;
`;

export const Input = styled.input`
  width: 340px;
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  border: 1px solid #d1d5d9;
  border-radius: 8px;
  font-size: 0.75rem;
  color: #717171;
  margin-bottom: 20px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  width: 340px;
  height: 50px;
  background: #77170d;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;
