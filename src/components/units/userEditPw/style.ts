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
// export const CheckBoxLavel = styled.label`
//   cursor: pointer;
//   content: url("/signup.png");
//   width: 19px;
//   height: 19px;

//   :active {
//     content: url("/signup2.png");
//   }
// `;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const SubmitButton = styled.div`
  width: 100px;
  height: 40px;
  background-color: #751312;
  text-align: center;
  padding: 8px;
  color: white;
  border-radius: 15px;
`;
export const BackButton = styled.div`
  width: 100px;
  height: 40px;
  text-align: center;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 15px;
  cursor: pointer;
`;
