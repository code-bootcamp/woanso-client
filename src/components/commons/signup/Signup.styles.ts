import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div``;

export const Wrapper = styled.div`
  padding: 100px 0;
  height: 1176px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  background: #fffbf2;
`;

export const ContentsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.div`
  width: 49px;
  height: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #738096;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
`;

export const SignupButton = styled.button`
  width: 340px;
  height: 50px;
  background: #77170d;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;
  margin-top: 20px;
`;

export const SubWrapper = styled.div``;

export const CheckBox = styled.input`
  width: 53px;
  height: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #717171;
  display: none;
`;

export const ErrMessage = styled.div`
  font-size: 16px;
  color: red;
`;

export const ErrMessage2 = styled.div`
  font-size: 16px;
  color: red;
`;

export const Input2 = styled.input`
  width: 340px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d1d5d9;
  border-radius: 8px 8px 0px 0px;
  padding: 20px;
`;
export const Input3 = styled.input`
  width: 340px;
  height: 50px;
  background: #ffffff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #d1d5d9;
  border-radius: 0px 0px 8px 8px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const CheckBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  height: 120px;
  background: #ffffff;
  border: 1px solid #d1d5d9;
  border-radius: 8px;
  padding: 10px 0px 10px 0px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;
`;

export const CheckBoxLavel = styled.label`
  cursor: pointer;
  content: url("/signup.png");
  width: 19px;
  height: 19px;

  :active {
    content: url("/signup2.png");
  }
`;

export const CheckBoxTitle = styled.div`
  width: 65px;
  font-size: 12.5px;
`;
