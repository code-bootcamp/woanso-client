import styled from "@emotion/styled";

const StyleButton = styled.button`
  /* 공통 스타일 */
  outline: none;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  background: #77170d;
`;

export const SubmitButton1 = styled(StyleButton)`
  /* 큰 크기 */
  width: 400px;
  height: 88px;
  font-size: 24px;

  @media screen and (max-width: 568px) {
    /* 모바일 */
    width: 300px;
    /* background-color: green; */
  }
`;

export const SubmitButton2 = styled(StyleButton)`
  /* 중간 크기 */
  width: 200px;
  height: 45px;
  font-size: 16px;
  border-radius: 4px;
`;

export const SubmitButton3 = styled(StyleButton)`
  /* 작은 크기 */
  width: 100px;
  height: 40px;
  font-size: 16px;
`;

export const CancelButton = styled(StyleButton)`
  width: 400px;
  height: 88px;
  font-size: 24px;
  background: #fff;
  color: black;
  border: 1px solid black;
`;

const LigthButton = styled.button`
  /* 공통 스타일 */
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 45px;
  background: #f5efe3;
  color: black;
  cursor: pointer;
`;

export const RentBtn = styled(LigthButton)`
  font-weight: 700;
  color: #77170d;
  margin: 20px 0;
`;

export const SubmitButton = styled.button`
  width: 340px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 8px;
  background: #77170d;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;
