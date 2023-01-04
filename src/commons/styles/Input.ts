import styled from "@emotion/styled";

const StyleInput = styled.input`
 background: white;
 border: 3px solid #f5efe3;
 border-radius: 20px;
 padding: 40px;
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 line-height: 100%;
 color: #6b6b6b;
`

// 회원가입 input
export const JoinInput = styled(StyleInput)`
  width: 786.96px;
  height: 64px;
`;

// 로그인 input
export const LoginInput = styled(StyleInput)`
  width: 100%;
  height: 77.48px;
   
   

@media screen and (max-width:568px) {
/* 모바일 */
width: 250px;
/* background-color: green; */
}

`;
