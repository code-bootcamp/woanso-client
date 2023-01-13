import styled from "@emotion/styled";

export const UserEditPwWrap = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px 40px;
`;

export const Title = styled.div`
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  color: #738096;
  padding-top: 10px;
`;

export const CheckBoxWrap = styled.div`
  width: 100%;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d1d5d9;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 5px;
`;

export const CheckBox = styled.input`
  height: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #717171;
  display: none;
`;

export const CheckBoxLavel = styled.label`
  cursor: pointer;
  content: url("/icon/signup.png");
  width: 18px;
  height: 18px;
  :active {
    content: url("/icon/signup2.png");
  }
`;

export const CheckBoxTitle = styled.div`
  font-size: 12.5px;
  margin-left: -20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  font-weight: bold;
  font-size: 1rem;
`;

export const SubmitButton = styled.div`
  width: 240px;
  height: 50px;
  line-height: 50px;
  background-color: #751312;
  color: white;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
`;

export const BackButton = styled.div`
  width: 240px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #d1d5d9;
  color: #738096;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
`;
