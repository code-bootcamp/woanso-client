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
`;

export const Input = styled.input`
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    cursor: pointer;
    padding-left: 23px;
    background-repeat: no-repeat;
    background-image: url("/icon/signup.png");
  }
  input[type="checkbox"]:checked + label {
    background-image: url("/icon/signup2.png");
  }

  input[type="checkbox"] {
    display: none;
  }
`;

export const CheckBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d1d5d9;
  border-radius: 8px;
  padding: 10px;
  gap: 5px;
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
