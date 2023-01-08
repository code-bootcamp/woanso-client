import styled from "@emotion/styled";
import { bool } from "yup";

export const OutWrapper = styled.div`
background: #FFFBF2;
width: 1920px;
height: 1176px;
`;
export const InnerWrapper = styled.div`
  margin: 100px 0px;
  text-align: center;
`;
export const IdpwFindWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;
export const Title = styled.div`
  font-size: 32px;
`;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 50px; */
  /* margin-bottom: 40px; */
`;

interface StyleProps {
  qqq?: boolean;
  ccc?: boolean;
  bbb?: boolean;
}
export const Nav = styled.div`
  font-size: 20px;
  /* border-bottom: 1px solid gray; */
  color: ${(props: StyleProps) => (props.qqq ? "#77170D" : "black")};
  padding: 7px 20px;
  /* background-color: ${(props: StyleProps) => (props.qqq ? "#77170d" : "white")}; */
  border-radius: 8px 8px 0 0;
  /* width: 300px; */
height: 44px;
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 100%;
`;
export const Nav2 = styled.div`
  font-size: 20px;
  /* border-bottom: 1px solid gray; */
  color: ${(props: StyleProps) => (props.ccc ? "#77170D" : "black")};
  /* background-color: ${(props: StyleProps) => (props.ccc ? "#77170d" : "white")}; */
  border-radius: 8px 8px 0 0;
  padding: 7px 20px;
  /* width: 193px; */
height: 44px;
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 100%;
`;
export const InputWrapper = styled.div`
  display: flex;
  width: 450px;
  /* margin-bottom: 60px; */
  flex-direction: column;
  /* border: 2px solid
    ${(props: StyleProps) => (props.bbb ? "#F5EFE3" : "#F5EFE3")}; */
  align-items: center;
  padding: 40px;

`;
export const Input = styled.input`
  /* border: none;
  border-bottom: 1px solid gray;
  text-align: start;
  margin-bottom: 40px;
  padding: 15px;
  margin-top: 20px;
  display: flex; */
  width: 340px;
height: 50px;
background: #FFFFFF;
border: 1px solid #D1D5D9;
border-radius: 8px;
padding: 15px;
margin-bottom: 10px;
`;

export const Input2 = styled.input`
  border: none;
  text-align: start;
  padding: 15px;
  width: 250px;
  margin-top: 20px;
  display: flex;
`;
export const Line = styled.div`
  background-color: gray;
  width: 300px;
  margin-bottom: 40px;
  height: 0px;
  border-bottom: 1px solid gray;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const CheckButton = styled.div`
  /* width: 200px;
  height: 40px;
  color: #ffffff;
  padding: 10px;
  background-color: #77170d;
  cursor: pointer; */
  width: 340px;
height: 50px;
background: #77170D;
border-radius: 8px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 100%;
color: #FFFFFF;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`;
export const Button = styled.button`
  width: 50px;
  height: 28px;
  /* color: #ffffff; */
  padding: 6px;
  background-color: #f5efe3;
  font-size: 12px;
  margin-top: 30px;
  cursor: pointer;
  /* margin-right: 100px; */
  /* margin-left: 80px; */
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckWrapper2 = styled.div`
  display: flex;
`;

export const Input3 = styled.input`
width: 340px;
height: 50px;
background: #FFFFFF;
border: 1px solid #D1D5D9;
border-radius: 8px 8px 0px 0px;

`
export const Input4 = styled.input`
width: 340px;
height: 50px;
background: #FFFFFF;
border-width: 0px 1px 1px 1px;
border-style: solid;
border-color: #D1D5D9;
border-radius: 0px 0px 8px 8px;
margin-bottom: 20px;
`